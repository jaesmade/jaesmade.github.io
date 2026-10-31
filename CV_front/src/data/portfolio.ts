import photo from "../assets/me.webp";
export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issued?: string;
  file?: string;
  credentialUrl?: string;
};

const skillGroups = [
  { title: "Web", skills: ["HTML5", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "Express", "Python", "PHP", "ASP.NET"] },
  { title: "Automation", skills: ["Playwright", "Selenium", "n8n", "PowerShell"] },
  { title: "Machine Learning, AI, & Data Tools", skills: ["ChatGPT", "pandas", "NLP", "openpyxl", "xlrd"] },
  { title: "Databases", skills: ["MySQL", "SQLite", "PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { title: "Tools & Design", skills: ["Git", "GitHub", "Docker", "VS Code", "Arduino IDE", "Figma"] },
];

// Edit this file to personalize the template. Omit project URLs until a demo is available.
export const profile = {
  name: "Josh Andrew Esmade",
  firstName: "Josh",
  handle: "jaesmade",
  photo,
  role: "Developer & Computer Science graduate",
  location: "Philippines",
  email: "jaesmade@gmail.com",
  status: "Open to opportunities",
  intro:
    "I build web applications and intelligent systems.",
  about: [
    "I’m an automation enthusiast and a Computer Science graduate specializing in Intelligent Systems from Laguna State Polytechnic University. I’m drawn to finding simpler ways to get things done through code.",
    "I enjoy exploring browser automation, scripting, and data workflows to take the repetition out of everyday tasks. My goal is to build practical, reliable tools that save time and let people focus on work that needs their attention.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/jaesmade" },
    { label: "Facebook", url: "https://www.facebook.com/joshandrew.esmade/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/josh-andrew-esmade-6367b43a9/" },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Laguna State Polytechnic University",
      detail: "Major in Intelligent Systems",
    },
  ],
  skills: skillGroups.flatMap((group) => group.skills),
  skillGroups,
  // Webinar participation certificates, newest first. Paths are relative to public/.
  certificates: [
    {
      id: "aws-cloud-essentials",
      title: "AWS Cloud Essentials",
      issuer: "Koenig",
      issued: "2025",
      file: "certificates/aws-cloud-essentials.pdf",
    },
    {
      id: "github-for-youth",
      title: "GitHub for Youth",
      issuer: "Koenig",
      issued: "2025",
      file: "certificates/github-for-youth.pdf",
    },
    {
      id: "whats-new-in-java-21",
      title: "What's New in Java 21 - Boost Performance & Write Cleaner Code",
      issuer: "Koenig",
      issued: "2025",
      file: "certificates/whats-new-in-java-21.pdf",
    },
    {
      id: "implementing-devops-in-aws",
      title: "Implementing DevOps in AWS",
      issuer: "Koenig",
      issued: "2025",
      file: "certificates/implementing-devops-in-aws.pdf",
    },
    {
      id: "microsoft-copilot-studio-for-developer",
      title: "Microsoft Copilot Studio for Developer",
      issuer: "Koenig",
      issued: "2025",
      file: "certificates/microsoft-copilot-studio-for-developer.pdf",
    },
    {
      id: "generative-ai-for-developers",
      title: "Generative AI for Developers",
      issuer: "Koenig",
      issued: "2025",
      file: "certificates/generative-ai-for-developers.pdf",
    },
    {
      id: "basics-of-api-testing",
      title: "Basics of API Testing",
      issuer: "Koenig",
      issued: "2025",
      file: "certificates/basics-of-api-testing.pdf",
    },
  ] as Certificate[],
};
export type Project = {
  title: string;
  image: string;
  imageAlt: string;
  icon?: string;
  screenshots?: { src: string; alt: string; caption: string }[];
  category: string;
  description: string;
  role?: string;
  contribution?: string;
  approach?: string;
  tech: string[];
  details: { heading: string; body?: string; items?: string[]; ordered?: boolean; code?: string; after?: string; collapsible?: boolean }[];
  liveUrl?: string;
  repository?: {
    url: string;
    stars?: string;
    forks?: string;
  };
};
// Image paths are relative to public/. Replace a placeholder file, or point image
// to your own WebP screenshot and update imageAlt. Use SVG for vector artwork.
// Add a verified repository and/or liveUrl to show project links in Explore.
// Optional repository counts appear in the project summary. Never invent links.
export const projects: Project[] = [
  {
    title: "Screen Assistant (Study Desk)",
    image: "projects/screen-assistant/01-study-desk.webp",
    imageAlt: "Study Desk initial workspace with question input, screen capture controls, and study-coach panel",
    icon: "projects/screen-assistant/study-desk-mark.svg",
    screenshots: [
      { src: "projects/screen-assistant/01-study-desk.webp", alt: "Study Desk desktop app before a question is submitted", caption: "Study desk · initial workspace" },
    ],
    category: "Systems",
    description:
      "A desktop study coach that turns typed questions or cropped screen captures into AI explanations, with offline text extraction, saved questions, and a quick overlay.",
    approach: "Electron and React power the desktop workspace. A typed preload bridge connects the sandboxed interface to screen capture, local Tesseract.js OCR, encrypted credential storage, and streamed OpenRouter requests.",
    tech: ["Electron", "React", "TypeScript", "Tesseract.js", "OpenRouter"],
    repository: { url: "https://github.com/jaesmade/Screen-Assistant" },
    // Content verified against the local screen-assistant README and renderer/main source.
    details: [
      {
        heading: "Screen capture and local text extraction",
        body: "Type a question or select a screen or window and crop the relevant area. Bundled Tesseract.js and English language data extract printed text offline; users can review and correct it before replacing or appending to their question, with an optional image attachment.",
      },
      {
        heading: "AI study explanations",
        body: "For practice and assessments where AI assistance is permitted, questions and optional crops are sent through OpenRouter’s free model route. Explanations stream into the workspace with Markdown, code, tables, and KaTeX math support. Users can stop an active response; incomplete responses are excluded from history.",
      },
      {
        heading: "Saved questions",
        body: "Completed questions, explanations, model names, and attached crops are saved locally. Users can search and reopen entries without another API request, delete individual questions, or clear the history. Retention is limited to the latest 100 questions within a 50 MB file-size limit.",
      },
      {
        heading: "Quick overlay and desktop integration",
        body: "Ctrl+Shift+Space toggles a draggable, resizable, always-on-top workspace with capture, OCR, and streamed explanations. A system tray menu provides access to the desk and overlay. The project includes a Windows x64 installer.",
      },
      {
        heading: "Local data and credentials",
        body: "The main process stores the OpenRouter key using Electron’s native encryption. Capture and OCR stay on the device until a question is submitted; submitted text and any attached crop go to OpenRouter. Question history is stored separately as unencrypted local JSON.",
      },
      {
        heading: "Local setup",
        collapsible: true,
        ordered: true,
        items: [
          "Install Node.js 22.18 or newer and run npm ci from the project directory.",
          "Start the Electron development app with npm run dev.",
          "Open Settings and save an OpenRouter API key to enable AI explanations. Local OCR works without a key or internet connection.",
        ],
      },
    ],
  },
  {
    title: "HITOVEST",
    image: "projects/hitovest/01-home.webp",
    imageAlt: "HITOVEST homepage introducing its catfish farming tools and supplier network",
    icon: "projects/hitovest/hitovest-mark.webp",
    screenshots: [
      { src: "projects/hitovest/01-home.webp", alt: "HITOVEST public homepage", caption: "Homepage" },
      { src: "projects/hitovest/02-dashboard.webp", alt: "HITOVEST farmer dashboard with sample farm information", caption: "Farmer dashboard · sample data" },
      { src: "projects/hitovest/03-feed-planning.webp", alt: "HITOVEST daily feed allowance calculator with sample farm inputs", caption: "Feed planning · sample data" },
      { src: "projects/hitovest/04-water-quality.webp", alt: "HITOVEST water quality workspace with sample temperature and pH readings", caption: "Water quality · sample data" },
      { src: "projects/hitovest/05-marketplace.webp", alt: "HITOVEST marketplace showing sample feed, fingerling, and equipment listings", caption: "Marketplace · sample data" },
    ],
    category: "Web",
    description:
      "A catfish farming portal bringing farm profiles, feed and profitability planning, biomass estimates, water monitoring, and a local supplier directory together.",
    approach: "Django and SQLite support separate farmer, store owner, and guest workflows. An authenticated sensor endpoint accepts ESP32 water readings, while Leaflet and OpenStreetMap support the local directory map.",
    tech: ["Python", "Django", "SQLite", "JavaScript", "ESP32"],
    repository: { url: "https://github.com/jaesmade/Hitovest" },
    // Content verified against the local HITOVEST README and portal source.
    details: [
      {
        heading: "Farm management and planning",
        body: "Farmers can save multiple farm profiles, plan daily and total feed requirements, and estimate profitability using harvest revenue and operating costs.",
      },
      {
        heading: "Water monitoring",
        body: "Farmers can record temperature and pH manually or receive readings through a farm-authenticated sensor API. The included ESP32 sketch connects a DS18B20 temperature sensor and a PH-4502C pH module.",
      },
      {
        heading: "Biomass estimates",
        body: "The biomass tool uses a benchmark-calibrated planning heuristic based on temperature, pH, population, daily feed, pond area, and feed type. It reproduces a reference case from the thesis; it is not a trained decision tree or a validated production forecast.",
      },
      {
        heading: "Marketplace and local directory",
        body: "Store owners can publish, edit, and pause fish supply, feed, and fingerling listings. Visitors can search active products, filter by category, and browse the farm and supplier map. The map includes a local-area fallback when its online library is unavailable.",
      },
      {
        heading: "Local setup",
        collapsible: true,
        ordered: true,
        items: [
          "Create and activate a virtual environment with Python 3.10 or newer.",
          "Install dependencies with python -m pip install -r requirements.txt.",
          "Create database tables with python manage.py migrate.",
          "Start the development server with python manage.py runserver, then open http://127.0.0.1:8000/.",
        ],
        after: "Create a Farmer, Store owner, or Guest account to explore the role-specific workflows. Gallery screenshots use sample data from an isolated preview database.",
      },
    ],
  },
  {
    title: "SkillDis",
    image: "projects/skilldis/03-pwd-dashboard.webp",
    imageAlt: "SkillDis PWD job seeker dashboard with job recommendations and accessibility tools",
    icon: "projects/skilldis/skilldis-mark.svg",
    screenshots: [
      { src: "projects/skilldis/01-home.webp", alt: "SkillDis home page introducing the inclusive job matching platform", caption: "Home" },
      { src: "projects/skilldis/02-job-seeker-dashboard.webp", alt: "SkillDis general job seeker dashboard", caption: "Job seeker dashboard" },
      { src: "projects/skilldis/03-pwd-dashboard.webp", alt: "SkillDis PWD job seeker dashboard", caption: "PWD dashboard" },
      { src: "projects/skilldis/04-application-tracking.webp", alt: "SkillDis job application tracking page", caption: "Application tracking" },
      { src: "projects/skilldis/05-employer-workspace.webp", alt: "SkillDis employer workspace", caption: "Employer workspace" },
    ],
    category: "Web",
    description:
      "An inclusive intelligent job matching system connecting PWD job seekers with opportunities based on skills, experience, and accessibility requirements.",
    role: "Full website development",
    contribution: "I built the entire SkillDis website, from job seeker and employer dashboards to résumé matching, accommodation filters, and application tracking.",
    approach: "PHP and MySQL support separate job seeker and employer workflows. Résumé text extraction and skill matching help connect candidates with opportunities, alongside workplace accommodation filters.",
    tech: ["PHP", "MySQL", "JavaScript", "NLP"],
    // Explore content from README.md, blob 29fb5b328cf1d7f8c3f8464889d0d8dce23905b4.
    repository: { url: "https://github.com/jaesmade/Skilldis" },
    details: [
      {
        heading: "SkillDis",
        body: "SkillDis is an inclusive job matching web app that connects job seekers, including persons with disabilities (PWDs), with employers. It helps users find opportunities through resume and skill matching, workplace accommodation filters, and application tracking.",
      },
      {
        heading: "Job seeker tools",
        items: [
          "Separate accounts and dashboards for general job seekers and PWD job seekers.",
          "Resume uploads in .txt and .docx formats, with text extraction for matching.",
          "PWD profile and skill management, job recommendations, and accommodation filters.",
          "Job applications and status tracking for PWD job seekers.",
        ],
      },
      {
        heading: "Employer tools",
        body: "A dedicated employer dashboard supports posting and managing jobs, reviewing candidates, and updating application statuses.",
      },
      {
        heading: "Built With",
        body: "PHP, MySQL through PDO, HTML, JavaScript, Tailwind CSS, and Font Awesome.",
      },
      {
        heading: "Local Setup",
        collapsible: true,
        ordered: true,
        items: [
          "Install PHP with PDO MySQL, ZIP, and DOM extensions, and a MySQL server.",
          "Configure the database connection in Skilldis/db.php and provision the database tables. A database schema or SQL import file is not included in this project.",
          "Ensure Skilldis/uploads/resumes/ is writable by the PHP server.",
          "From the project root, start the local development server:",
        ],
        code: "php -S localhost:8000 -t Skilldis",
        after: "Open SkillDis locally at http://localhost:8000. Internet access is needed for external frontend assets and online matching services.",
      },
    ],
  },
  {
    title: "Municipal Siniloan Website",
    image: "projects/siniloan/01-home.webp",
    imageAlt: "Municipality of Siniloan official website homepage with municipal hall and government services",
    icon: "projects/siniloan/siniloan-seal.svg",
    liveUrl: "https://siniloanlaguna.gov.ph/",
    screenshots: [
      { src: "projects/siniloan/01-home.webp", alt: "Siniloan official website homepage and service shortcuts", caption: "Homepage" },
      { src: "projects/siniloan/02-services.webp", alt: "Siniloan government services by category", caption: "Government services" },
      { src: "projects/siniloan/03-offices.webp", alt: "Siniloan municipal office directory", caption: "Office directory" },
      { src: "projects/siniloan/04-transparency.webp", alt: "Siniloan transparency and full disclosure documents", caption: "Transparency" },
      { src: "projects/siniloan/05-explore-siniloan.webp", alt: "Siniloan tourism page showcasing local destinations", caption: "Explore Siniloan" },
    ],
    category: "Web",
    description:
      "A complete redesign of the Municipal Siniloan website, making government services, public information, and tourism resources easier to find.",
    role: "Complete website redesign",
    contribution: "I redesigned the entire Municipal Siniloan website, covering its government services, office directory, public information, and tourism pages.",
    approach: "The WordPress website organizes services and public information by topic, with dedicated pages for municipal offices, transparency documents, and local destinations.",
    tech: ["WordPress", "HTML", "JavaScript", "CSS"],
    // Explore content verified against the official site on 2026-10-27:
    // /, /services/, /offices/, /full-disclosure/, and /about-siniloan/explore-siniloan/.
    details: [
      {
        heading: "Municipal Siniloan Website",
        body: "The official website of the Municipality of Siniloan, Laguna brings government services, office information, public documents, news, and tourism resources together. Residents, businesses, and visitors can search the site or browse by topic to find the information they need.",
      },
      {
        heading: "Government services",
        body: "A category-based service directory guides residents to municipal services and the Citizen’s Charter, which sets out requirements, steps, fees, and processing times. Downloadable forms help users prepare before visiting an office.",
        items: [
          "Certificates, permits and IDs; business and trade; civil registry; real property tax and assessment; and building and engineering.",
          "Health, social welfare, employment, agriculture and fisheries, disaster preparedness, education and scholarships, and environment and sanitation.",
        ],
      },
      {
        heading: "Office directory and public documents",
        body: "The office directory connects visitors with municipal departments and their functions, services, forms, and contact details. The Transparency and Full Disclosure section groups disclosure reports, bids and awards, projects and programs, Freedom of Information resources, and the data privacy notice.",
      },
      {
        heading: "News and community information",
        body: "The homepage highlights municipal news and announcements alongside local government information. Visitors can also find contact directories, emergency resources, Municipal Hall directions, office hours, and a feedback and complaints page.",
      },
      {
        heading: "Tourism and culture",
        body: "Explore Siniloan showcases Mt. Romelo and waterfalls such as Buruwisan and Tulay na Bato, with destination galleries and trip-planning information. It also presents Guilingan Festival highlights, local cafés and restaurants, accommodations, resorts, and event venues.",
        after: "Visitor guides include routes, registration and guide information, reference fees, a hiking checklist, and Tourism Office contacts. The page asks visitors to confirm current fees, access, and trail conditions before travelling.",
      },
      {
        heading: "Digital services",
        body: "The homepage introduces the planned One Citizen Account and marks MPDO e-Zoning and PESO Jobseekers as coming soon. It also links to the national eGovPH app and currently available resources such as downloadable forms and directories.",
      },
    ],
  },
];
