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
  // Add your real credentials here. See README.md for an example entry.
  // File paths are relative to public/, e.g. "certificates/my-certificate.pdf".
  certificates: [] as Certificate[],
};
export type Project = {
  title: string;
  image: string;
  imageAlt: string;
  icon?: string;
  screenshots?: { src: string; alt: string; caption: string }[];
  category: string;
  description: string;
  tech: string[];
  details: { heading: string; body?: string; items?: string[]; ordered?: boolean; code?: string; after?: string }[];
  liveUrl?: string;
  repository?: {
    url: string;
    stars?: string;
    forks?: string;
  };
};
// Image paths are relative to public/. Replace a placeholder file, or point image
// to your own JPG/PNG/WebP (e.g. "projects/skilldis.webp") and update imageAlt.
// Add a verified repository and/or liveUrl to show project links in Explore.
// Optional repository counts appear in the project summary. Never invent links.
export const projects: Project[] = [
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
    category: "AI / Data",
    description:
      "An inclusive intelligent job matching system connecting PWD job seekers with opportunities based on skills, experience, and accessibility requirements.",
    tech: ["PHP", "MySQL", "JavaScript", "NLP"],
    // Explore content from README.md, blob 29fb5b328cf1d7f8c3f8464889d0d8dce23905b4.
    repository: { url: "https://github.com/jaesmade/Skilldis" },
    details: [
      {
        heading: "SkillDis",
        body: "SkillDis is an inclusive job matching web app that connects job seekers, including persons with disabilities (PWDs), with employers. It helps users find opportunities through resume and skill matching, workplace accommodation filters, and application tracking.",
      },
      {
        heading: "Features",
        items: [
          "Separate accounts and dashboards for general job seekers, PWD job seekers, and employers.",
          "Resume uploads in .txt and .docx formats, with text extraction for matching.",
          "PWD profile and skill management, job recommendations, and accommodation filters.",
          "Job applications and status tracking for PWD job seekers.",
          "Employer tools to post and manage jobs, review candidates, and update application statuses.",
        ],
      },
      {
        heading: "Built With",
        body: "PHP, MySQL through PDO, HTML, JavaScript, Tailwind CSS, and Font Awesome.",
      },
      {
        heading: "Local Setup",
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
      "A responsive municipal website concept making local information, tourism, and community resources easier to access.",
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
