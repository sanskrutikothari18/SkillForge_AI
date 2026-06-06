/* SkillForge AI — Interactivity */

/* =================== ROADMAPS =================== */
const roadmaps = [
  {
    role: "Frontend Developer", category: "dev", icon: "🎨",
    duration: "4–6 months", salary: "$50k – $110k / ₹6–18 LPA",
    skills: ["HTML5 & Semantic Markup", "CSS3, Flexbox & Grid", "JavaScript (ES6+)", "React / Next.js", "TypeScript", "Tailwind CSS", "Accessibility (WCAG)", "Git & GitHub"],
    learningPath: ["Master HTML & CSS fundamentals", "Learn vanilla JavaScript deeply", "Build 5 small projects (no framework)", "Pick React, learn hooks & routing", "Add TypeScript & Tailwind", "Learn testing (Jest, RTL)", "Deploy via Vercel / Netlify"],
    courses: ["The Odin Project — Foundations", "freeCodeCamp Responsive Web Design", "Frontend Masters — Complete React", "Scrimba — Learn React"],
    beginnerProjects: ["Personal portfolio site", "Landing page clone", "To-do list with localStorage"],
    intermediateProjects: ["Movie discovery app (TMDB API)", "Kanban board with drag & drop", "E-commerce UI with cart"],
    advancedProjects: ["SaaS dashboard with auth & charts", "Real-time collaborative editor", "Multi-tenant blog CMS"],
    tools: ["VS Code", "Chrome DevTools", "Figma", "Vite", "Git", "Vercel", "Storybook"],
    careers: ["Frontend Developer", "React Developer", "UI Engineer", "Web Performance Engineer"],
    internshipTips: ["Have 3 deployed projects on resume", "Contribute to one open-source UI library", "Practice 50+ JS interview questions", "Be active on GitHub & LinkedIn"]
  },
  {
    role: "Backend Developer", category: "dev", icon: "🛠️",
    duration: "5–7 months", salary: "$60k – $130k / ₹8–22 LPA",
    skills: ["Node.js or Python", "REST & GraphQL APIs", "SQL (PostgreSQL/MySQL)", "NoSQL (MongoDB/Redis)", "Auth & Security (JWT, OAuth)", "Docker basics", "Testing"],
    learningPath: ["Pick one language (Node.js or Python)", "Build REST APIs from scratch", "Learn SQL deeply", "Add auth & validation", "Learn Docker & deployment", "Add caching & queues", "Build a full backend project"],
    courses: ["The Odin Project — Node path", "freeCodeCamp Back End", "Test Driven Development with Node", "PostgreSQL for Everybody (Coursera)"],
    beginnerProjects: ["URL shortener API", "Notes API with auth", "Weather aggregator"],
    intermediateProjects: ["Realtime chat backend (WebSockets)", "E-commerce REST API", "Job board with admin panel"],
    advancedProjects: ["Microservices system with Docker", "Payment gateway integration", "Multi-tenant SaaS backend"],
    tools: ["Postman / Insomnia", "Docker", "pgAdmin", "Redis", "GitHub Actions", "Nginx"],
    careers: ["Backend Developer", "API Engineer", "Platform Engineer", "Database Engineer"],
    internshipTips: ["Showcase one deployed API with docs", "Know HTTP status codes & REST principles", "Practice SQL on LeetCode", "Build one project using Docker"]
  },
  {
    role: "Full Stack Developer", category: "dev", icon: "🧩",
    duration: "6–9 months", salary: "$70k – $140k / ₹8–25 LPA",
    skills: ["HTML/CSS/JS", "React or Next.js", "Node.js / Express", "Databases (SQL + NoSQL)", "Auth & Security", "Testing", "DevOps basics"],
    learningPath: ["Get comfortable with frontend basics", "Learn one backend stack well", "Connect frontend ↔ backend", "Add authentication", "Deploy full-stack apps", "Add testing & CI/CD"],
    courses: ["The Odin Project — Full Stack JS", "Full Stack Open (University of Helsinki)", "Epic React", "Epic Stack by Kent C. Dodds"],
    beginnerProjects: ["Blog with markdown editor", "Expense tracker with login", "Recipe app with API + DB"],
    intermediateProjects: ["Project management tool (Trello clone)", "Booking system", "Realtime chat app"],
    advancedProjects: ["Multi-tenant SaaS", "AI-powered note app with RAG", "Marketplace with payments"],
    tools: ["VS Code", "Postman", "Docker", "Vercel", "Supabase", "Prisma"],
    careers: ["Full Stack Developer", "Product Engineer", "Founding Engineer", "Tech Lead"],
    internshipTips: ["Build 1 end-to-end deployed product", "Document architecture decisions", "Solve 100+ DSA problems", "Maintain a clean GitHub"]
  },
  {
    role: "AI Engineer", category: "ai", icon: "🤖",
    duration: "8–12 months", salary: "$90k – $180k / ₹12–35 LPA",
    skills: ["Python", "Math (Linear Algebra, Stats)", "PyTorch or TensorFlow", "LLMs & Transformers", "RAG & Vector DBs", "Prompt Engineering", "MLOps basics"],
    learningPath: ["Strong Python foundation", "Learn ML fundamentals (Andrew Ng)", "Deep learning with PyTorch", "Learn Transformers & LLMs", "Build RAG apps with LangChain", "Deploy with FastAPI + Docker"],
    courses: ["Andrew Ng — Machine Learning Specialization", "DeepLearning.AI — Deep Learning Specialization", "Hugging Face NLP Course", "Fast.ai Practical Deep Learning"],
    beginnerProjects: ["Sentiment analyzer", "Image classifier (CNN)", "Spam detector"],
    intermediateProjects: ["RAG chatbot over PDFs", "Recommendation system", "AI writing assistant"],
    advancedProjects: ["Fine-tuned LLM for a niche domain", "Multi-agent AI system", "End-to-end MLOps pipeline"],
    tools: ["Jupyter / Colab", "PyTorch", "Hugging Face", "LangChain", "Pinecone / Weaviate", "Weights & Biases"],
    careers: ["AI Engineer", "ML Engineer", "Applied Scientist", "LLM Engineer", "AI Researcher"],
    internshipTips: ["Have 2 Kaggle competitions / notebooks", "Publish one ML blog or paper summary", "Open-source an AI tool on GitHub", "Be strong with Python + math"]
  },
  {
    role: "Data Scientist", category: "ai", icon: "📊",
    duration: "8–10 months", salary: "$80k – $150k / ₹10–28 LPA",
    skills: ["Python & SQL", "Pandas, NumPy", "Statistics & Probability", "ML Algorithms", "Data Visualization", "Storytelling with Data"],
    learningPath: ["Python + SQL", "Statistics & probability", "EDA with Pandas", "Classical ML models", "Visualization (Matplotlib, Plotly)", "Build a portfolio of case studies"],
    courses: ["IBM Data Science Professional Certificate", "Google Data Analytics", "Kaggle Learn micro-courses", "StatQuest YouTube"],
    beginnerProjects: ["Titanic survival prediction", "Sales EDA dashboard", "Movie rating analysis"],
    intermediateProjects: ["Customer segmentation", "Sales forecasting", "A/B test analysis"],
    advancedProjects: ["End-to-end ML pipeline", "Time series forecasting at scale", "Real-time analytics dashboard"],
    tools: ["Jupyter", "Pandas", "scikit-learn", "Tableau / Power BI", "SQL", "Git"],
    careers: ["Data Scientist", "Data Analyst", "Business Analyst", "ML Engineer"],
    internshipTips: ["Publish notebooks on Kaggle", "Build 3 case studies with storytelling", "Master SQL queries", "Practice case interviews"]
  },
  {
    role: "Cybersecurity Analyst", category: "ops", icon: "🛡️",
    duration: "6–9 months", salary: "$70k – $140k / ₹8–22 LPA",
    skills: ["Networking (TCP/IP, DNS)", "Linux fundamentals", "SIEM tools", "Threat analysis", "Pentesting basics", "Cryptography"],
    learningPath: ["Networking + Linux basics", "Security fundamentals (CIA, OWASP)", "Tools: Wireshark, Nmap, Burp", "Build a home lab SOC", "Practice CTFs", "Pursue CompTIA Security+"],
    courses: ["TryHackMe — Pre Security path", "HackTheBox Academy", "Cisco — Intro to Cybersecurity", "Professor Messer — Security+"],
    beginnerProjects: ["Set up a home SOC lab", "CTF writeups", "Password strength analyzer"],
    intermediateProjects: ["Phishing simulator + detector", "Network traffic analyzer", "Vulnerable web app audit"],
    advancedProjects: ["Red team engagement simulation", "Custom SIEM with ELK", "Malware analysis sandbox"],
    tools: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Splunk", "Kali Linux"],
    careers: ["Security Analyst", "SOC Analyst", "Penetration Tester", "Security Engineer"],
    internshipTips: ["Earn CompTIA Security+ or equivalent", "Be top 10% on TryHackMe / HTB", "Document CTF writeups on a blog", "Build a home lab"]
  },
  {
    role: "Cloud Engineer", category: "ops", icon: "☁️",
    duration: "6–9 months", salary: "$85k – $160k / ₹10–28 LPA",
    skills: ["Linux & Bash", "AWS / GCP / Azure", "Networking basics", "Terraform (IaC)", "Docker & Kubernetes", "CI/CD pipelines", "Monitoring"],
    learningPath: ["Linux + networking fundamentals", "Pick one cloud (AWS recommended)", "Earn AWS Cloud Practitioner", "Learn Terraform & IaC", "Containers (Docker → K8s)", "Build CI/CD pipelines"],
    courses: ["AWS Cloud Practitioner Essentials", "A Cloud Guru / Cloud Academy", "KodeKloud — DevOps path", "HashiCorp Learn — Terraform"],
    beginnerProjects: ["Deploy static site (S3 + CloudFront)", "Server setup on EC2", "Dockerize a web app"],
    intermediateProjects: ["3-tier app with Terraform", "K8s deployment on EKS", "CI/CD with GitHub Actions"],
    advancedProjects: ["Multi-region HA architecture", "Service mesh with Istio", "GitOps with ArgoCD"],
    tools: ["AWS Console", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus + Grafana"],
    careers: ["Cloud Engineer", "DevOps Engineer", "SRE", "Platform Engineer"],
    internshipTips: ["Earn AWS Cloud Practitioner cert", "Showcase IaC repo on GitHub", "Deploy 1 K8s project", "Understand cost & security"]
  },
  {
    role: "UI / UX Designer", category: "design", icon: "✨",
    duration: "4–6 months", salary: "$45k – $100k / ₹5–18 LPA",
    skills: ["Design Principles", "Color & Typography", "Figma", "User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
    learningPath: ["Design fundamentals (color, type, layout)", "Master Figma deeply", "Learn UX research methods", "Build a design system", "Create 3 case studies", "Get feedback on Dribbble / Behance"],
    courses: ["Google UX Design Certificate", "Refactoring UI by Adam Wathan", "Interaction Design Foundation", "DesignCourse YouTube"],
    beginnerProjects: ["Redesign a poorly-designed site", "Mobile app concept", "Landing page from scratch"],
    intermediateProjects: ["Full case study with research", "Design system in Figma", "SaaS dashboard redesign"],
    advancedProjects: ["End-to-end product design", "Design system + Storybook handoff", "Motion design prototype"],
    tools: ["Figma", "FigJam", "Notion", "Framer", "Adobe XD", "Maze (usability tests)"],
    careers: ["UI Designer", "UX Designer", "Product Designer", "Design Systems Lead"],
    internshipTips: ["Build a portfolio of 3 case studies", "Show your process, not just visuals", "Get feedback from senior designers", "Learn basics of HTML/CSS"]
  }
];

/* =================== TECHNOLOGIES =================== */
const technologies = [
  {
    name: "HTML", icon: "📄",
    overview: "HTML (HyperText Markup Language) is the structural foundation of every page on the web. It defines the content and meaning of a document — headings, paragraphs, images, forms, navigation — using semantic tags that browsers, screen readers, and search engines understand. Without HTML there is no web.",
    importance: "Every website, web app, and PWA starts with HTML. It is non-negotiable for any developer touching the frontend, and is the base layer for accessibility and SEO.",
    industryUse: "Used by 100% of websites — from Google and Wikipedia to e-commerce, banking, SaaS dashboards, and email templates.",
    skills: ["Semantic markup (header, main, article, section)", "Forms, inputs & validation", "Accessibility (ARIA, alt, labels)", "SEO meta tags & Open Graph", "HTML5 multimedia (video, audio, canvas)", "Web components basics"],
    applications: ["Marketing & landing pages", "Web applications & dashboards", "E-commerce product pages", "HTML email templates", "Documentation sites"],
    beginnerProjects: ["Personal bio page", "Restaurant menu page", "Contact form with validation"],
    intermediateProjects: ["Multi-page portfolio", "Accessible blog template", "Newsletter HTML email"],
    advancedProjects: ["Fully accessible e-commerce template", "SEO-optimized marketing site", "Web component library"],
    interviews: ["What is semantic HTML and why does it matter?", "Difference between <section> and <div>", "How does the browser parse HTML?", "What are data-* attributes used for?", "Explain ARIA roles with examples"],
    demand: "Extremely high — required for every frontend, full-stack, and design-engineer role.",
    careers: ["Frontend Developer", "Web Developer", "Email Developer", "Design Engineer"],
    resources: [["MDN Web Docs — HTML", "https://developer.mozilla.org/en-US/docs/Web/HTML"], ["W3Schools — HTML Tutorial", "https://www.w3schools.com/html/"]]
  },
  {
    name: "CSS", icon: "🎨",
    overview: "CSS (Cascading Style Sheets) controls how content looks and is laid out on screens of every size — colors, typography, spacing, animation, responsive design, and modern features like Grid, Flexbox, and container queries.",
    importance: "Great UI is what separates a working app from a delightful one. CSS is what makes brands feel premium and interfaces feel intuitive.",
    industryUse: "Every product company invests heavily in CSS — Apple, Stripe, Linear, Vercel, Airbnb, and millions of startups.",
    skills: ["Flexbox & Grid", "Responsive design with media queries", "CSS variables & theming", "Transitions & keyframe animations", "Modern selectors & pseudo-classes", "CSS architecture (BEM, utility-first)"],
    applications: ["Design systems", "Marketing pages", "Mobile-first apps", "Dashboards", "Email styling"],
    beginnerProjects: ["Pricing card UI", "Animated button library", "Responsive navbar"],
    intermediateProjects: ["Dark/light themed dashboard", "Glassmorphism landing page", "Loading-skeleton library"],
    advancedProjects: ["Full design system (tokens + components)", "CSS-only game", "Pixel-perfect Figma → code"],
    interviews: ["Explain the box model", "Difference between Flexbox and Grid", "What is specificity? How is it calculated?", "How do CSS variables work?", "Mobile-first vs desktop-first design"],
    demand: "Extremely high — every frontend role lists it as essential.",
    careers: ["Frontend Developer", "Design Engineer", "UI Engineer", "Email Developer"],
    resources: [["MDN Web Docs — CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"], ["CSS-Tricks", "https://css-tricks.com/"]]
  },
  {
    name: "JavaScript", icon: "⚡",
    overview: "JavaScript is the programming language of the web. It runs in every browser, powers backend (Node.js), mobile (React Native), and desktop (Electron) apps. It's interactive, async, and the most-used language in the world.",
    importance: "Without JS the web is static. Every modern app — Gmail, Figma, Notion, Spotify Web — is JavaScript at its core.",
    industryUse: "Used everywhere — frontend, backend, mobile, IoT, even databases.",
    skills: ["ES6+ syntax (let, const, arrows, destructuring)", "DOM manipulation", "Async/await, Promises, fetch", "Modules & bundlers", "Closures, scope, this", "Error handling & debugging"],
    applications: ["Single-page apps", "Browser extensions", "Backend APIs (Node.js)", "Mobile apps (React Native)", "Game development (Phaser, Three.js)"],
    beginnerProjects: ["Calculator", "Weather app with API", "Quiz game"],
    intermediateProjects: ["Habit tracker with charts", "Movie search app", "Drag-and-drop kanban"],
    advancedProjects: ["Real-time chat app", "Code editor in browser", "3D scene with Three.js"],
    interviews: ["Explain closures with an example", "Difference between == and ===", "How does the event loop work?", "What is hoisting?", "Promises vs async/await"],
    demand: "The #1 most-demanded programming language globally.",
    careers: ["Frontend Developer", "Full Stack Developer", "Node.js Engineer", "Mobile Developer"],
    resources: [["MDN Web Docs — JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"], ["JavaScript.info", "https://javascript.info/"]]
  },
  {
    name: "React", icon: "⚛️",
    overview: "React is the most popular JavaScript library for building user interfaces. It uses a component-based architecture and a virtual DOM to build fast, declarative UIs that scale.",
    importance: "React powers most modern frontends and is the standard at companies like Meta, Netflix, Airbnb, Uber, and almost every startup.",
    industryUse: "Web apps, dashboards, mobile (React Native), and even desktop apps.",
    skills: ["Components, props & children", "Hooks (useState, useEffect, useMemo, custom hooks)", "State management (Context, Zustand, Redux)", "Routing (React Router, TanStack Router)", "Forms & validation", "Performance optimization"],
    applications: ["Web dashboards", "E-commerce frontends", "SaaS products", "Internal tools", "Mobile apps via React Native"],
    beginnerProjects: ["Todo app", "Movie list with API", "Recipe finder"],
    intermediateProjects: ["E-commerce store with cart", "Real-time chat UI", "Note-taking app with markdown"],
    advancedProjects: ["Multi-tenant SaaS dashboard", "Drag-and-drop website builder", "Collaborative whiteboard"],
    interviews: ["What is the virtual DOM?", "useEffect dependency array gotchas", "Controlled vs uncontrolled components", "When to use useMemo / useCallback", "How does reconciliation work?"],
    demand: "Extremely high — the most-requested frontend skill.",
    careers: ["React Developer", "Frontend Engineer", "Full Stack Developer", "UI Engineer"],
    resources: [["Official React Documentation", "https://react.dev/"], ["React Patterns", "https://reactpatterns.com/"]]
  },
  {
    name: "Node.js", icon: "🟢",
    overview: "Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JS on the server. It's event-driven, non-blocking, and ideal for fast, scalable network apps.",
    importance: "Used by Netflix, LinkedIn, PayPal, Uber for high-throughput backends. Enables JS developers to be full-stack.",
    industryUse: "REST and GraphQL APIs, real-time apps, microservices, CLI tools, and serverless functions.",
    skills: ["Express / Fastify", "REST & GraphQL APIs", "Authentication (JWT, OAuth)", "File I/O & streams", "Working with databases", "Error handling & logging"],
    applications: ["Backend APIs", "Real-time apps (chat, multiplayer)", "Serverless functions", "CLI tools", "Build tooling"],
    beginnerProjects: ["REST API for a todo app", "URL shortener", "Weather aggregator"],
    intermediateProjects: ["Auth microservice", "File upload service", "Realtime chat with Socket.IO"],
    advancedProjects: ["Distributed job queue", "Microservices with gRPC", "GraphQL gateway"],
    interviews: ["What is the event loop in Node?", "Difference between process.nextTick and setImmediate", "How does Node handle concurrency?", "How would you scale a Node app?", "Streams vs buffers"],
    demand: "Very high — top backend language for JS shops.",
    careers: ["Backend Developer", "Full Stack Developer", "API Engineer", "Platform Engineer"],
    resources: [["Official Node.js Documentation", "https://nodejs.org/en/docs"], ["Express.js Guide", "https://expressjs.com/"]]
  },
  {
    name: "Python", icon: "🐍",
    overview: "Python is a clean, readable, general-purpose language used for AI, data science, web backends, automation, scripting, and more. Its huge ecosystem makes it the world's most versatile language.",
    importance: "The default language for AI/ML, data science, and a top choice for backend and automation.",
    industryUse: "Google, Instagram, Netflix, NASA, OpenAI — Python is core to AI tooling and modern data stacks.",
    skills: ["Core syntax & data structures", "OOP & functional patterns", "Virtual environments & pip", "Pandas & NumPy", "Web frameworks (Django, Flask, FastAPI)", "Testing with pytest"],
    applications: ["AI / ML / Deep Learning", "Data analysis & visualization", "Web backends", "Automation & scripting", "Scientific computing"],
    beginnerProjects: ["Password generator", "File organizer script", "Weather CLI"],
    intermediateProjects: ["Flask blog with auth", "Web scraper", "Sentiment analyzer"],
    advancedProjects: ["RAG chatbot with FastAPI", "ML model + API + dashboard", "Distributed task processor"],
    interviews: ["Difference between list, tuple, set", "What are decorators?", "Mutable vs immutable types", "How does GIL work?", "List comprehensions vs generators"],
    demand: "Extremely high — especially for AI/ML and data roles.",
    careers: ["Python Developer", "AI / ML Engineer", "Data Scientist", "Backend Developer", "Automation Engineer"],
    resources: [["Official Python Documentation", "https://docs.python.org/3/"], ["Real Python Tutorials", "https://realpython.com/"]]
  },
  {
    name: "MySQL", icon: "🗄️",
    overview: "MySQL is one of the most popular open-source relational databases. It stores structured data in tables and is the backbone of millions of applications.",
    importance: "Knowing SQL is non-negotiable for backend, data, and full-stack roles. MySQL is one of the easiest to start with.",
    industryUse: "Used by Facebook, YouTube, Twitter, Booking.com, WordPress, Shopify.",
    skills: ["SELECT, JOIN, GROUP BY", "Schema design & normalization", "Indexes & query optimization", "Transactions & ACID", "Stored procedures & triggers", "Backups & replication"],
    applications: ["Web app databases", "Analytics warehouses", "E-commerce systems", "Reporting tools"],
    beginnerProjects: ["Library management DB", "Movie rating DB queries", "Sales analytics queries"],
    intermediateProjects: ["Blog backend with MySQL", "Inventory system", "Banking schema with transactions"],
    advancedProjects: ["Sharded MySQL setup", "Replication + failover", "Multi-tenant SaaS schema"],
    interviews: ["Inner vs outer join", "What is normalization?", "How do indexes work?", "ACID properties explained", "Explain a query plan"],
    demand: "Very high — SQL is in nearly every backend job description.",
    careers: ["Backend Developer", "Data Engineer", "DBA", "Data Analyst"],
    resources: [["MySQL Documentation", "https://dev.mysql.com/doc/"], ["SQLBolt — Interactive Lessons", "https://sqlbolt.com/"]]
  },
  {
    name: "Git & GitHub", icon: "🐙",
    overview: "Git is the world's most-used version control system. GitHub is the largest platform built on it — hosting code, enabling collaboration, CI/CD, and the entire open-source ecosystem.",
    importance: "Every developer needs Git. A strong GitHub profile is your second resume.",
    industryUse: "Universal — from solo developers to companies of every size.",
    skills: ["init, add, commit, push, pull", "Branching & merging", "Resolving merge conflicts", "Pull requests & code review", "Rebasing & cherry-picking", "GitHub Actions (CI/CD)"],
    applications: ["Team collaboration", "Open-source contribution", "Automated deployment", "Code review workflows"],
    beginnerProjects: ["Publish portfolio repo with README", "Contribute to a beginner-friendly OSS repo", "Set up GitHub profile README"],
    intermediateProjects: ["GitHub Actions CI for a project", "Multi-branch release workflow", "Open-source library with docs"],
    advancedProjects: ["Maintainer of an OSS project", "Monorepo with shared CI", "Automated release pipeline"],
    interviews: ["Difference between merge and rebase", "What is a fast-forward merge?", "How do you resolve conflicts?", "Git stash use cases", "Reset vs revert vs checkout"],
    demand: "Universal — required for every developer role.",
    careers: ["Every engineering role"],
    resources: [["Git Documentation", "https://git-scm.com/doc"], ["GitHub Docs", "https://docs.github.com/"]]
  },
  {
    name: "Flutter", icon: "📱",
    overview: "Flutter is Google's UI toolkit for building beautiful, natively-compiled apps for mobile, web, and desktop from a single Dart codebase.",
    importance: "Build for iOS + Android + Web with one codebase — huge productivity multiplier for startups and product teams.",
    industryUse: "Used by Google Pay, BMW, eBay Motors, Alibaba, Reflectly.",
    skills: ["Dart language", "Widgets (Stateless & Stateful)", "State management (Provider, Riverpod, Bloc)", "Navigation & routing", "API integration", "Platform channels"],
    applications: ["Cross-platform mobile apps", "MVP for startups", "Internal tools", "Web & desktop UIs"],
    beginnerProjects: ["Calculator app", "Todo with local storage", "Weather app"],
    intermediateProjects: ["E-commerce app with cart", "Chat app with Firebase", "Fitness tracker"],
    advancedProjects: ["Multi-platform SaaS app", "Audio/video streaming app", "Offline-first app with sync"],
    interviews: ["Stateless vs Stateful widget", "How does the widget tree work?", "Hot reload vs hot restart", "State management options compared", "Native bridges in Flutter"],
    demand: "High and growing — top cross-platform framework.",
    careers: ["Flutter Developer", "Mobile App Developer", "Cross-Platform Engineer"],
    resources: [["Flutter Documentation", "https://docs.flutter.dev/"], ["Dart Language Tour", "https://dart.dev/guides"]]
  },
  {
    name: "AI Tools", icon: "🧠",
    overview: "Modern AI tools (ChatGPT, Claude, Gemini, Copilot, Midjourney) supercharge how developers and creators work — writing code, drafting content, designing visuals, automating workflows.",
    importance: "Engineers who use AI well will ship 10× faster than those who don't. AI literacy is now a baseline skill.",
    industryUse: "Every modern product team — from startups to enterprises — integrates AI tools and APIs.",
    skills: ["Prompt engineering", "Using LLM APIs (OpenAI, Anthropic, Gemini)", "RAG with vector DBs", "Function calling & tool use", "AI safety & evals", "Building agents"],
    applications: ["Chatbots & assistants", "Code generation", "Content creation", "Image / video generation", "Workflow automation"],
    beginnerProjects: ["GPT-powered chatbot", "AI summarizer for articles", "Image generator UI"],
    intermediateProjects: ["RAG chatbot over your notes", "AI resume reviewer", "Voice-to-text assistant"],
    advancedProjects: ["Multi-agent research assistant", "Fine-tuned model for niche use", "Production AI app with evals"],
    interviews: ["What is RAG and why is it used?", "Difference between fine-tuning and prompting", "Token limits and context windows", "Hallucinations — causes and mitigations", "Function calling explained"],
    demand: "Exploding — every team is hiring for AI integration skills.",
    careers: ["AI Engineer", "Prompt Engineer", "AI Product Engineer", "LLM Application Developer"],
    resources: [["OpenAI Documentation", "https://platform.openai.com/docs"], ["Google AI for Developers", "https://ai.google.dev/"]]
  }
];

/* =================== RESOURCES =================== */
const resources = [
  { title: "Web Development", icon: "🌐", links: [
    ["MDN Web Docs", "https://developer.mozilla.org"],
    ["freeCodeCamp", "https://freecodecamp.org"],
    ["The Odin Project", "https://theodinproject.com"],
    ["Frontend Masters", "https://frontendmasters.com"]
  ]},
  { title: "AI & ML", icon: "🤖", links: [
    ["DeepLearning.AI", "https://deeplearning.ai"],
    ["Fast.ai", "https://fast.ai"],
    ["Hugging Face Learn", "https://huggingface.co/learn"],
    ["Google ML Crash Course", "https://developers.google.com/machine-learning"]
  ]},
  { title: "Programming", icon: "💻", links: [
    ["CS50 by Harvard", "https://cs50.harvard.edu"],
    ["LeetCode", "https://leetcode.com"],
    ["Codecademy", "https://codecademy.com"],
    ["Exercism", "https://exercism.org"]
  ]},
  { title: "Interview Prep", icon: "🎯", links: [
    ["NeetCode", "https://neetcode.io"],
    ["System Design Primer", "https://github.com/donnemartin/system-design-primer"],
    ["Tech Interview Handbook", "https://techinterviewhandbook.org"],
    ["Pramp Mock Interviews", "https://pramp.com"]
  ]}
];

/* =================== FAQs =================== */
const faqs = [
  ["Is SkillForge AI free?", "Yes — all roadmaps, project ideas, and resources are 100% free to use."],
  ["Do I need a CS degree to start?", "No. Most modern developers are self-taught. Pick a roadmap and start building consistently."],
  ["How long does it take to become job-ready?", "Most learners reach junior level in 6–9 months of focused daily practice and building real projects."],
  ["Which career should I pick?", "Use the Technology Explorer and Roadmaps section to see what excites you most. Try small projects before committing."],
  ["Will AI replace developers?", "AI augments developers. Engineers who use AI well will replace those who don't — so learn to use it as a superpower."],
  ["How many projects should I have on my resume?", "3–5 polished, deployed projects beat 20 incomplete ones. Quality and impact > quantity."]
];

/* =================== LOADER =================== */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hidden"), 600);
});

/* =================== THEME =================== */
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("skillforge-theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
  localStorage.setItem("skillforge-theme", next);
});

/* =================== MOBILE NAV =================== */
document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open"))
);

/* =================== ROADMAPS RENDER =================== */
const roadmapGrid = document.getElementById("roadmapGrid");
let activeFilter = "all";
let searchTerm = "";

function renderRoadmaps() {
  const list = roadmaps.filter(r =>
    (activeFilter === "all" || r.category === activeFilter) &&
    r.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  roadmapGrid.innerHTML = list.length ? list.map((r, i) => `
    <article class="card roadmap-card glass reveal visible">
      <div style="font-size:1.8rem;margin-bottom:.5rem">${r.icon}</div>
      <span class="tag">${r.category.toUpperCase()}</span>
      <div class="role">${r.role}</div>
      <div class="meta">
        <span>⏱ Duration: <strong>${r.duration}</strong></span>
        <span>💰 Salary: <strong>${r.salary}</strong></span>
      </div>
      <h4 style="font-size:.85rem;margin-bottom:.4rem;color:var(--primary);text-transform:uppercase;letter-spacing:.04em">Top Skills</h4>
      <ul>${r.skills.slice(0, 4).map(s => `<li>${s}</li>`).join("")}</ul>
      <button class="btn btn-primary" data-roadmap="${roadmaps.indexOf(r)}">View Full Roadmap →</button>
    </article>
  `).join("") : `<p class="muted" style="text-align:center;grid-column:1/-1">No roadmaps match your search.</p>`;

  roadmapGrid.querySelectorAll("[data-roadmap]").forEach(btn => {
    btn.addEventListener("click", () => openRoadmapModal(roadmaps[+btn.dataset.roadmap]));
  });
}
renderRoadmaps();

document.getElementById("roadmapSearch").addEventListener("input", e => {
  searchTerm = e.target.value;
  renderRoadmaps();
});
document.querySelectorAll("#roadmapFilters .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#roadmapFilters .chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.dataset.filter;
    renderRoadmaps();
  });
});

function openRoadmapModal(r) {
  const list = arr => `<ul>${arr.map(x => `<li>${x}</li>`).join("")}</ul>`;
  openModal(`
    <div class="icon">${r.icon}</div>
    <h3>${r.role}</h3>
    <p>${r.duration} · ${r.salary}</p>
    <h4>Skills Required</h4>${list(r.skills)}
    <h4>Learning Path</h4>${list(r.learningPath)}
    <h4>Recommended Courses</h4>${list(r.courses)}
    <h4>Beginner Projects</h4>${list(r.beginnerProjects)}
    <h4>Intermediate Projects</h4>${list(r.intermediateProjects)}
    <h4>Advanced Projects</h4>${list(r.advancedProjects)}
    <h4>Industry Tools</h4>${list(r.tools)}
    <h4>Career Opportunities</h4>${list(r.careers)}
    <h4>Internship Preparation Tips</h4>${list(r.internshipTips)}
    <h4>Expected Learning Duration</h4><p>${r.duration} of consistent daily practice.</p>
    <h4>Salary Range</h4><p>${r.salary}</p>
  `);
}

/* =================== TECH EXPLORER =================== */
const techGrid = document.getElementById("techGrid");
let techSearch = "";

function renderTech() {
  const list = technologies.filter(t => t.name.toLowerCase().includes(techSearch.toLowerCase()));
  techGrid.innerHTML = list.length ? list.map(t => `
    <div class="tech-card glass reveal visible" data-name="${t.name}">
      <div class="icon">${t.icon}</div>
      <p>${t.name}</p>
    </div>
  `).join("") : `<p class="muted" style="text-align:center;grid-column:1/-1">No technologies match your search.</p>`;
}
renderTech();

document.getElementById("techSearch").addEventListener("input", e => {
  techSearch = e.target.value;
  renderTech();
});

techGrid.addEventListener("click", e => {
  const card = e.target.closest(".tech-card");
  if (!card) return;
  const t = technologies.find(x => x.name === card.dataset.name);
  const list = arr => `<ul>${arr.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const links = arr => `<ul class="res-links">${arr.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">🔗 ${n}</a></li>`).join("")}</ul>`;
  openModal(`
    <div class="icon">${t.icon}</div>
    <h3>${t.name}</h3>
    <p>${t.overview}</p>
    <h4>Why It Matters</h4><p>${t.importance}</p>
    <h4>Where It's Used in Industry</h4><p>${t.industryUse}</p>
    <h4>Skills You Will Learn</h4>${list(t.skills)}
    <h4>Real-World Applications</h4>${list(t.applications)}
    <h4>Beginner Projects</h4>${list(t.beginnerProjects)}
    <h4>Intermediate Projects</h4>${list(t.intermediateProjects)}
    <h4>Advanced Projects</h4>${list(t.advancedProjects)}
    <h4>Common Interview Questions</h4>${list(t.interviews)}
    <h4>Industry Demand</h4><p>${t.demand}</p>
    <h4>Related Career Paths</h4>${list(t.careers)}
    <h4>Official Learning Resources</h4>${links(t.resources)}
  `);
});

/* =================== MODAL =================== */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
function openModal(html) {
  modalBody.innerHTML = html;
  modal.classList.add("open");
  modal.scrollTop = 0;
  modal.querySelector(".modal-card").scrollTop = 0;
}
document.getElementById("modalClose").addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("open"); });
document.addEventListener("keydown", e => { if (e.key === "Escape") modal.classList.remove("open"); });

/* =================== PROJECT GENERATOR =================== */
function generateProject() {
  const name = document.getElementById("pgName").value.trim();
  const level = document.getElementById("pgLevel").value || pickRandom(["beginner","intermediate","advanced"]);
  const techs = document.getElementById("pgTech").value.split(",").map(s => s.trim()).filter(Boolean);
  const interests = document.getElementById("pgInterests").value.trim();
  const category = document.getElementById("pgCategory").value || pickRandom(["web","ai","mobile","data"]);
  const time = document.getElementById("pgTime").value || "4–7 hours";
  const goal = document.getElementById("pgGoal").value.trim();

  const blueprint = buildBlueprint({ name, level, techs, interests, category, time, goal });
  const out = document.getElementById("ideaOutput");

  // skeleton effect
  out.innerHTML = `<div class="skeleton" style="height:18px;width:60%;margin-bottom:.6rem"></div>
    <div class="skeleton" style="height:14px;width:90%;margin-bottom:.4rem"></div>
    <div class="skeleton" style="height:14px;width:80%"></div>`;

  setTimeout(() => {
    const list = arr => `<ul>${arr.map(x => `<li>${x}</li>`).join("")}</ul>`;
    out.innerHTML = `
      ${name ? `<p class="muted small">Crafted for <strong>${escapeHtml(name)}</strong></p>` : ""}
      <h4>💡 ${blueprint.title}</h4>
      <div class="meta-pills">
        <span class="meta-pill">${blueprint.difficulty}</span>
        <span class="meta-pill">⏱ ${blueprint.eta}</span>
        <span class="meta-pill">${blueprint.categoryLabel}</span>
      </div>
      <h5>Problem Statement</h5><p>${blueprint.problem}</p>
      <h5>Key Features</h5>${list(blueprint.features)}
      <h5>Tech Stack</h5>${list(blueprint.stack)}
      <h5>Suggested Folder Structure</h5><pre>${blueprint.folder}</pre>
      <h5>Development Steps</h5>${list(blueprint.steps)}
      <h5>Skills You'll Learn</h5>${list(blueprint.skills)}
      <h5>GitHub README Outline</h5><pre>${blueprint.readme}</pre>
      <h5>Resume Description</h5><p><em>${blueprint.resume}</em></p>
    `;
  }, 450);
}
window.generateProject = generateProject;

document.getElementById("pgReset").addEventListener("click", () => {
  document.getElementById("ideaForm").reset();
  document.getElementById("ideaOutput").innerHTML = `<p class="muted">Your personalized project blueprint will appear here.</p>`;
});

function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function escapeHtml(s) { return s.replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m])); }

function buildBlueprint({ name, level, techs, interests, category, time, goal }) {
  const categoryMap = {
    web: "Web App", ai: "AI / ML", mobile: "Mobile App",
    data: "Data / Analytics", security: "Cybersecurity", cloud: "Cloud / DevOps"
  };
  const etaMap = { beginner: "1–2 weeks", intermediate: "3–5 weeks", advanced: "6–10 weeks" };

  const ideas = {
    web: {
      beginner: { t: "Habit Tracker Web App", p: "Help users build consistency by tracking daily habits with streaks and reminders." },
      intermediate: { t: "Interactive Recipe Hub", p: "A community recipe site with filters, favorites, and user-submitted reviews." },
      advanced: { t: "Multi-tenant SaaS Dashboard", p: "A subscription-based dashboard with team workspaces, billing, and analytics." }
    },
    ai: {
      beginner: { t: "AI Quote Mood Classifier", p: "Classify quotes by emotional tone using a pre-trained sentiment model." },
      intermediate: { t: "RAG Study Buddy", p: "Upload PDFs and ask questions — the app retrieves and answers using LLM + vector DB." },
      advanced: { t: "Multi-Agent Research Assistant", p: "Agents that browse, summarize, and cite sources for any research question." }
    },
    mobile: {
      beginner: { t: "Daily Mood Journal App", p: "A calm Flutter app to log mood, notes, and view trends over time." },
      intermediate: { t: "Local Events Discovery App", p: "Find nearby events with maps, filters, and offline favorites." },
      advanced: { t: "Offline-First Fitness Tracker", p: "Track workouts and sync seamlessly when back online." }
    },
    data: {
      beginner: { t: "Personal Finance EDA", p: "Analyze your spending CSV and visualize where the money goes." },
      intermediate: { t: "Sales Forecasting Dashboard", p: "Forecast next-quarter sales from historical data with a clean Streamlit UI." },
      advanced: { t: "Real-Time Analytics Pipeline", p: "Stream events, transform with dbt, visualize in a dashboard." }
    },
    security: {
      beginner: { t: "Password Strength Auditor", p: "A CLI + web tool that scores passwords using entropy + breach lookup." },
      intermediate: { t: "Phishing URL Detector", p: "ML model that flags suspicious URLs with a browser extension UI." },
      advanced: { t: "Mini SIEM with ELK", p: "Aggregate logs, define alerts, and triage incidents in a custom dashboard." }
    },
    cloud: {
      beginner: { t: "Static Site CI/CD Pipeline", p: "Deploy a site to S3 + CloudFront with GitHub Actions on every push." },
      intermediate: { t: "3-Tier App with Terraform", p: "Provision a VPC, app servers, and database using Infrastructure as Code." },
      advanced: { t: "Kubernetes GitOps Platform", p: "Deploy microservices to EKS with ArgoCD and monitoring." }
    }
  };

  const pick = ideas[category]?.[level] || ideas.web[level] || ideas.web.beginner;
  const interestSuffix = interests ? ` — themed around ${interests}` : "";
  const title = pick.t + interestSuffix;

  const stackByCat = {
    web: ["React + TypeScript", "Tailwind CSS", "Node.js + Express", "PostgreSQL", "Vercel for deploy"],
    ai: ["Python", "FastAPI", "LangChain", "OpenAI API", "Pinecone (vector DB)", "Streamlit / Next.js UI"],
    mobile: ["Flutter + Dart", "Firebase Auth + Firestore", "Riverpod for state", "REST API"],
    data: ["Python", "Pandas + NumPy", "scikit-learn / Prophet", "Streamlit / Plotly Dash", "PostgreSQL"],
    security: ["Python", "Scapy / requests", "FastAPI", "Docker", "ELK Stack"],
    cloud: ["AWS (S3, EC2, RDS)", "Terraform", "Docker", "GitHub Actions", "Prometheus + Grafana"]
  };
  const stack = techs.length ? [...new Set([...techs, ...stackByCat[category]])] : stackByCat[category];

  const features = {
    beginner: ["Clean responsive UI", "Core CRUD functionality", "Local data persistence", "Light/dark mode"],
    intermediate: ["User authentication", "Search & filtering", "Realtime updates", "Charts & visualizations", "Deployed live demo"],
    advanced: ["Role-based access control", "Background jobs / queues", "Test coverage > 70%", "CI/CD pipeline", "Monitoring & logging", "Scalable architecture"]
  }[level];

  const steps = [
    "Define scope and write a 1-page spec",
    "Sketch UI in Figma or paper",
    "Set up repository with README + license",
    "Build a working MVP end-to-end",
    "Add polish: validation, error states, empty states",
    "Write tests for core logic",
    "Deploy to production and share for feedback",
    "Iterate based on real user input"
  ];

  const skills = [
    `${categoryMap[category]} fundamentals`,
    "Project planning & scoping",
    "Git workflow & code review",
    "API design & integration",
    "Deployment & DevOps basics",
    "Writing recruiter-ready documentation"
  ];

  const folder = `${slug(title)}/
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ hooks/
│  ├─ lib/
│  └─ styles/
├─ public/
├─ tests/
├─ .github/workflows/
├─ README.md
└─ package.json`;

  const readme = `# ${title}

## ✨ Overview
${pick.p}

## 🚀 Features
${features.map(f => "- " + f).join("\n")}

## 🛠 Tech Stack
${stack.map(s => "- " + s).join("\n")}

## 📦 Getting Started
\`\`\`bash
git clone <repo>
npm install
npm run dev
\`\`\`

## 📸 Screenshots
_Add screenshots or a demo GIF here._

## 🧠 What I Learned
- Building ${categoryMap[category]} projects end-to-end
- ${goal || "Becoming industry-ready"}
`;

  const resume = `Built ${title} — a ${level}-level ${categoryMap[category]} project using ${stack.slice(0,3).join(", ")}. Implemented ${features.slice(0,2).join(" and ").toLowerCase()}; deployed live and documented on GitHub.${goal ? ` Aligned with goal: ${goal}.` : ""}`;

  return {
    title,
    problem: pick.p + (goal ? ` Aligned with the goal: ${goal}.` : ""),
    features, stack, steps, skills,
    difficulty: level.charAt(0).toUpperCase() + level.slice(1),
    eta: etaMap[level],
    categoryLabel: categoryMap[category],
    folder, readme, resume
  };
}
function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40); }

/* =================== RESOURCES =================== */
document.getElementById("resourceGrid").innerHTML = resources.map(r => `
  <div class="card resource-card glass reveal">
    <h3>${r.icon} ${r.title}</h3>
    ${r.links.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n} →</a>`).join("")}
  </div>
`).join("");

/* =================== FAQ =================== */
document.getElementById("faqList").innerHTML = faqs.map(([q, a]) => `
  <div class="faq-item glass reveal">
    <div class="faq-q">${q}</div>
    <div class="faq-a">${a}</div>
  </div>
`).join("");
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => item.classList.toggle("open"));
});

/* =================== CONTACT (with validation) =================== */
function handleContact() {
  const name = document.getElementById("cName");
  const email = document.getElementById("cEmail");
  const msg = document.getElementById("cMsg");
  const status = document.getElementById("contactStatus");
  const errName = document.getElementById("errName");
  const errEmail = document.getElementById("errEmail");
  const errMsg = document.getElementById("errMsg");

  [name, email, msg].forEach(el => el.classList.remove("invalid"));
  errName.textContent = errEmail.textContent = errMsg.textContent = "";
  status.style.color = "";

  let ok = true;
  if (!/^[a-zA-Z][a-zA-Z\s.'-]{1,49}$/.test(name.value.trim())) {
    errName.textContent = "Please enter a valid name (letters only, min 2 chars).";
    name.classList.add("invalid"); ok = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
    errEmail.textContent = "Please enter a valid email address.";
    email.classList.add("invalid"); ok = false;
  }
  if (msg.value.trim().length < 10) {
    errMsg.textContent = "Message must be at least 10 characters.";
    msg.classList.add("invalid"); ok = false;
  }
  if (!ok) {
    status.style.color = "var(--danger)";
    status.textContent = "Please fix the errors above.";
    return;
  }

  status.style.color = "";
  status.textContent = "✅ Thank you! Your message has been received. We'll be in touch soon.";
  document.getElementById("contactForm").reset();
  setTimeout(() => status.textContent = "", 5000);
}
window.handleContact = handleContact;

/* =================== RATING SYSTEM =================== */
const ratingKey = "skillforge-ratings";
const userRatedKey = "skillforge-user-rated";
function loadRatings() {
  try { return JSON.parse(localStorage.getItem(ratingKey)) || { sum: 0, count: 0 }; }
  catch { return { sum: 0, count: 0 }; }
}
function saveRatings(r) { localStorage.setItem(ratingKey, JSON.stringify(r)); }
function updateRatingUI() {
  const r = loadRatings();
  const avg = r.count ? (r.sum / r.count).toFixed(1) : "0.0";
  document.getElementById("avgRating").textContent = avg;
  document.getElementById("totalReviews").textContent = r.count;
}
updateRatingUI();

const stars = document.querySelectorAll("#starInput .star");
const userRated = +localStorage.getItem(userRatedKey) || 0;
function paintStars(n) { stars.forEach(s => s.classList.toggle("active", +s.dataset.v <= n)); }
if (userRated) paintStars(userRated);

stars.forEach(s => {
  s.addEventListener("mouseenter", () => paintStars(+s.dataset.v));
  s.addEventListener("mouseleave", () => paintStars(+localStorage.getItem(userRatedKey) || 0));
  s.addEventListener("click", () => {
    const v = +s.dataset.v;
    const prev = +localStorage.getItem(userRatedKey) || 0;
    const r = loadRatings();
    if (prev) { r.sum -= prev; r.count -= 1; }
    r.sum += v; r.count += 1;
    saveRatings(r);
    localStorage.setItem(userRatedKey, v);
    paintStars(v);
    updateRatingUI();
    document.getElementById("ratingStatus").textContent = `Thanks for rating us ${v} star${v>1?"s":""}!`;
  });
});

/* =================== FOOTER YEAR =================== */
document.getElementById("year").textContent = new Date().getFullYear();

/* =================== SCROLL REVEAL =================== */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* =================== ANIMATED COUNTERS =================== */
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.counter;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.4 });
document.querySelectorAll("[data-counter]").forEach(el => counterIO.observe(el));

/* =================== BACK TO TOP + SCROLL PROGRESS =================== */
const backTop = document.getElementById("backToTop");
const progress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 500);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = ((window.scrollY / h) * 100) + "%";
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));