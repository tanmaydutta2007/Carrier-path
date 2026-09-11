/**
 * Skill Gap Matrix Evaluator & Visualizer
 * Analyzes the delta between user's current baseline and target industry requirements.
 */

export class SkillMatrixController {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(profile, consultation) {
    if (!this.container) return;

    const userSkills = (profile.existingSkills || []).map(s => s.toLowerCase());
    const targetSkills = consultation.keySkills || [];

    // Analyze skill categories
    const analyzedSkills = targetSkills.map(skill => {
      const lower = skill.toLowerCase();
      const hasDirectMatch = userSkills.some(u => u.includes(lower) || lower.includes(u));
      const partialMatch = userSkills.some(u => {
        // Simple heuristic for related skill domains
        if (lower.includes("python") && u.includes("sql")) return true;
        if (lower.includes("react") && u.includes("javascript")) return true;
        if (lower.includes("fastapi") && u.includes("python")) return true;
        return false;
      });

      let status = "Immediate Gap";
      let priority = "High";
      let currentProficiency = 15;
      let estHours = 40;

      if (hasDirectMatch) {
        status = "Proficient / Baseline Established";
        priority = "Low";
        currentProficiency = 80;
        estHours = 10;
      } else if (partialMatch) {
        status = "Adjacent Competency";
        priority = "Medium";
        currentProficiency = 45;
        estHours = 25;
      }

      return {
        name: skill,
        status,
        priority,
        currentProficiency,
        estHours
      };
    });

    const totalGapHours = analyzedSkills.reduce((acc, s) => acc + (100 - s.currentProficiency) * 0.5, 0);
    const weeklyHours = profile.weeklyHours || 15;
    const estWeeksToBridge = Math.ceil(totalGapHours / weeklyHours);

    const html = `
      <div class="glass-card" style="padding: 2.2rem; margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="badge badge-indigo" style="margin-bottom: 0.5rem;">Competency Diagnostics</span>
            <h2>Skill Gap & Readiness Matrix</h2>
            <p>Evaluating target competencies for <strong>${consultation.careerTitle}</strong> against your current profile.</p>
          </div>
          <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: var(--radius-md); padding: 0.9rem 1.4rem; text-align: right;">
            <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 700;">Est. Time to Bridge Core Gap</div>
            <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--accent-cyan);">~${estWeeksToBridge} Weeks</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">at ${weeklyHours} hrs/week commitment</div>
          </div>
        </div>

        <div class="skill-matrix-grid">
          ${analyzedSkills.map(s => {
            let badgeClass = "badge-rose";
            let barColor = "var(--accent-rose)";
            if (s.priority === "Low") {
              badgeClass = "badge-emerald";
              barColor = "var(--accent-emerald)";
            } else if (s.priority === "Medium") {
              badgeClass = "badge-amber";
              barColor = "var(--accent-amber)";
            }

            return `
              <div class="skill-category-card glass-card">
                <div class="skill-category-header">
                  <span class="skill-name" style="font-size: 1.05rem;">${s.name}</span>
                  <span class="badge ${badgeClass}">${s.priority} Priority</span>
                </div>
                <div class="skill-delta-item">
                  <div class="skill-info">
                    <span style="font-size: 0.8rem; color: var(--text-muted);">${s.status}</span>
                    <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700;">${s.currentProficiency}% Readiness</span>
                  </div>
                  <div class="skill-bar-track">
                    <div class="skill-bar-fill" style="width: ${s.currentProficiency}%; background: ${barColor};"></div>
                  </div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.775rem; color: var(--text-muted); margin-top: 0.8rem; padding-top: 0.5rem; border-top: 1px solid var(--border-glass);">
                  <span>Curriculum Target</span>
                  <span style="color: var(--text-secondary);">~${s.estHours} hrs hands-on lab</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }
}
