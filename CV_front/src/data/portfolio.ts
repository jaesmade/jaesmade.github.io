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
    "I build web apps and automation tools that simplify everyday work.",
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
  download?: { url: string; label: string };
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
    title: "Excel Workbook Splitter & Merger",
    image: "projects/excel-workbook-splitter/01-workbook-splitter.webp",
    imageAlt: "Excel Splitter & Merger desktop app showing file selection, grouping columns, and workbook generation",
    category: "Systems",
    description:
      "A Python desktop tool that combines Excel and CSV files, then splits records into worksheets by one or more grouping columns. Preview, sort, and select groups before saving the result.",
    approach: "CustomTkinter provides the desktop interface. pandas combines tabular data, while openpyxl, xlrd, and xlwt handle Excel formats. Workbook processing runs on a background thread to keep the interface responsive.",
    tech: ["Python", "CustomTkinter", "pandas", "openpyxl", "xlrd", "xlwt"],
    repository: { url: "https://github.com/jaesmade/Python-Excel-Workbook-Separator-Uniter" },
    download: {
      url: "https://github.com/jaesmade/Python-Excel-Workbook-Separator-Uniter/releases/download/excel/main.exe",
      label: "Download for Windows",
    },
    details: [
      {
        heading: "Split and combine workbooks",
        body: "Select Excel workbooks (.xlsx, .xlsm, or .xls) and CSV files, then choose a worksheet or All sheets. The app groups matching rows into separate worksheets in a new workbook.",
        items: [
          "Group by a single column or a combination of columns.",
          "Combine worksheets across files, matching headers even when their order differs.",
          "Preview detected groups, sort alphabetically or by record count, and exclude groups before exporting.",
          "Retain source rows and headers, leave missing columns blank, and sanitize output sheet names for Excel.",
        ],
      },
      {
        heading: "Windows download",
        body: "Download for Windows retrieves main.exe directly from the repository's App v1.01 release. The repository contains the current Python source and setup instructions.",
      },
      {
        heading: "Run from source",
        collapsible: true,
        ordered: true,
        items: [
          "Clone the GitHub repository or download and extract its source archive.",
          "Install the dependencies from the project folder.",
          "Start the desktop application with Python.",
        ],
        code: "python -m pip install -r requirements.txt\npython main.py",
        after: "After selecting the files, worksheet, and grouping columns, generate the workbook and choose its destination in the Save As dialog.",
      },
    ],
  },
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
    download: {
      url: "https://github.com/jaesmade/Screen-Assistant/releases/download/v0.2.0/Study-Desk-0.2.0-Setup-x64.exe",
      label: "Download for Windows",
    },
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
    title: "Gaylingua",
    image: "projects/gaylingua/01-translate.webp",
    imageAlt: "Gaylingua’s Translate screen showing the daily Swardspeak word and the Filipino and English phrase input",
    icon: "projects/gaylingua/gaylingua-mark.svg",
    category: "Web",
    description:
      "An installable web app for learning Swardspeak, also called Filipino gay lingo. Translate Filipino and English phrases, explore a searchable dictionary, and practice with a quiz or matching game.",
    approach: "The translator matches curated phrases and substitutes supported words using a local dictionary. A service worker caches the app for offline use after the first visit, and Capacitor packages it for Android.",
    tech: ["HTML", "CSS", "JavaScript", "Service Worker", "Capacitor"],
    repository: { url: "https://github.com/jaesmade/Gaylingua" },
    download: {
      url: "https://github.com/jaesmade/Gaylingua/releases/download/translator/gaylingua.apk",
      label: "Download for Android (APK)",
    },
    details: [
      {
        heading: "Translate and explore",
        body: "Look up words and alternate spellings in a 104-entry Swardspeak dictionary. Save favorites in the browser and use read-aloud on devices that support speech synthesis.",
      },
      {
        heading: "Practice vocabulary",
        body: "Earn XP by answering a five-question quiz or completing a four-pair matching game. The translator, dictionary, and games work offline after the app has cached its files.",
      },
    ],
  },
  {
    title: "Facebook Media Scraper",
    image: "projects/facebook-media-scraper/01-desktop.webp",
    imageAlt: "Facebook Media Downloader desktop app showing Facebook link input, date and media filters, download results, and folder selection",
    category: "Automation",
    description:
      "A Python desktop tool used by the tourism office to download reference videos from other Facebook pages, with date filters, media selection, and downloads organized by month.",
    contribution: "Used by the tourism office to download reference videos from other Facebook pages.",
    approach: "Tkinter provides the desktop interface, Playwright scans Facebook for accessible media, and yt-dlp handles video downloads. Scanning and downloading run on background threads to keep the interface responsive.",
    tech: ["Python", "Tkinter", "Playwright", "yt-dlp"],
    repository: { url: "https://github.com/jaesmade/facebook-media-scraper" },
    // Details & links content follows the local facebook_scraper/README.md.
    details: [
      {
        heading: "About the project",
        body: "A Python media scraper with a Windows desktop interface and a command-line script. It uses Playwright Chromium and yt-dlp to download photos and videos visible on a Facebook page. The Tkinter app adds optional sign-in, scanning, filtering, and download selection. Use a page you have permission to scrape.",
      },
      {
        heading: "Desktop workflow",
        ordered: true,
        items: [
          "Optionally sign in, paste a Facebook page, post, or media link, and click Scan media. Enable Scan older posts to check the page's history.",
          "Choose From date and Through date, or enter dates as YYYY-MM-DD. Set both to the same day for an exact match. Filter by videos or photos; Include undated in range adds items without a readable date when a date filter is active.",
          "Browse to an existing download folder, then choose Download matches or select rows and choose Download selected. Files are grouped into yyyy-mm folders, with undated for items without a post date.",
        ],
      },
      {
        heading: "Scanning and exports",
        body: "For a page URL, the scraper scans the main feed, Photos, public photo albums, Videos, and Reels, scrolling until Facebook stops loading more media and combining the results. A tab URL scans only that section.",
        items: [
          "media.csv and media.json record media type, Facebook permalink, direct media URL, image alt text, and post date when available. Downloaded entries include a file path relative to the output folder.",
          "The command-line default is output/ beside scrape.py, with downloads in output/media/. Downloads are grouped by post month.",
          "If a direct download fails, the scraper opens the photo's permalink or passes the video's permalink to yt-dlp. FFmpeg and FFprobe on PATH allow separate video and audio streams to be combined; otherwise, yt-dlp uses a format containing both.",
        ],
      },
      {
        heading: "Sign-in and history",
        body: "Facebook can limit the history visible to a logged-out browser. Signing in can provide more access to older posts, but does not guarantee every file is available. The scraper can only download media Facebook makes available to that session; inaccessible months can still have gaps, and direct CDN links can expire.",
        items: [
          "History scans use the Page Transparency creation date and Facebook timeline filters to check each month through the current month. Older pages can take time to scan.",
          "history.json records the dates and links found, stopping points, and scan errors. Check download_status in the media exports for entries that could not be saved.",
          "The Windows app saves its optional session under the current user's Local AppData folder. Source runs save .facebook-session.json beside the script. Keep the session private and sign in again if it expires.",
        ],
      },
      {
        heading: "Run from source",
        collapsible: true,
        body: "From the repository folder in PowerShell, create the environment, install the dependencies and Chromium browser, then launch the desktop interface:",
        code: "python -m venv .venv\n.\\.venv\\Scripts\\python.exe -m pip install -r requirements.txt\n.\\.venv\\Scripts\\python.exe -m playwright install chromium\n.\\.venv\\Scripts\\python.exe -B app.py",
      },
      {
        heading: "Standalone Windows app",
        collapsible: true,
        body: "Run the build script from PowerShell:",
        code: ".\\build-windows.ps1",
        after: "The build creates release\\FacebookMediaDownloader\\FacebookMediaDownloader.exe. Open the executable or launch-app.cmd. Copy the entire FacebookMediaDownloader folder when moving it to another PC: it includes Python, dependencies, and the matching Chromium browser, so no separate Python installation is needed. The release folder is around 900 MB.",
      },
      {
        heading: "Command-line usage",
        collapsible: true,
        body: "Replace PAGE_NAME with a page's actual name. Download a page's available media, or target its videos tab with a limit of 20 scrolls:",
        code: ".\\.venv\\Scripts\\python.exe scrape.py \"https://www.facebook.com/PAGE_NAME\" --download\n.\\.venv\\Scripts\\python.exe scrape.py \"https://www.facebook.com/PAGE_NAME/videos\" --output videos --scrolls 20 --download",
        after: "Use --headed to see the browser or increase --wait-ms for slower loads. For older posts, save a session with scrape.py --login, then add --history --session --download to the page scan.",
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
    icon: "projects/siniloan/siniloan-seal-icon.webp",
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

// Homepage editorial choices reference real projects in the portfolio above.
export const home = {
  featuredProjects: "all" as "all" | string[],
  rotationIntervalMs: 6000,
};
