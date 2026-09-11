# CarrierPath — AI Career Counselor Powered by Gravity

> **Precision Step-by-Step AI Career Intelligence**  
> Explore career trajectories, evaluate skill gaps, and build realistic step-by-step roadmaps.

![CarrierPath Overview](./assets/gravity-avatar.svg)

---

## 🌟 Overview & Identity

**CarrierPath** is an interactive, modern web application powered by **Gravity**, an empathetic, knowledgeable, and actionable AI Career Counselor.

### Core Principles
1. **Tailored Advice**: Calibrates roadmaps specifically to the user's current education level, background, existing skill baseline, and realistic weekly study time and budget constraints.
2. **Action-Oriented**: Replaces generic platitudes with tangible code milestones, standard industry certifications (e.g., AWS Solutions Architect, CompTIA Security+, Meta Front-End), and real-world portfolio project blueprints.
3. **Balanced Tone**: Encouraging and supportive, yet deeply realistic regarding market expectations, saturation, and required competencies.
4. **Structured Response Schema**:
   - **01. Assessment**: Empathetic situation summary and diagnostic analysis.
   - **02. Recommended Strategic Options**: 2–3 viable career paths with specific fit rationale and market outlook.
   - **03. Actionable 3-Phase Roadmap**:
     - *Short-Term (0–3 months)*: Fundamentals & quick wins.
     - *Medium-Term (3–6 months)*: Intermediate projects, certifications, or networking goals.
     - *Long-Term (6+ months)*: Job application strategy, portfolio finalization, or advanced specialization.
   - **04. Clarifying Question**: A single, targeted closing question to calibrate the immediate next step.

---

## 🚀 Key Features

- **Multi-Persona Onboarding**: Tailored tracks for **Career Switchers**, **Recent College Grads**, **College Students**, and **High School Explorers**.
- **Interactive Intake Assessment**: 4-step wizard collecting current domain, existing skills, target aspirations, hours/week, and budget constraints.
- **Dynamic 3-Phase Interactive Timeline**: Check off completed milestones, monitor live progress percentage, and view portfolio project blueprints.
- **Skill Gap Matrix**: Visual delta comparison between current proficiency and target industry requirements with estimated bridge hours.
- **Live Gravity Counselor Chat**: Real-time consultation interface adhering to Gravity's strict prompt rules, equipped with quick strategy suggestions (e.g., Resume Optimization, Time Rebalancing, Certification ROI).
- **One-Click Markdown Export**: Download complete career roadmaps as formatted `.md` documents for tracking or sharing.
- **Zero External Dependencies**: Built with pure modern Vanilla HTML5, CSS3, and ES Modules.

---

## 💻 Running the Application

Because the project is built using native web technologies, you can run it using Python's built-in HTTP server:

```powershell
# From the project root:
python -m http.server 3000
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📂 Project Architecture

```
Carrier-path/
├── index.html                 # Single-page application shell with semantic HTML & SEO
├── README.md                  # Project documentation & setup instructions
├── assets/
│   ├── logo.svg               # CarrierPath brand icon
│   └── gravity-avatar.svg     # Gravity AI Counselor avatar
├── css/
│   ├── index.css              # Design tokens, color palettes, typography, and base layout
│   ├── components.css         # UI components (buttons, badges, cards, timeline, chat)
│   └── animations.css         # Micro-animations, glowing gradients, glassmorphism
└── js/
    ├── app.js                 # App orchestrator and state coordinator
    ├── gravity-engine.js      # Gravity counseling engine & domain knowledge base
    ├── assessment.js          # Multi-step intake wizard controller
    ├── roadmap-renderer.js    # Interactive 3-phase roadmap & milestone tracker
    ├── skill-matrix.js        # Skill gap matrix analyzer & visualizer
    ├── counselor-chat.js      # Interactive chat consultation with Gravity
    └── storage.js             # LocalStorage persistence & Markdown exporter
```
