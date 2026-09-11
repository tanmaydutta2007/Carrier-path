/**
 * Roadmap Renderer
 * Renders the structured Gravity Consultation and Interactive 3-Phase Timeline.
 */

export class RoadmapRenderer {
  constructor(containerId, onAskQuestionCallback) {
    this.container = document.getElementById(containerId);
    this.onAskQuestion = onAskQuestionCallback;
    this.currentConsultation = null;
  }

  render(consultation) {
    this.currentConsultation = consultation;
    if (!this.container) return;

    const { careerTitle, category, marketDemand, assessment, recommendedPaths, roadmap, clarifyingQuestion } = consultation;

    // Calculate total & completed milestones
    const allMilestones = [
      ...roadmap.shortTerm.milestones,
      ...roadmap.mediumTerm.milestones,
      ...roadmap.longTerm.milestones
    ];
    const totalCount = allMilestones.length;
    const completedCount = allMilestones.filter(m => m.completed).length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);

    const html = `
      <!-- Gravity Counseling Presentation Card -->
      <div class="glass-card gravity-counsel-card animate-fade-in">
        <div class="counsel-header">
          <div class="gravity-identity">
            <img src="./assets/gravity-avatar.svg" alt="Gravity AI" class="gravity-avatar-img" />
            <div class="gravity-identity-text">
              <h3>Gravity Career Consultation <span class="badge badge-cyan">Verified Strategy</span></h3>
              <p>Tailored Trajectory for <strong>${careerTitle}</strong> &bull; ${category}</p>
            </div>
          </div>
          <div style="display: flex; gap: 0.75rem; align-items: center;">
            <span class="badge badge-emerald">Demand: ${marketDemand}</span>
            <button id="exportRoadmapBtn" class="btn btn-secondary btn-sm" title="Export Plan">
              <span>📄 Export Plan</span>
            </button>
          </div>
        </div>

        <!-- Section 1: Assessment -->
        <div class="counsel-block">
          <div class="counsel-block-title">
            <span class="block-num">01</span>
            <span>Assessment & Profile Evaluation</span>
          </div>
          <div class="assessment-text">
            ${assessment.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
          </div>
        </div>

        <!-- Section 2: Recommended Paths -->
        <div class="counsel-block">
          <div class="counsel-block-title">
            <span class="block-num">02</span>
            <span>Recommended Strategic Paths (2–3 Options)</span>
          </div>
          <div class="recommended-paths-grid">
            ${recommendedPaths.map((path, idx) => `
              <div class="path-card ${path.isFeatured ? 'featured' : ''}">
                <div>
                  <span class="badge ${path.isFeatured ? 'badge-indigo' : 'badge-cyan'} path-badge">
                    ${path.isFeatured ? '★ Recommended' : `Option 0${idx + 1}`}
                  </span>
                  <h4>${path.title}</h4>
                  <p class="path-fit-text">${path.fit}</p>
                </div>
                <div class="path-meta">
                  <span class="badge badge-amber" style="text-transform: none;">Market: ${path.marketOutlook}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Overall Progress Tracker -->
        <div style="margin: 2rem 0; padding: 1.25rem 1.5rem; background: rgba(255, 255, 255, 0.025); border: 1px solid var(--border-glass); border-radius: var(--radius-md);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span style="font-weight: 700; font-size: 0.95rem;">Milestone Progress</span>
              <span class="badge badge-indigo" id="milestoneCounterBadge">${completedCount} of ${totalCount} Done</span>
            </div>
            <span style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);" id="progressPercentDisplay">${progressPercent}%</span>
          </div>
          <div style="height: 6px; background: rgba(255, 255, 255, 0.08); border-radius: var(--radius-full); overflow: hidden;">
            <div id="milestoneProgressBar" style="width: ${progressPercent}%; height: 100%; background: var(--grad-primary); transition: width 0.3s ease;"></div>
          </div>
        </div>

        <!-- Section 3: Actionable Roadmap -->
        <div class="counsel-block">
          <div class="counsel-block-title">
            <span class="block-num">03</span>
            <span>Actionable Step-by-Step Roadmap</span>
          </div>
          <div class="roadmap-timeline">
            <!-- Phase 1: Short-Term -->
            ${this.renderPhaseCard(roadmap.shortTerm, "shortTerm", "period-short", 1)}

            <!-- Phase 2: Medium-Term -->
            ${this.renderPhaseCard(roadmap.mediumTerm, "mediumTerm", "period-medium", 2)}

            <!-- Phase 3: Long-Term -->
            ${this.renderPhaseCard(roadmap.longTerm, "longTerm", "period-long", 3)}
          </div>
        </div>

        <!-- Section 4: Clarifying Question -->
        <div class="clarifying-question-card" style="margin-top: 2rem;">
          <div class="question-text-wrap">
            <div class="question-badge">Next Step Alignment</div>
            <div class="question-content">"${clarifyingQuestion}"</div>
          </div>
          <button id="replyClarifyingQuestionBtn" class="btn btn-accent btn-sm">
            <span>Discuss with Gravity</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.bindInteractions();
  }

  renderPhaseCard(phase, phaseKey, periodClass, phaseIndex) {
    return `
      <div class="roadmap-phase-card ${phaseIndex === 1 ? 'active-phase' : ''}">
        <div class="phase-header">
          <div class="phase-tag-wrap">
            <span class="phase-period-pill ${periodClass}">${phase.period}</span>
            <span class="phase-title">${phase.title}</span>
          </div>
          ${phase.certification ? `
            <span class="badge badge-emerald" title="Recommended Certification">
              🎖️ ${phase.certification}
            </span>
          ` : ''}
        </div>
        <p class="phase-objective">${phase.objective}</p>

        <!-- Milestones Checklist -->
        <div class="milestones-list">
          ${phase.milestones.map((m, idx) => `
            <label class="milestone-item ${m.completed ? 'completed' : ''}" data-phase="${phaseKey}" data-index="${idx}">
              <input type="checkbox" class="milestone-checkbox" ${m.completed ? 'checked' : ''} />
              <div class="milestone-content">
                <div class="milestone-text">${m.text}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <!-- Project Blueprint Pill -->
        ${phase.projectIdea ? `
          <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px dashed var(--border-glass); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap;">
            <div>
              <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-cyan); font-weight: 700;">
                ★ Key Portfolio Blueprint:
              </span>
              <strong style="margin-left: 0.5rem; font-size: 0.95rem; color: #fff;">${phase.projectIdea.title}</strong>
            </div>
            <button class="btn btn-outline btn-sm view-blueprint-btn" data-phase="${phaseKey}">
              <span>View Blueprint Specs</span>
            </button>
          </div>
        ` : ''}

        ${phase.strategy ? `
          <div style="margin-top: 1rem; font-size: 0.85rem; color: #cbd5e1; background: rgba(99, 102, 241, 0.08); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-indigo);">
            <strong>Tactical Job Strategy:</strong> ${phase.strategy}
          </div>
        ` : ''}
      </div>
    `;
  }

  bindInteractions() {
    // Checkbox toggles
    const checkboxes = this.container.querySelectorAll(".milestone-checkbox");
    checkboxes.forEach(cb => {
      cb.addEventListener("change", (e) => {
        const item = e.target.closest(".milestone-item");
        const phaseKey = item.dataset.phase;
        const index = parseInt(item.dataset.index, 10);
        const isChecked = e.target.checked;

        item.classList.toggle("completed", isChecked);
        if (this.currentConsultation?.roadmap[phaseKey]?.milestones[index]) {
          this.currentConsultation.roadmap[phaseKey].milestones[index].completed = isChecked;
        }

        this.updateProgress();
      });
    });

    // Clarifying question reply
    const replyBtn = this.container.querySelector("#replyClarifyingQuestionBtn");
    if (replyBtn) {
      replyBtn.addEventListener("click", () => {
        if (this.onAskQuestion && this.currentConsultation) {
          this.onAskQuestion(this.currentConsultation.clarifyingQuestion);
        }
      });
    }

    // View Project Blueprint modal triggers
    const blueprintBtns = this.container.querySelectorAll(".view-blueprint-btn");
    blueprintBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const phaseKey = btn.dataset.phase;
        const project = this.currentConsultation?.roadmap[phaseKey]?.projectIdea;
        if (project) {
          this.showBlueprintModal(project);
        }
      });
    });

    // Export button
    const exportBtn = this.container.querySelector("#exportRoadmapBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        window.dispatchEvent(new CustomEvent("export-roadmap-requested"));
      });
    }
  }

  updateProgress() {
    if (!this.currentConsultation) return;
    const roadmap = this.currentConsultation.roadmap;
    const allMilestones = [
      ...roadmap.shortTerm.milestones,
      ...roadmap.mediumTerm.milestones,
      ...roadmap.longTerm.milestones
    ];
    const totalCount = allMilestones.length;
    const completedCount = allMilestones.filter(m => m.completed).length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);

    const counterBadge = document.getElementById("milestoneCounterBadge");
    const percentDisplay = document.getElementById("progressPercentDisplay");
    const progressBar = document.getElementById("milestoneProgressBar");

    if (counterBadge) counterBadge.textContent = `${completedCount} of ${totalCount} Done`;
    if (percentDisplay) percentDisplay.textContent = `${progressPercent}%`;
    if (progressBar) progressBar.style.width = `${progressPercent}%`;
  }

  showBlueprintModal(project) {
    const modal = document.getElementById("blueprintModal");
    const modalContent = document.getElementById("blueprintModalContent");
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge badge-indigo" style="margin-bottom: 0.5rem;">Portfolio Milestone Blueprint</span>
        <h2 style="font-size: 1.6rem; color: #fff; margin-top: 0.4rem;">${project.title}</h2>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <label style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.05em;">Recommended Tech Stack</label>
        <div style="margin-top: 0.4rem; font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-cyan); background: rgba(6, 182, 212, 0.08); padding: 0.6rem 0.9rem; border-radius: var(--radius-sm); border: 1px solid rgba(6, 182, 212, 0.2);">
          ${project.stack}
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.05em;">Project Objective & Deliverables</label>
        <p style="margin-top: 0.4rem; font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
          ${project.description}
        </p>
      </div>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 1rem 1.2rem; margin-bottom: 1.5rem;">
        <strong style="color: #fff; font-size: 0.9rem;">What Interviewers Look For:</strong>
        <ul style="margin-top: 0.5rem; padding-left: 1.2rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
          <li>Clean architecture and thoughtful directory organization.</li>
          <li>Comprehensive README with live demo link and setup instructions.</li>
          <li>Unit tests covering edge cases and input validation.</li>
          <li>Production deployment (not just running on localhost).</li>
        </ul>
      </div>

      <div style="text-align: right;">
        <button class="btn btn-secondary btn-sm" id="closeBlueprintModalBtn">Got it</button>
      </div>
    `;

    modal.classList.add("active");

    const closeBtn = modalContent.querySelector("#closeBlueprintModalBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
      });
    }
  }
}
