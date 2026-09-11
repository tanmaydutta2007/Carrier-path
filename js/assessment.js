/**
 * Assessment Wizard Controller
 * Handles user intake, state collection, step navigation, and validation.
 */

export class AssessmentController {
  constructor(onCompleteCallback) {
    this.currentStep = 1;
    this.totalSteps = 4;
    this.onComplete = onCompleteCallback;
    this.profileData = {
      audience: "career-switcher",
      currentDomain: "Business / Operations",
      existingSkills: ["Problem Solving", "Basic Python", "Excel"],
      targetCareer: "full-stack",
      weeklyHours: 15,
      budget: "low-cost"
    };

    this.init();
  }

  init() {
    this.bindEvents();
    this.updateUI();
  }

  bindEvents() {
    // Audience cards
    const personaCards = document.querySelectorAll(".persona-card");
    personaCards.forEach(card => {
      card.addEventListener("click", () => {
        personaCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.profileData.audience = card.dataset.audience;
      });
    });

    // Step navigation buttons
    const nextBtn = document.getElementById("wizardNextBtn");
    const prevBtn = document.getElementById("wizardPrevBtn");

    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.handleNext());
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.handlePrev());
    }

    // Weekly hours slider
    const hoursSlider = document.getElementById("weeklyHoursSlider");
    const hoursDisplay = document.getElementById("weeklyHoursDisplay");
    if (hoursSlider && hoursDisplay) {
      hoursSlider.addEventListener("input", (e) => {
        const val = e.target.value;
        hoursDisplay.textContent = `${val} hrs / week`;
        this.profileData.weeklyHours = parseInt(val, 10);
      });
    }

    // Quick skills pills
    const skillPills = document.querySelectorAll(".skill-pill-toggle");
    skillPills.forEach(pill => {
      pill.addEventListener("click", () => {
        pill.classList.toggle("active");
        const skill = pill.dataset.skill;
        if (pill.classList.contains("active")) {
          if (!this.profileData.existingSkills.includes(skill)) {
            this.profileData.existingSkills.push(skill);
          }
        } else {
          this.profileData.existingSkills = this.profileData.existingSkills.filter(s => s !== skill);
        }
      });
    });

    // Custom skill add input
    const addSkillBtn = document.getElementById("addCustomSkillBtn");
    const customSkillInput = document.getElementById("customSkillInput");
    if (addSkillBtn && customSkillInput) {
      const addSkill = () => {
        const val = customSkillInput.value.trim();
        if (val && !this.profileData.existingSkills.includes(val)) {
          this.profileData.existingSkills.push(val);
          this.renderCustomSkillTag(val);
          customSkillInput.value = "";
        }
      };
      addSkillBtn.addEventListener("click", addSkill);
      customSkillInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addSkill();
        }
      });
    }

    // Career track radio cards
    const careerRadios = document.querySelectorAll("input[name='targetCareerRadio']");
    careerRadios.forEach(radio => {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          this.profileData.targetCareer = radio.value;
        }
      });
    });

    // Current Domain select
    const domainSelect = document.getElementById("currentDomainSelect");
    if (domainSelect) {
      domainSelect.addEventListener("change", (e) => {
        this.profileData.currentDomain = e.target.value;
      });
    }

    // Budget selector
    const budgetPills = document.querySelectorAll(".budget-pill");
    budgetPills.forEach(pill => {
      pill.addEventListener("click", () => {
        budgetPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.profileData.budget = pill.dataset.budget;
      });
    });
  }

  renderCustomSkillTag(skillName) {
    const container = document.getElementById("selectedSkillsContainer");
    if (!container) return;

    const tag = document.createElement("span");
    tag.className = "option-pill active";
    tag.innerHTML = `${skillName} <span style="margin-left: 6px; cursor: pointer; opacity: 0.7;">&times;</span>`;
    tag.querySelector("span").addEventListener("click", () => {
      this.profileData.existingSkills = this.profileData.existingSkills.filter(s => s !== skillName);
      tag.remove();
    });
    container.appendChild(tag);
  }

  handleNext() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.updateUI();
    } else {
      // Complete intake
      if (this.onComplete) {
        this.onComplete(this.profileData);
      }
    }
  }

  handlePrev() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateUI();
    }
  }

  updateUI() {
    // Update step view
    for (let i = 1; i <= this.totalSteps; i++) {
      const stepEl = document.getElementById(`wizardStep${i}`);
      if (stepEl) {
        stepEl.classList.toggle("active", i === this.currentStep);
      }
    }

    // Update progress bar
    const progressFill = document.getElementById("wizardProgressFill");
    if (progressFill) {
      const percentage = (this.currentStep / this.totalSteps) * 100;
      progressFill.style.width = `${percentage}%`;
    }

    // Update button text
    const prevBtn = document.getElementById("wizardPrevBtn");
    const nextBtn = document.getElementById("wizardNextBtn");

    if (prevBtn) {
      prevBtn.style.visibility = this.currentStep === 1 ? "hidden" : "visible";
    }

    if (nextBtn) {
      if (this.currentStep === this.totalSteps) {
        nextBtn.innerHTML = `<span>Generate Trajectory with Gravity</span> <span style="font-size: 1.1rem">✦</span>`;
        nextBtn.classList.remove("btn-primary");
        nextBtn.classList.add("btn-accent");
      } else {
        nextBtn.innerHTML = `<span>Continue</span> <span style="font-size: 1.1rem">&rarr;</span>`;
        nextBtn.classList.remove("btn-accent");
        nextBtn.classList.add("btn-primary");
      }
    }
  }

  getProfile() {
    return this.profileData;
  }
}
