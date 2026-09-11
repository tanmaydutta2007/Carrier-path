/**
 * Gravity AI Career Counselor Engine
 * Implements Gravity's Persona, Core Principles, and Strict Response Schema.
 */

export const GRAVITY_IDENTITY = {
  name: "Gravity",
  title: "Actionable AI Career Counselor",
  principles: [
    "Tailored Advice based on education, experience, budget, and time constraints",
    "Action-Oriented with specific skills, industry standard certs, and real projects",
    "Balanced Tone: encouraging yet realistic about market expectations",
    "Zero Fluff, No guarantees, Scannable structure"
  ]
};

// Rich Trajectory Knowledge Base
const CAREER_DATABASE = {
  "ai-ml": {
    title: "AI & Machine Learning Engineer",
    category: "Artificial Intelligence",
    description: "Build, evaluate, and deploy machine learning models and generative AI systems into production.",
    marketDemand: "Extremely High",
    avgTimelineMonths: "6–12 months",
    keySkills: ["Python", "PyTorch", "HuggingFace", "Vector DBs", "Docker", "FastAPI", "Linear Algebra"],
    paths: [
      {
        title: "Applied AI / LLM Engineer",
        fit: "Ideal if you want to build software on top of modern foundation models, agents, and RAG architectures.",
        marketOutlook: "Exploding startup and enterprise demand for AI-native software builders."
      },
      {
        title: "Classical Machine Learning Engineer",
        fit: "Suits strong mathematical problem-solvers interested in predictive modeling, tabular data, and recommender systems.",
        marketOutlook: "Strong enterprise demand across finance, e-commerce, and logistics."
      },
      {
        title: "MLOps / AI Infrastructure Specialist",
        fit: "Best for those who enjoy systems engineering, cloud deployment, model monitoring, and pipeline automation.",
        marketOutlook: "Critical bottleneck role with high compensation and low candidate saturation."
      }
    ],
    roadmap: {
      shortTerm: {
        period: "0–3 Months",
        title: "Foundations & Model Prototyping",
        objective: "Master modern Python, core ML math (vectors, gradients), and basic model inference APIs.",
        milestones: [
          { text: "Python for Data Science (NumPy, Pandas, Matplotlib, Scikit-learn)", completed: false },
          { text: "Implement 3 classical algorithms from scratch (Logistic Regression, Decision Trees, K-Means)", completed: false },
          { text: "Build a prototype RAG app using LangChain/LlamaIndex and ChromaDB", completed: false },
          { text: "Learn Git workflows and package code into clean Python modules", completed: false }
        ],
        projectIdea: {
          title: "Intelligent Semantic Document Search Engine",
          stack: "Python, ChromaDB, Sentence-Transformers, Streamlit",
          description: "Ingest custom PDFs, generate embeddings, and build a conversational Q&A interface with source citations."
        },
        certification: "DeepLearning.AI Machine Learning Specialization (Coursera)"
      },
      mediumTerm: {
        period: "3–6 Months",
        title: "Deep Learning & Production Pipeline",
        objective: "Train PyTorch models, fine-tune open-weights models (Llama/Mistral), and serve inference APIs.",
        milestones: [
          { text: "Complete PyTorch fundamentals: tensors, autograd, custom Dataset and DataLoader", completed: false },
          { text: "Fine-tune a small open-source LLM using LoRA / QLoRA with HuggingFace PEFT", completed: false },
          { text: "Containerize your model server with Docker and expose via FastAPI endpoints", completed: false },
          { text: "Write technical post on LinkedIn/Medium documenting your fine-tuning findings", completed: false }
        ],
        projectIdea: {
          title: "Production End-to-End Visual Defect or Text Classifier API",
          stack: "PyTorch, FastAPI, Docker, GitHub Actions, AWS EC2 / Fly.io",
          description: "Full CI/CD pipeline with automated evaluation metrics, Docker image publishing, and live hosted endpoint."
        },
        certification: "AWS Certified Machine Learning – Specialty or TensorFlow Developer"
      },
      longTerm: {
        period: "6+ Months",
        title: "Portfolio Finalization & Market Launch",
        objective: "Solidify 2 production-grade repositories, contribute to open source, and begin targeted outreach.",
        milestones: [
          { text: "Refactor portfolio code with strict docstrings, unit tests (pytest), and clean architecture", completed: false },
          { text: "Contribute at least 1 merged PR to an open-source AI repo or benchmark dataset", completed: false },
          { text: "Conduct 10 informational interviews with Senior ML engineers on LinkedIn", completed: false },
          { text: "Practice LeetCode medium algorithms and system design for ML serving architectures", completed: false }
        ],
        strategy: "Target Tier-2 AI startups and boutique consulting firms first before applying to FAANG-tier roles."
      }
    },
    clarifyingQuestion: "Would you prefer to specialize in generative AI application engineering (LLMs/RAG) or foundational model training and computer vision/NLP research?"
  },

  "full-stack": {
    title: "Full-Stack Web Engineer",
    category: "Software Development",
    description: "Architect, build, and deploy end-to-end web applications with modern frontend and backend frameworks.",
    marketDemand: "Very High",
    avgTimelineMonths: "5–9 months",
    keySkills: ["JavaScript / TypeScript", "React / Next.js", "Node.js", "PostgreSQL", "REST / GraphQL", "Docker", "TailwindCSS"],
    paths: [
      {
        title: "Frontend-Heavy Full-Stack Engineer",
        fit: "Best if you have an eye for design, responsive UI, micro-interactions, and state management.",
        marketOutlook: "Consistent high volume of product-facing opportunities across every consumer sector."
      },
      {
        title: "Backend-Heavy Full-Stack Engineer",
        fit: "Ideal if you enjoy database schema design, caching strategies, API security, and concurrency.",
        marketOutlook: "High job stability with fintech, SaaS, and enterprise infrastructure teams."
      },
      {
        title: "JAMstack & Headless CMS Developer",
        fit: "Perfect for rapid freelancing, digital agency work, and marketing technology integration.",
        marketOutlook: "Abundant contract and fast-to-hire roles for quick career changers."
      }
    ],
    roadmap: {
      shortTerm: {
        period: "0–3 Months",
        title: "Core Web Fundamentals & Component Thinking",
        objective: "Gain deep fluency with semantic HTML, modern CSS (Flexbox/Grid), and ES6+ JavaScript.",
        milestones: [
          { text: "Build 3 responsive landing pages from Figma designs without CSS frameworks", completed: false },
          { text: "Master JavaScript DOM manipulation, asynchronous Fetch API, and closures", completed: false },
          { text: "Learn React fundamentals: components, props, hooks (useState, useEffect, useMemo)", completed: false },
          { text: "Publish all projects live on Vercel or GitHub Pages with clean READMEs", completed: false }
        ],
        projectIdea: {
          title: "Personal Productivity & Expense Tracker Dashboard",
          stack: "HTML5, Modern CSS, Vanilla JS / React, LocalStorage, Chart.js",
          description: "Clean responsive interface with dynamic filtering, expense category budgeting, and data persistence."
        },
        certification: "freeCodeCamp Responsive Web Design & JavaScript Algorithms"
      },
      mediumTerm: {
        period: "3–6 Months",
        title: "Backend APIs, Relational DBs & Full-Stack Apps",
        objective: "Build resilient Node/Express backends, design relational Postgres schemas, and handle JWT auth.",
        milestones: [
          { text: "Design relational database schemas with PostgreSQL and Prisma ORM", completed: false },
          { text: "Implement secure authentication: password hashing (bcrypt), JWT, and role-based access", completed: false },
          { text: "Build and deploy a full-stack CRUD application with Next.js or React + Express", completed: false },
          { text: "Implement automated unit & integration testing using Vitest or Jest", completed: false }
        ],
        projectIdea: {
          title: "Collaborative Team Workspace / Project Board (Trello/Linear Clone)",
          stack: "Next.js / Node.js, TypeScript, PostgreSQL, Prisma, Tailwind, Supabase",
          description: "Drag-and-drop kanban boards, real-time comment feeds, user permissions, and email invitations."
        },
        certification: "Meta Front-End or Back-End Developer Professional Certificate (Coursera)"
      },
      longTerm: {
        period: "6+ Months",
        title: "System Architecture, Portfolio Polish & Job Campaign",
        objective: "Finalize a capstone full-stack SaaS project, optimize web performance, and execute job outreach.",
        milestones: [
          { text: "Conduct Lighthouse performance audit achieving 95+ scores across all metrics", completed: false },
          { text: "Prepare a live interactive portfolio website highlighting business problem solutions", completed: false },
          { text: "Apply to 10 tailored companies per week while following up directly with hiring managers", completed: false },
          { text: "Practice Data Structures & Algorithms (Arrays, Hash Maps, 2 Pointers) on NeetCode 150", completed: false }
        ],
        strategy: "Focus your resume on business outcomes (e.g. 'reduced latency by 40%', 'served 500+ active users') rather than just listing technologies."
      }
    },
    clarifyingQuestion: "Which part of the stack do you currently feel most drawn to: crafting interactive user interfaces or architecting databases and backend APIs?"
  },

  "cloud-devops": {
    title: "Cloud & DevOps Engineer",
    category: "Infrastructure & Platform",
    description: "Design automated cloud infrastructure, CI/CD pipelines, container orchestration, and reliable systems.",
    marketDemand: "High & Resilient",
    avgTimelineMonths: "6–10 months",
    keySkills: ["Linux", "Bash / Python", "Docker", "Kubernetes", "AWS / Azure", "Terraform", "GitHub Actions"],
    paths: [
      {
        title: "Platform & Cloud Engineer",
        fit: "Great for builders who want to create developer self-service tooling and infrastructure as code.",
        marketOutlook: "Consistently among the highest paying IT engineering positions."
      },
      {
        title: "Site Reliability Engineer (SRE)",
        fit: "Suits analytical minds who excel at system monitoring, uptime incident response, and performance scaling.",
        marketOutlook: "Crucial for mid-size to enterprise companies with high uptime requirements."
      },
      {
        title: "DevSecOps Specialist",
        fit: "Ideal if you have an interest in vulnerability scanning, container security, and compliance.",
        marketOutlook: "Urgent hiring priority due to rising cybersecurity mandates."
      }
    ],
    roadmap: {
      shortTerm: {
        period: "0–3 Months",
        title: "Linux Mastery, Networking & Scripting",
        objective: "Become comfortable on the command line, understanding TCP/IP, DNS, and automation scripts.",
        milestones: [
          { text: "Set up a headless Ubuntu Linux VM and configure SSH key hardening and UFW firewall", completed: false },
          { text: "Write Bash and Python scripts to automate daily log rotation and system monitoring", completed: false },
          { text: "Understand OSI model, subnets, routing tables, reverse proxies (Nginx), and SSL certs", completed: false },
          { text: "Earn entry-level cloud certification to establish foundational credibility", completed: false }
        ],
        projectIdea: {
          title: "Automated Linux Server Hardening & Health Dashboard",
          stack: "Ubuntu, Bash, Nginx, Python Flask, Systemd",
          description: "A automated provisioning script that sets up a secure web server with automated SSL and monitoring."
        },
        certification: "AWS Certified Cloud Practitioner or CompTIA Linux+"
      },
      mediumTerm: {
        period: "3–6 Months",
        title: "Containers, CI/CD & Infrastructure as Code",
        objective: "Containerize multi-tier apps, automate releases via GitHub Actions, and define cloud with Terraform.",
        milestones: [
          { text: "Write production multi-stage Dockerfiles optimizing image size under 100MB", completed: false },
          { text: "Build automated GitHub Actions CI/CD pipeline deploying to AWS ECS or DigitalOcean", completed: false },
          { text: "Deploy complete VPC, EC2, RDS, and S3 architecture using Terraform IaC", completed: false },
          { text: "Configure Prometheus and Grafana for server metrics and alerting", completed: false }
        ],
        projectIdea: {
          title: "Automated GitOps Infrastructure Provisioning Pipeline",
          stack: "Terraform, AWS, GitHub Actions, Docker, Prometheus",
          description: "Commit code to trigger automated Terraform plans, test container builds, and deploy with zero downtime."
        },
        certification: "AWS Certified Solutions Architect – Associate or HashiCorp Certified: Terraform Associate"
      },
      longTerm: {
        period: "6+ Months",
        title: "Kubernetes, Chaos Engineering & Market Positioning",
        objective: "Deploy workloads on Kubernetes (k8s), build a public portfolio repo, and interview for Jr/Associate Cloud roles.",
        milestones: [
          { text: "Deploy a microservices app on a multi-node Kubernetes cluster with Ingress and Secrets", completed: false },
          { text: "Publish an open-source GitHub repository detailing your complete IaC setup", completed: false },
          { text: "Prepare architectural diagrams and walk through trade-offs in simulated interview loops", completed: false },
          { text: "Target mid-market SaaS companies and managed service providers for entry Cloud positions", completed: false }
        ],
        strategy: "Demonstrate cost awareness in your projects: show how you saved money using auto-scaling and spot instances."
      }
    },
    clarifyingQuestion: "Which major cloud provider are you targeting first: Amazon Web Services (AWS), Microsoft Azure, or Google Cloud (GCP)?"
  },

  "data-analytics": {
    title: "Data Analyst & Business Intelligence Specialist",
    category: "Data & Strategy",
    description: "Extract, clean, analyze, and visualize data to drive high-impact strategic business decisions.",
    marketDemand: "High",
    avgTimelineMonths: "4–8 months",
    keySkills: ["SQL", "Excel / Google Sheets", "Tableau / Power BI", "Python (Pandas)", "Statistical Testing"],
    paths: [
      {
        title: "Product / Growth Data Analyst",
        fit: "Ideal if you want to collaborate with product managers on user retention, funnel analysis, and A/B testing.",
        marketOutlook: "High demand in tech, consumer apps, and e-commerce."
      },
      {
        title: "Business Intelligence (BI) Developer",
        fit: "Suits those who enjoy building automated executive dashboards, data modeling, and reporting pipelines.",
        marketOutlook: "Universal corporate demand across finance, supply chain, and healthcare."
      },
      {
        title: "Financial / Risk Analytics Specialist",
        fit: "Great for detail-oriented professionals with business or accounting backgrounds.",
        marketOutlook: "Strong compensation in banking, insurance, and audit firms."
      }
    ],
    roadmap: {
      shortTerm: {
        period: "0–3 Months",
        title: "Advanced SQL & Spreadsheet Modeling",
        objective: "Master complex SQL queries, window functions, CTEs, and clean presentation dashboards.",
        milestones: [
          { text: "Master SQL: JOINs, Subqueries, CTEs, Window Functions (ROW_NUMBER, LAG/LEAD)", completed: false },
          { text: "Advanced Excel: Pivot Tables, INDEX/MATCH, XLOOKUP, and dynamic KPI charts", completed: false },
          { text: "Complete 50 SQL practice problems on LeetCode or Stratascratch", completed: false },
          { text: "Publish an end-to-end dataset exploratory analysis on GitHub and Kaggle", completed: false }
        ],
        projectIdea: {
          title: "E-Commerce Customer Retention & Cohort Analysis",
          stack: "PostgreSQL, Excel, Tableau Public",
          description: "Analyze 500k sales records to uncover churn rates, lifetime value (LTV), and seasonal buying patterns."
        },
        certification: "Google Data Analytics Professional Certificate (Coursera)"
      },
      mediumTerm: {
        period: "3–6 Months",
        title: "Python Data Wrangling & Interactive BI Dashboards",
        objective: "Clean messy data using Python Pandas, calculate statistics, and build enterprise-grade BI dashboards.",
        milestones: [
          { text: "Clean and transform dirty datasets using Python (Pandas & NumPy)", completed: false },
          { text: "Build an interactive multi-page Tableau or Power BI dashboard with drill-down filters", completed: false },
          { text: "Formulate and test business hypotheses using A/B testing statistics (p-values, confidence intervals)", completed: false },
          { text: "Create a recorded 3-minute video walkthrough explaining business insights to stakeholders", completed: false }
        ],
        projectIdea: {
          title: "Executive SaaS Metrics & Revenue Churn Dashboard",
          stack: "Power BI / Tableau, SQL, Python",
          description: "Interactive visual dashboard highlighting MRR, ARR, customer acquisition cost, and churn early warnings."
        },
        certification: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)"
      },
      longTerm: {
        period: "6+ Months",
        title: "Business Case Studies & Interview Preparation",
        objective: "Assemble an online portfolio with 3 distinct business domain case studies and execute outreach.",
        milestones: [
          { text: "Package each project as a business problem narrative with quantified revenue/time savings", completed: false },
          { text: "Practice live SQL whiteboarding and behavioral storytelling (STAR method)", completed: false },
          { text: "Connect with 15 senior analysts and managers in your target geographic area", completed: false },
          { text: "Target industry verticals where you already have prior domain familiarity", completed: false }
        ],
        strategy: "Differentiate yourself from other applicants by framing your insights around executive decision-making rather than just charts."
      }
    },
    clarifyingQuestion: "Do you prefer building interactive visual dashboards (Power BI / Tableau) or deep-diving into statistical code and query optimization (Python / SQL)?"
  },

  "cyber-security": {
    title: "Cyber Security Analyst / Defense Specialist",
    category: "Security & Risk",
    description: "Protect organizational networks, identify vulnerabilities, respond to incidents, and monitor threat telemetry.",
    marketDemand: "Extremely Resilient",
    avgTimelineMonths: "6–12 months",
    keySkills: ["Network Security", "Linux", "SIEM (Splunk)", "Wireshark", "Threat Intelligence", "Incident Response"],
    paths: [
      {
        title: "SOC Analyst (Security Operations Center)",
        fit: "The standard entry point into defense: triage alerts, analyze malicious traffic, and contain incidents.",
        marketOutlook: "Consistently in demand with clear 24/7 team shift structures."
      },
      {
        title: "Vulnerability Assessment & Pen Testing",
        fit: "Best for curious, adversarial thinkers who love discovering flaws before adversaries do.",
        marketOutlook: "Competitive, highly rewarded for demonstrated practical lab experience."
      },
      {
        title: "Governance, Risk & Compliance (GRC)",
        fit: "Great for analytical communicators with legal, audit, or business background.",
        marketOutlook: "Massive corporate growth due to data privacy regulations (GDPR, HIPAA, SOC 2)."
      }
    ],
    roadmap: {
      shortTerm: {
        period: "0–3 Months",
        title: "Networking Protocols, OS Fundamentals & Security Baselines",
        objective: "Understand how packets move, inspect traffic with Wireshark, and master core security models.",
        milestones: [
          { text: "Master TCP/IP, OSI layers, DNS, DHCP, ports, and protocols", completed: false },
          { text: "Analyze real malware pcap packet captures using Wireshark", completed: false },
          { text: "Set up home cybersecurity lab with VirtualBox, Kali Linux, and Metasploitable", completed: false },
          { text: "Study for and pass foundational security certification", completed: false }
        ],
        projectIdea: {
          title: "Home Security Lab & Packet Inspection Report",
          stack: "Wireshark, VirtualBox, Kali Linux, Nmap",
          description: "Perform simulated port scans and packet inspection, writing a formal vulnerability assessment report."
        },
        certification: "CompTIA Security+ (Industry gold standard for entry-level SOC roles)"
      },
      mediumTerm: {
        period: "3–6 Months",
        title: "SIEM Log Analysis & Practical Incident Triage",
        objective: "Ingest syslogs into Splunk, build correlation alerts, and investigate brute force attack vectors.",
        milestones: [
          { text: "Deploy Splunk or Elastic SIEM in your lab and ingest Windows Event Logs", completed: false },
          { text: "Complete 20+ rooms on TryHackMe (SOC Level 1 path)", completed: false },
          { text: "Write incident response playbooks for Phishing and Ransomware containment", completed: false },
          { text: "Understand MITRE ATT&CK framework and map detected behaviors to tactic IDs", completed: false }
        ],
        projectIdea: {
          title: "End-to-End SOC Detection & Brute Force Investigation",
          stack: "Splunk Free, Windows Server VM, Sysmon, Kali Linux (Hydra)",
          description: "Execute a simulated brute-force attack and document the complete forensic alert investigation."
        },
        certification: "BTL1 (Blue Team Level 1) or Splunk Core Certified User"
      },
      longTerm: {
        period: "6+ Months",
        title: "Live Defense Simulations & Defense Employment Campaign",
        objective: "Achieve top rankings on Blue Team challenges, refine resume for clearance/SOC, and apply systematically.",
        milestones: [
          { text: "Complete Blue Team Labs Online or CyberDefenders forensic challenges", completed: false },
          { text: "Tailor resume highlighting hands-on lab hours, SIEM tools, and cert credentials", completed: false },
          { text: "Attend local DEF CON groups, BSides conferences, or OWASP chapter meetups", completed: false },
          { text: "Apply to Managed Security Service Providers (MSSPs) for first-line SOC analyst roles", completed: false }
        ],
        strategy: "Emphasize your methodical report writing and documentation skills; SOC managers value clear note-taking above raw hacker trivia."
      }
    },
    clarifyingQuestion: "Are you primarily interested in defensive security operations (monitoring & incident response) or offensive security (penetration testing)?"
  },

  "ui-ux": {
    title: "UI/UX & Digital Product Designer",
    category: "Design & Product",
    description: "Design intuitive digital products, wireframes, user journeys, design systems, and test usability.",
    marketDemand: "Steady",
    avgTimelineMonths: "5–8 months",
    keySkills: ["Figma", "User Research", "Wireframing", "Design Systems", "Prototyping", "Usability Testing"],
    paths: [
      {
        title: "Product Designer (End-to-End)",
        fit: "Ideal if you enjoy both strategic business problem-solving and pixel-level interface polish.",
        marketOutlook: "The most commonly hired design role in modern tech teams."
      },
      {
        title: "User Experience (UX) Researcher",
        fit: "Suits psychology, sociology, or analytical minds who love customer interviews and usability experiments.",
        marketOutlook: "Strong demand in large enterprises and mature product companies."
      },
      {
        title: "UI & Design System Specialist",
        fit: "Best for detail-focused visual crafters who bridge the gap between design tokens and frontend engineers.",
        marketOutlook: "High value for fast-scaling startups building scalable component libraries."
      }
    ],
    roadmap: {
      shortTerm: {
        period: "0–3 Months",
        title: "Visual Design Hierarchy & Figma Fluency",
        objective: "Master typography, spacing grids, auto-layout, component variants, and interactive prototypes.",
        milestones: [
          { text: "Master Figma: Auto-layout 5.0, component sets, interactive hover states, variables", completed: false },
          { text: "Deconstruct and re-create 5 world-class apps (e.g. Airbnb, Spotify, Linear)", completed: false },
          { text: "Learn core UX laws: Fitts's Law, Hick's Law, Miller's Law, Jakob's Law", completed: false },
          { text: "Establish a public design showcase profile on Dribbble or Behance", completed: false }
        ],
        projectIdea: {
          title: "Mobile App Redesign for an Unintuitive Real-World Service",
          stack: "Figma, FigJam, Notion",
          description: "Audit a frustrating local transit or banking app and re-engineer the flow with modern usability standards."
        },
        certification: "Google UX Design Professional Certificate (Coursera)"
      },
      mediumTerm: {
        period: "3–6 Months",
        title: "End-to-End UX Research & High-Fidelity Design System",
        objective: "Conduct 5 live user interviews, synthesize personas, and build a reusable component library.",
        milestones: [
          { text: "Draft an interview script and conduct 5 user research interviews for a new product concept", completed: false },
          { text: "Create wireframes, user flow diagrams, and a comprehensive design system with color tokens", completed: false },
          { text: "Run unmoderated usability tests with 10 users using Maze or Useberry", completed: false },
          { text: "Document design iterations showing before/after usability improvements", completed: false }
        ],
        projectIdea: {
          title: "End-to-End FinTech or Healthcare Web & Mobile Platform",
          stack: "Figma, Maze, Loom, Notion Case Study",
          description: "Full product design process from user problem research, persona mapping, design system, to tested prototype."
        },
        certification: "Interaction Design Foundation (IxDF) Certified UX Designer"
      },
      longTerm: {
        period: "6+ Months",
        title: "Interactive Portfolio & Design Presentation",
        objective: "Build a polished custom portfolio website featuring 3 in-depth case studies and practice whiteboard design.",
        milestones: [
          { text: "Publish web portfolio (Framer or Webflow) emphasizing user outcomes and decision rationale", completed: false },
          { text: "Record 2-minute Loom video walkthroughs for each featured case study", completed: false },
          { text: "Practice 45-minute whiteboard product design challenge simulations", completed: false },
          { text: "Reach out to Senior Product Designers for portfolio feedback calls", completed: false }
        ],
        strategy: "Hiring managers look for *how* you think and solve problems, not just pretty screens. Dedicate 60% of your case study to research and user friction points."
      }
    },
    clarifyingQuestion: "Are you more passionate about visual aesthetics and interaction design (UI) or customer research and behavior psychology (UX)?"
  }
};

/**
 * Gravity Counseling Generator
 * Formulates tailored response strictly matching the schema:
 * 1. Assessment
 * 2. Recommended Paths (2-3 options with fit explanation)
 * 3. Actionable Roadmap (0-3m, 3-6m, 6+m)
 * 4. Clarifying Question
 */
export function generateGravityCounsel(profile) {
  // Identify best matching trajectory
  const trajectoryKey = profile.targetCareer || "full-stack";
  const data = CAREER_DATABASE[trajectoryKey] || CAREER_DATABASE["full-stack"];

  // Tailor based on audience persona
  const audience = profile.audience || "college-grad";
  let audienceNote = "";
  let pacingAdvice = "";

  if (audience === "career-switcher") {
    audienceNote = "As a career switcher, your existing professional experience is an asset. We will focus on translating your transferable skills while protecting your study schedule.";
    pacingAdvice = `With your target commitment of ${profile.weeklyHours || "15"} hours/week, consistency will be key. Budget constraint: ${profile.budget || "Standard / Low cost"}.`;
  } else if (audience === "college-grad") {
    audienceNote = "As a recent or graduating student, our focus is bridging academic theory into production-ready software engineering and standout portfolio evidence.";
    pacingAdvice = `With ${profile.weeklyHours || "20"} hours/week dedicated, you can move rapidly toward junior and associate entry roles.`;
  } else if (audience === "college-student") {
    audienceNote = "Balancing your coursework with targeted hands-on projects will position you ahead of the curve for summer internships.";
    pacingAdvice = `Targeting ${profile.weeklyHours || "10"} focused hours/week alongside your academic schedule.`;
  } else {
    audienceNote = "Exploring career options early gives you a significant strategic head start in building foundational technical literacies.";
    pacingAdvice = "Focusing on hands-on discovery and foundational literacy with zero upfront cost.";
  }

  // 1. Assessment
  const assessment = `You are targeting a transition into **${data.title}**. You bring current experience in **${profile.currentDomain || "General Studies / Other Field"}** with foundational skills in **${profile.existingSkills?.length ? profile.existingSkills.join(", ") : "general problem-solving and basic computer literacy"}**. ${audienceNote} ${pacingAdvice}`;

  // 2. Recommended Paths
  const recommendedPaths = data.paths.map((p, idx) => ({
    ...p,
    isFeatured: idx === 0
  }));

  // 3. Actionable Roadmap (0-3m, 3-6m, 6+m)
  const roadmap = data.roadmap;

  // 4. Clarifying Question
  const clarifyingQuestion = data.clarifyingQuestion;

  return {
    careerKey: trajectoryKey,
    careerTitle: data.title,
    category: data.category,
    marketDemand: data.marketDemand,
    keySkills: data.keySkills,
    assessment,
    recommendedPaths,
    roadmap,
    clarifyingQuestion,
    generatedAt: new Date().toISOString()
  };
}

export function getAllCareerTrajectories() {
  return Object.entries(CAREER_DATABASE).map(([key, item]) => ({
    key,
    title: item.title,
    category: item.category,
    marketDemand: item.marketDemand
  }));
}
