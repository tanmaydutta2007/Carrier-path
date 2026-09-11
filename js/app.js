/**
 * Main Application Orchestrator
 * Connects UI tabs, controllers, Gravity engine, and state.
 */

import { generateGravityCounsel } from "./gravity-engine.js";
import { AssessmentController } from "./assessment.js";
import { RoadmapRenderer } from "./roadmap-renderer.js";
import { SkillMatrixController } from "./skill-matrix.js";
import { CounselorChatController } from "./counselor-chat.js";
import { saveToStorage, loadFromStorage, exportRoadmapToMarkdown } from "./storage.js";

class CarrierPathApp {
  constructor() {
    this.currentView = "home";
    this.userProfile = null;
    this.consultation = null;

    this.assessmentCtrl = null;
    this.roadmapRenderer = null;
    this.skillMatrixCtrl = null;
    this.chatCtrl = null;
  }

  init() {
    // 1. Try to load cached data or set up initial demonstration profile
    const saved = loadFromStorage();
    if (saved.profile && saved.consultation) {
      this.userProfile = saved.profile;
      this.consultation = saved.consultation;
    } else {
      // Default showcase profile: Career Switcher targeting Full-Stack Web Dev
      this.userProfile = {
        audience: "career-switcher",
        currentDomain: "Business & Marketing",
        existingSkills: ["Problem Solving", "HTML/CSS Basics", "Excel"],
        targetCareer: "full-stack",
        weeklyHours: 15,
        budget: "low-cost"
      };
      this.consultation = generateGravityCounsel(this.userProfile);
      saveToStorage(this.userProfile, this.consultation);
    }

    // 2. Initialize Controllers
    this.initControllers();

    // 3. Bind Navigation & Global Events
    this.bindNavigation();
    this.bindModals();

    // 4. Render initial data
    this.renderAllViews();
  }

  initControllers() {
    // Assessment Wizard
    this.assessmentCtrl = new AssessmentController((profile) => {
      this.handleAssessmentCompleted(profile);
    });

    // Roadmap Renderer
    this.roadmapRenderer = new RoadmapRenderer("roadmapContainer", (clarifyingQuestion) => {
      this.switchView("chat");
      if (this.chatCtrl) {
        this.chatCtrl.askQuestion(clarifyingQuestion);
      }
    });

    // Skill Gap Matrix
    this.skillMatrixCtrl = new SkillMatrixController("skillMatrixContainer");

    // Live Counselor Chat
    this.chatCtrl = new CounselorChatController("counselorChatContainer", () => this.userProfile);

    // Global Export listener
    window.addEventListener("export-roadmap-requested", () => {
      if (this.consultation && this.userProfile) {
        exportRoadmapToMarkdown(this.consultation, this.userProfile);
      }
    });
  }

  handleAssessmentCompleted(profile) {
    this.userProfile = profile;
    this.consultation = generateGravityCounsel(profile);
    saveToStorage(this.userProfile, this.consultation);

    this.renderAllViews();
    this.switchView("roadmap");
  }

  renderAllViews() {
    if (this.roadmapRenderer && this.consultation) {
      this.roadmapRenderer.render(this.consultation);
    }
    if (this.skillMatrixCtrl && this.consultation && this.userProfile) {
      this.skillMatrixCtrl.render(this.userProfile, this.consultation);
    }
  }

  bindNavigation() {
    const navButtons = document.querySelectorAll(".nav-tab-btn");
    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetView = btn.dataset.view;
        this.switchView(targetView);
      });
    });

    // CTA buttons in hero / home view
    const startAssessmentCta = document.getElementById("heroStartAssessmentBtn");
    if (startAssessmentCta) {
      startAssessmentCta.addEventListener("click", () => {
        this.switchView("assessment");
      });
    }

    const viewDemoRoadmapCta = document.getElementById("heroViewRoadmapBtn");
    if (viewDemoRoadmapCta) {
      viewDemoRoadmapCta.addEventListener("click", () => {
        this.switchView("roadmap");
      });
    }

    // Logo click goes home
    const brandBadge = document.getElementById("brandHomeLink");
    if (brandBadge) {
      brandBadge.addEventListener("click", (e) => {
        e.preventDefault();
        this.switchView("home");
      });
    }
  }

  switchView(viewName) {
    this.currentView = viewName;

    // Update nav tab styling
    const navButtons = document.querySelectorAll(".nav-tab-btn");
    navButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.view === viewName);
    });

    // Switch active view section
    const sections = document.querySelectorAll(".view-section");
    sections.forEach(sec => {
      sec.classList.toggle("active", sec.id === `view-${viewName}`);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  bindModals() {
    // API Key Modal
    const apiKeyModal = document.getElementById("apiKeyModal");
    const closeApiKeyBtn = document.getElementById("closeApiKeyModalBtn");
    const saveApiKeyBtn = document.getElementById("saveApiKeyBtn");
    const apiKeyInput = document.getElementById("apiKeyInput");

    // Load existing key if any
    const savedKey = localStorage.getItem("carrier_path_custom_api_key");
    if (savedKey && apiKeyInput) {
      apiKeyInput.value = savedKey;
    }

    if (closeApiKeyBtn && apiKeyModal) {
      closeApiKeyBtn.addEventListener("click", () => {
        apiKeyModal.classList.remove("active");
      });
    }

    if (saveApiKeyBtn && apiKeyInput && apiKeyModal) {
      saveApiKeyBtn.addEventListener("click", () => {
        const key = apiKeyInput.value.trim();
        if (key) {
          localStorage.setItem("carrier_path_custom_api_key", key);
        } else {
          localStorage.removeItem("carrier_path_custom_api_key");
        }
        apiKeyModal.classList.remove("active");
      });
    }

    // Blueprint Modal Close (outside click)
    const blueprintModal = document.getElementById("blueprintModal");
    if (blueprintModal) {
      blueprintModal.addEventListener("click", (e) => {
        if (e.target === blueprintModal) {
          blueprintModal.classList.remove("active");
        }
      });
    }
  }
}

// Bootstrap on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.app = new CarrierPathApp();
  window.app.init();
});
