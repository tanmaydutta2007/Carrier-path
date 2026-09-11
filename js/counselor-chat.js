/**
 * Counselor Chat Controller
 * Manages live consultation conversations with Gravity adhering to prompt rules.
 */

export class CounselorChatController {
  constructor(containerId, profileGetter) {
    this.container = document.getElementById(containerId);
    this.getProfile = profileGetter;
    this.messages = [];
    this.init();
  }

  init() {
    this.renderInitialUI();
    this.bindEvents();
    this.sendInitialGreeting();
  }

  renderInitialUI() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="chat-container glass-card">
        <div style="padding: 1.25rem 1.5rem; background: rgba(18, 24, 38, 0.8); border-bottom: 1px solid var(--border-glass); display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <img src="./assets/gravity-avatar.svg" alt="Gravity" style="width: 36px; height: 36px; border-radius: 50%;" />
            <div>
              <div style="font-weight: 700; font-size: 1rem; color: #fff; display: flex; align-items: center; gap: 0.4rem;">
                Gravity <span class="badge badge-cyan" style="font-size: 0.65rem;">Active Counselor</span>
              </div>
              <div style="font-size: 0.775rem; color: var(--text-muted);">Empathetic & Actionable AI Guidance</div>
            </div>
          </div>
          <button id="apiKeySettingsBtn" class="btn btn-secondary btn-sm" title="Configure Live AI Key">
            <span>⚙️ AI Settings</span>
          </button>
        </div>

        <div class="chat-messages" id="chatMessagesList">
          <!-- Messages render here -->
        </div>

        <!-- Quick Question Prompts -->
        <div class="chat-suggestions" id="chatSuggestions">
          <button class="option-pill suggestion-chip" data-prompt="How do I format my resume to highlight transferable skills?">
            📄 Resume Strategy
          </button>
          <button class="option-pill suggestion-chip" data-prompt="I only have 8 hours a week. How should I rebalance Phase 1?">
            ⏱️ Rebalance for 8 hrs/week
          </button>
          <button class="option-pill suggestion-chip" data-prompt="Which specific certification gives the highest hiring return?">
            🎖️ Best Certifications
          </button>
          <button class="option-pill suggestion-chip" data-prompt="What are typical interview technical questions for this role?">
            🎯 Interview Prep
          </button>
        </div>

        <div class="chat-input-bar">
          <input type="text" id="chatTextInput" class="chat-input" placeholder="Ask Gravity a career or roadmap question..." />
          <button id="chatSendBtn" class="btn btn-primary" style="border-radius: var(--radius-full); padding: 0.75rem 1.25rem;">
            <span>Send</span>
          </button>
        </div>
      </div>
    `;
  }

  bindEvents() {
    const sendBtn = this.container.querySelector("#chatSendBtn");
    const input = this.container.querySelector("#chatTextInput");
    const suggestions = this.container.querySelectorAll(".suggestion-chip");

    const doSend = () => {
      const text = input.value.trim();
      if (!text) return;
      this.handleUserMessage(text);
      input.value = "";
    };

    if (sendBtn && input) {
      sendBtn.addEventListener("click", doSend);
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          doSend();
        }
      });
    }

    suggestions.forEach(chip => {
      chip.addEventListener("click", () => {
        const prompt = chip.dataset.prompt;
        this.handleUserMessage(prompt);
      });
    });

    const settingsBtn = this.container.querySelector("#apiKeySettingsBtn");
    if (settingsBtn) {
      settingsBtn.addEventListener("click", () => {
        const modal = document.getElementById("apiKeyModal");
        if (modal) modal.classList.add("active");
      });
    }
  }

  sendInitialGreeting() {
    const profile = this.getProfile();
    const target = profile?.targetCareer || "your chosen field";
    const greetingText = `Hello! I am **Gravity**, your AI Career Counselor. I am here to help you evaluate skill gaps, navigate market realities, and execute a realistic step-by-step roadmap toward **${target}**.\n\nFeel free to ask for specific project blueprints, interview tactics, or time rebalancing whenever you need!`;

    this.appendMessage("gravity", greetingText);
  }

  handleUserMessage(text) {
    this.appendMessage("user", text);

    // Show simulated typing delay
    const chatList = document.getElementById("chatMessagesList");
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "chat-msg msg-gravity";
    typingIndicator.id = "gravityTypingIndicator";
    typingIndicator.innerHTML = `
      <img src="./assets/gravity-avatar.svg" class="chat-avatar" alt="Gravity" />
      <div class="chat-bubble" style="color: var(--text-muted); font-style: italic;">
        Gravity is analyzing...
      </div>
    `;
    chatList.appendChild(typingIndicator);
    chatList.scrollTop = chatList.scrollHeight;

    setTimeout(() => {
      typingIndicator.remove();
      const response = this.generateGravityResponse(text);
      this.appendMessage("gravity", response);
    }, 600);
  }

  generateGravityResponse(userText) {
    const profile = this.getProfile();
    const query = userText.toLowerCase();

    if (query.includes("resume")) {
      return `**Assessment**: Transitioning requires reframing past accomplishments into engineering and business outcomes.\n\n` +
        `**Recommended Resume Strategies**:\n` +
        `• **Lead with a Technical Skills Matrix**: Group into *Languages, Frameworks, Cloud/Tools, and Databases* at the very top.\n` +
        `• **De-emphasize Job Titles, Emphasize Deliverables**: Bullet points should follow the format: *"Built [Feature] using [Stack], achieving [Measurable Metric]"*.\n` +
        `• **Feature Live URLs**: Every project must have a live demo link and a clean GitHub repo with an informative README.\n\n` +
        `**Actionable Next Step**:\n` +
        `• Audit your current bullet points and eliminate vague phrases like *"assisted with"* or *"responsible for"*. Replace them with action verbs like *engineered, deployed, containerized, automated*.\n\n` +
        `*Clarifying Question*: What is the single strongest project or work achievement you want to lead with on your resume?`;
    }

    if (query.includes("8 hours") || query.includes("rebalance") || query.includes("time")) {
      return `**Assessment**: 8 hours/week is a lean commitment, but highly sustainable if you eliminate tutorial traps and focus strictly on deliberate practice.\n\n` +
        `**Rebalanced Phase 1 Schedule (8 hrs/week)**:\n` +
        `• **Monday & Wednesday (1.5 hrs each)**: Core theory and interactive coding exercises.\n` +
        `• **Saturday (4 hrs focused block)**: Project building and repository commits.\n` +
        `• **Sunday (1 hr)**: Code review, documentation, and planning the next week.\n\n` +
        `**Actionable Adjustment**:\n` +
        `• Narrow Phase 1 to **1 primary capstone project** rather than 3 small throwaways. Deep understanding of one well-architected project beats shallow exposure to three.\n\n` +
        `*Clarifying Question*: Can you commit to reserving that uninterrupted 4-hour weekend block, or does a daily 1-hour micro-session fit your routine better?`;
    }

    if (query.includes("cert") || query.includes("certification")) {
      return `**Assessment**: Certifications prove foundational literacy, but in engineering roles, working code and system comprehension always carry more weight.\n\n` +
        `**High-ROI Certifications by Domain**:\n` +
        `• **Cloud/DevOps**: *AWS Certified Solutions Architect – Associate* (Universally recognized standard).\n` +
        `• **Cybersecurity**: *CompTIA Security+* (Essential requirement for DoD and enterprise SOC gates).\n` +
        `• **Data/Analytics**: *Microsoft PL-300 Power BI Data Analyst* (Direct enterprise utility).\n\n` +
        `**Actionable Advice**:\n` +
        `• Do not collect more than 1–2 certifications before having at least 2 deployed portfolio pieces. Use certifications as a structured study curriculum, not a substitute for code.\n\n` +
        `*Clarifying Question*: Which certification aligns closest with your immediate budget and timeline goals?`;
    }

    if (query.includes("interview")) {
      return `**Assessment**: Modern technical hiring assesses three distinct pillars: Technical Competence, Problem-Solving Communication, and Cultural Alignment.\n\n` +
        `**Core Interview Preparation Pillars**:\n` +
        `• **System Architecture / Code Walkthrough**: Be ready to walk through every trade-off and design decision in your portfolio projects.\n` +
        `• **Live Problem Solving**: Practice vocalizing your thought process aloud before writing code.\n` +
        `• **Behavioral (STAR Method)**: Prepare 4 stories covering *Conflict Resolution, Ambiguity, Missed Deadlines, and Technical Disagreements*.\n\n` +
        `*Clarifying Question*: Which interview format makes you feel most apprehensive: live algorithmic coding, system design, or behavioral questions?`;
    }

    // Default structured response adhering strictly to principles
    return `**Assessment**: I hear you. Navigating this transition into **${profile.targetCareer}** requires balancing practical daily execution with market alignment.\n\n` +
      `**Recommended Strategic Action**:\n` +
      `• Focus strictly on the current phase's priority milestone.\n` +
      `• Validate each milestone with a tangible code commit or verifiable artifact before progressing.\n` +
      `• Remember that hiring managers value demonstrated problem solving and architectural curiosity over perfection.\n\n` +
      `*Clarifying Question*: What is the biggest hurdle currently slowing down your momentum on your current roadmap milestone?`;
  }

  appendMessage(sender, text) {
    const chatList = document.getElementById("chatMessagesList");
    if (!chatList) return;

    const msgEl = document.createElement("div");
    msgEl.className = `chat-msg msg-${sender}`;

    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/• (.*?)(<br\/>|$)/g, '<li style="margin-left: 1.2rem; margin-bottom: 0.25rem;">$1</li>');

    const avatarSrc = sender === "gravity" ? "./assets/gravity-avatar.svg" : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366f1'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";

    msgEl.innerHTML = `
      <img src="${avatarSrc}" class="chat-avatar" alt="${sender}" />
      <div class="chat-bubble">
        ${formattedText}
      </div>
    `;

    chatList.appendChild(msgEl);
    chatList.scrollTop = chatList.scrollHeight;
  }

  askQuestion(questionText) {
    this.handleUserMessage(`Regarding Gravity's question: "${questionText}"`);
  }
}
