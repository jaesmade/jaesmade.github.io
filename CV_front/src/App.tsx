import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";
import { profile, projects, type Project } from "./data/portfolio";
import ToolboxIcon from "./components/ToolboxIcon";
import ScreenshotViewer from "./components/ScreenshotViewer";
import "./index.css";
const pages = ["home", "about", "portfolio", "contact"] as const;
type Page = (typeof pages)[number];
const pageLabels: Record<Page, string> = {
  home: "Home",
  about: "About",
  portfolio: "Projects",
  contact: "Contact",
};
const projectCategories = ["All", "Web", "AI / Data", "Systems"].filter(
  (category) => category === "All" || projects.some((project) => project.category === category),
);
const projectIcons: Record<string, string> = {
  SkillDis: "people",
  "Municipal Siniloan Website": "web",
};
const getPage = (): Page => {
  const hash = location.hash.slice(1);
  if (hash === "resume") return "about";
  return pages.includes(hash as Page) ? (hash as Page) : "home";
};
function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    home: "m3 10 9-7 9 7v11h-6v-7H9v7H3Z",
    back: "M20 12H4m7-7-7 7 7 7",
    previous: "m15 5-7 7 7 7",
    next: "m9 5 7 7-7 7",
    about: "M20 21v-2a7 7 0 0 0-14 0v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    location: "M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    status: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM8 12l3 3 5-6",
    education: "m2 8 10-5 10 5-10 5ZM6 10v7c4 3 8 3 12 0v-7M22 8v9",
    portfolio: "M3 7h18v14H3ZM8 7V3h8v4M3 12h18M10 12v3h4v-3",
    folder: "M3 5h5V4h4v2h9v14H3ZM3 9h18",
    resume: "M14 2H5v20h14V7ZM14 2v6h5M8 12h8M8 16h8",
    certificate: "M4 3h16v14H4ZM8 7h8M8 11h3M14 15l-2 7 4-2 4 2-2-7M19 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    contact: "M3 5h18v14H3ZM3 5l9 8 9-8",
    close: "M5 5l14 14M19 5 5 19",
    copy: "M9 9h12v12H9ZM5 15H3V3h12v2",
    sun: "M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
    moon: "M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z",
    people: "M14 21v-2a4 4 0 0 0-8 0v2M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM18 5a3 3 0 0 1 0 6M18 15a4 4 0 0 1 4 4v2",
    chart: "M3 21h18M5 17v-5h3v5M11 17V8h3v9M17 17V3h3v14",
    leaf: "M20 4C10 3 3 8 4 15c1 6 10 7 14 0 2-4 2-8 2-11ZM5 20 16 9",
    web: "M3 4h18v16H3ZM3 9h18M7 6.5h.01M11 6.5h.01",
    cart: "M2 3h3l3 13h11l3-9H6M9 20h.01M18 20h.01",
    star: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3L10 14.2 5 9.3l6.9-1Z",
    fork: "M6 3v4a3 3 0 0 0 3 3h7a3 3 0 0 1 3 3v4M6 17v4M3 4a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM16 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM3 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z",
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    GitHub: "M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 6.097c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z",
    Facebook: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.098 24 12.073Z",
    LinkedIn: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  };
  return (
    <svg className="social-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}
function Divider() {
  return <div className="divider" aria-hidden="true" />;
}
function ProjectIcon({ project }: { project: Project }) {
  return project.icon
    ? <img className="project-brand-icon" src={`${import.meta.env.BASE_URL}${project.icon}`} width="32" height="32" alt="" aria-hidden="true" />
    : <Icon name={projectIcons[project.title] || "portfolio"} />;
}
function ProjectImage({ project, loading = "lazy" }: { project: Pick<Project, "title" | "image" | "imageAlt">; loading?: "lazy" | "eager" }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}${project.image}`}
      alt={project.imageAlt}
      width="1280"
      height="720"
      loading={loading}
      decoding="async"
      onError={(event) => {
        const fallback = `${import.meta.env.BASE_URL}projects/placeholder.svg`;
        if (event.currentTarget.getAttribute("src") !== fallback) {
          event.currentTarget.src = fallback;
          event.currentTarget.alt = `Image unavailable for ${project.title}`;
        }
      }}
    />
  );
}
function ProjectGallery({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const screenshots = project.screenshots;
  if (!screenshots?.length) {
    return <div className="project-gallery">
      <div className="project-dialog-media"><ProjectImage project={project} loading="eager" /></div>
      <ScreenshotViewer src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.imageAlt} title={project.title} />
    </div>;
  }
  const current = screenshots[activeIndex];
  const move = (step: number) => setActiveIndex((index) => (index + step + screenshots.length) % screenshots.length);
  return (
    <div
      className="project-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${project.title} screenshots`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        else if (event.key === "ArrowRight") move(1);
        else if (event.key === "Home") setActiveIndex(0);
        else if (event.key === "End") setActiveIndex(screenshots.length - 1);
        else return;
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <div
        className="project-dialog-media"
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
        }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const touch = event.changedTouches[0];
          const distance = touch.clientX - start.x;
          if (Math.abs(distance) > 50 && Math.abs(distance) > Math.abs(touch.clientY - start.y)) move(distance < 0 ? 1 : -1);
        }}
      >
        <ProjectImage key={current.src} project={{ title: project.title, image: current.src, imageAlt: current.alt }} loading="eager" />
      </div>
      {screenshots.length > 1 && <div className="project-gallery-controls">
        <button type="button" aria-label="Previous screenshot" onClick={() => move(-1)}><Icon name="previous" /></button>
        <div className="project-gallery-caption" aria-live="polite" aria-atomic="true">
          <span>{current.caption}</span>
          <span className="project-gallery-count">{activeIndex + 1} / {screenshots.length}</span>
        </div>
        <button type="button" aria-label="Next screenshot" onClick={() => move(1)}><Icon name="next" /></button>
      </div>}
      <ScreenshotViewer src={`${import.meta.env.BASE_URL}${current.src}`} alt={current.alt} title={`${project.title} — ${current.caption}`} />
    </div>
  );
}
function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "explore">("overview");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !project) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={(event) => {
        // Ignore a queued close event if the dialog has already reopened.
        if (!event.currentTarget.open) onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
          event.currentTarget.close();
        }
      }}
    >
      {project && <div className="project-dialog-layout">
        <header className="project-dialog-header">
          <div className="project-dialog-heading">
            {project.icon ? <ProjectIcon project={project} /> : <Icon name="folder" />}
            <div>
              <h2 id="project-dialog-title">{project.title}</h2>
              <span className="project-dialog-category">{project.category}</span>
            </div>
          </div>
          <button
            className="project-dialog-close"
            type="button"
            aria-label={`Close ${project.title} details`}
            onClick={() => dialogRef.current?.close()}
          >
            <Icon name="close" />
          </button>
        </header>
        <div className="project-dialog-tabs" role="tablist" aria-label="Project information">
          {(["overview", "explore"] as const).map((tab, index) => (
            <button
              key={tab}
              ref={(element) => { tabRefs.current[index] = element; }}
              id={`project-tab-${tab}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`project-panel-${tab}`}
              tabIndex={activeTab === tab ? 0 : -1}
              onClick={() => setActiveTab(tab)}
              onKeyDown={(event) => {
                let nextIndex: number;
                if (event.key === "ArrowRight" || event.key === "ArrowLeft") nextIndex = 1 - index;
                else if (event.key === "Home") nextIndex = 0;
                else if (event.key === "End") nextIndex = 1;
                else return;
                event.preventDefault();
                setActiveTab(nextIndex === 0 ? "overview" : "explore");
                tabRefs.current[nextIndex]?.focus();
              }}
            >
              {tab === "overview" ? "Overview" : "Details & links"}
            </button>
          ))}
        </div>
        <div className="project-dialog-body" key={activeTab}>
          <section
            className="project-tabpanel project-overview"
            id="project-panel-overview"
            role="tabpanel"
            aria-labelledby="project-tab-overview"
            tabIndex={0}
            hidden={activeTab !== "overview"}
          >
            <ProjectGallery project={project} />
            <div className="project-overview-copy">
              <h3>{project.contribution ? "My contribution" : "Overview"}</h3>
              <p>{project.contribution ?? project.description}</p>
              <button className="project-details-link" type="button" onClick={() => {
                setActiveTab("explore");
                tabRefs.current[1]?.focus();
              }}>
                Read the project details
              </button>
            </div>
            <div className="project-dialog-tech">
              <h3>Tech stack</h3>
              <ul className="project-tech-list">
                {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </section>
          <section
            className="project-tabpanel project-explore"
            id="project-panel-explore"
            role="tabpanel"
            aria-labelledby="project-tab-explore"
            tabIndex={0}
            hidden={activeTab !== "explore"}
          >
            {(project.repository || project.liveUrl) && (
              <div className="project-dialog-links" aria-label="Project links">
                {project.repository && (
                  <a className="primary-button" href={project.repository.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository (opens in a new tab)`}>
                    <SocialIcon name="GitHub" />
                    GitHub repository
                  </a>
                )}
                {project.liveUrl && (
                  <a className="project-website-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live website (opens in a new tab)`}>
                    <Icon name="web" />
                    Live website
                  </a>
                )}
              </div>
            )}
            <div className="project-explanation">
              {project.approach && <section>
                <h3>Technical approach</h3>
                <p>{project.approach}</p>
              </section>}
              {project.details.map((detail) => {
                const content = <>
                  {detail.body && <p>{detail.body}</p>}
                  {detail.items && (detail.ordered
                    ? <ol>{detail.items.map((item) => <li key={item}>{item}</li>)}</ol>
                    : <ul>{detail.items.map((item) => <li key={item}>{item}</li>)}</ul>)}
                  {detail.code && <pre><code>{detail.code}</code></pre>}
                  {detail.after && <p>{detail.after}</p>}
                </>;
                return detail.collapsible ? <details className="project-technical-notes" key={detail.heading}>
                  <summary>{detail.heading}</summary>
                  <div>{content}</div>
                </details> : <section key={detail.heading}>
                  <h3>{detail.heading}</h3>
                  {content}
                </section>
              })}
            </div>
          </section>
        </div>
        <footer className="project-dialog-footer">
          <button className="secondary-button" type="button" onClick={() => dialogRef.current?.close()}>Close</button>
        </footer>
      </div>}
    </dialog>
  );
}
function ProjectPreview({ project, onOpen }: {
  project: Project;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
}) {
  return (
    <section className="project-preview" id="project-preview" aria-labelledby="project-preview-title">
      <div className="project-preview-heading">
        <span className="project-preview-icon"><ProjectIcon project={project} /></span>
        <div>
          <h2 id="project-preview-title">{project.title}</h2>
          <p className="project-preview-category">{project.category}</p>
        </div>
      </div>
      <div className="project-preview-media">
        <ProjectImage key={project.image} project={project} loading="eager" />
      </div>
      <div className="project-preview-content">
        <p className="project-preview-description">{project.description}</p>
        {project.role && <p className="project-preview-role"><strong>My role:</strong> {project.role}</p>}
        <div className="project-preview-tech">
          <h3>Tech stack</h3>
          <ul className="project-tech-list">
            {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        {(project.repository?.stars || project.repository?.forks) && (
          <div className="project-preview-stats">
            {project.repository.stars && <span><Icon name="star" />{project.repository.stars} stars</span>}
            {project.repository.forks && <span><Icon name="fork" />{project.repository.forks} forks</span>}
          </div>
        )}
        <div className="project-preview-actions">
          {project.repository && (
            <a className="secondary-button" href={project.repository.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository (opens in a new tab)`}>
              <SocialIcon name="GitHub" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a className="secondary-button" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live website (opens in a new tab)`}>
              <Icon name="web" />
              Live website
            </a>
          )}
          <button
            className="primary-button project-details-action"
            type="button"
            aria-haspopup="dialog"
            aria-label={`View details for ${project.title}`}
            onClick={(event) => onOpen(project, event.currentTarget)}
          >
            <Icon name="folder" />
            View details
          </button>
        </div>
      </div>
    </section>
  );
}
export default function App() {
  const [page, setPage] = useState<Page>(getPage);
  const [activeHomeItem, setActiveHomeItem] = useState("about");
  const [filter, setFilter] = useState("All");
  const [activeProjectTitle, setActiveProjectTitle] = useState(projects[0]?.title ?? "");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const previousPageRef = useRef(page);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [theme, setTheme] = useState(() => {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });
  const visibleProjects = projects.filter((project) => filter === "All" || project.category === filter);
  const activeProject = visibleProjects.find((project) => project.title === activeProjectTitle) ?? visibleProjects[0];
  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    projectTriggerRef.current = trigger;
    setSelectedProject(project);
  };
  useEffect(() => {
    const update = () => {
      if (location.hash === "#main") return;
      setSelectedProject(null);
      setPage(getPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("cv-console-theme", theme);
    } catch {
      /* Optional storage. */
    }
  }, [theme]);
  useEffect(() => {
    document.title = `${profile.name} — ${page === "home" ? "Developer portfolio" : page}`;
    if (previousPageRef.current !== page) mainRef.current?.focus({ preventScroll: true });
    previousPageRef.current = page;
  }, [page]);
  useEffect(() => {
    if (copyState === "idle") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 5000);
    return () => window.clearTimeout(timeout);
  }, [copyState]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className={`console-shell${page === "home" ? " console-shell-home" : ""}`}>
        <span className="shell-screw screw-tl" aria-hidden="true" />
        <span className="shell-screw screw-tr" aria-hidden="true" />
        <span className="shell-screw screw-bl" aria-hidden="true" />
        <span className="shell-screw screw-br" aria-hidden="true" />
        <header className="console-topbar">
          <a className="availability" href="#contact">
            <i aria-hidden="true" />
            {profile.status}
          </a>
        </header>
        <div className="console-screen">
          <div className="site-header">
            <a className="wordmark" href="#home">
              {profile.handle}
            </a>
          </div>
          <main ref={mainRef} id="main" aria-label={pageLabels[page]} className={page === "home" ? "home-main" : undefined} tabIndex={-1}>
            {page === "home" ? (
              <section className="home-layout">
                <div className="intro">
                  <h1>
                    Hey, I'm
                    <br />
                    <span className="name-highlight">{profile.firstName}.</span>
                  </h1>
                  <p className="intro-copy">{profile.intro}</p>
                  <Divider />
                  <div className="social-row">
                    <span>FIND ME ELSEWHERE</span>
                    {profile.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SocialIcon name={s.label} />
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
                <nav className="card-nav" aria-label="Explore portfolio">
                    {[
                      {
                        id: "about",
                        title: "About me",
                        detail: "Profile, skills & résumé",
                        color: "tone-warm",
                      },
                      {
                        id: "portfolio",
                        title: "My projects",
                        detail: "Selected work & source code",
                        color: "tone-cool",
                      },
                      {
                        id: "contact",
                        title: "Contact",
                        detail: "Projects & opportunities",
                        color: "tone-soft",
                      },
                    ].map((item) => (
                      <a
                        className={`nav-card ${item.color}${activeHomeItem === item.id ? " is-selected" : ""}`}
                        href={`#${item.id}`}
                        key={item.id}
                        onPointerEnter={() => setActiveHomeItem(item.id)}
                        onFocus={() => setActiveHomeItem(item.id)}
                      >
                        <span className="card-icon">
                          <Icon name={item.id} />
                        </span>
                        <span>
                          <strong>{item.title}</strong>
                          <small>{item.detail}</small>
                        </span>
                      </a>
                    ))}
                </nav>
              </section>
            ) : (
              <section className={`inner-page${page === "portfolio" ? " projects-page" : ""}`} key={page}>
                <a className="back-link" href="#home" aria-label="Back to home" title="Back to home">
                  <Icon name="back" />
                </a>
                <div className={page === "portfolio" ? "projects-heading" : undefined}>
                  <h1>
                    {
                      {
                        about: "About me",
                        portfolio: "Projects",
                        contact: "Contact",
                        home: "",
                      }[page]
                    }
                  </h1>
                  {page === "portfolio" && <p>A selection of applications, experiments, and systems.</p>}
                </div>
                <Divider />
                {page === "about" && (
                  <>
                    <div className="about-grid">
                      <div className="about-profile">
                        <div className="about-portrait">
                          <img
                            className="about-photo"
                            src={profile.photo}
                            alt={`Portrait of ${profile.name}`}
                            width="1112"
                            height="1414"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <ul className="profile-facts" aria-label="Profile details">
                          <li><Icon name="about" /><span>{profile.role}</span></li>
                          <li><Icon name="location" /><span>{profile.location}</span></li>
                          <li><Icon name="status" /><span>{profile.status}</span></li>
                        </ul>
                        <a
                          className="nav-card resume-download"
                          href={`${import.meta.env.BASE_URL}Josh-Andrew-Esmade-Resume.pdf`}
                          download="Josh-Andrew-Esmade-Resume.pdf"
                        >
                          <span className="card-icon"><Icon name="resume" /></span>
                          <span className="resume-download-copy">
                            <strong>Download résumé</strong>
                            <small>(PDF)</small>
                          </span>
                        </a>
                      </div>
                      <div className="about-story">
                        <h2>{profile.name}</h2>
                        <p className="about-intro">{profile.intro}</p>
                        {profile.about.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                        <section className="about-education" aria-label="Education">
                          <Icon name="education" />
                          <div>
                            {profile.education.map((education) => (
                              <div key={education.degree}>
                                <h3>{education.degree}</h3>
                                <p>{education.school}<br />{education.detail}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                        <div className="about-actions">
                          <a className="primary-button" href="#portfolio">
                            Explore my projects
                            <Icon name="portfolio" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <section className="about-toolbox" aria-labelledby="toolbox-heading">
                      <h2 id="toolbox-heading">My toolbox</h2>
                      <div className="toolbox-groups">
                        {profile.skillGroups.map((group) => (
                          <div className="toolbox-group" key={group.title}>
                            <h3>{group.title}</h3>
                            <ul className="toolbox-skills">
                              {group.skills.map((skill) => (
                                <li key={skill}><ToolboxIcon name={skill} />{skill}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>
                    {profile.certificates.length > 0 && (
                    <section className="certificate-section" aria-labelledby="certificates-heading">
                      <h2 id="certificates-heading">Certificates</h2>
                      <p className="certificate-intro">Certificates of participation from technical webinars.</p>
                        <ul className="certificate-list">
                          {profile.certificates.map((certificate) => (
                            <li className="certificate-item" key={certificate.id}>
                              <span className="certificate-icon"><Icon name="certificate" /></span>
                              <div className="certificate-details">
                                <h3>{certificate.title}</h3>
                                <div className="certificate-meta">
                                  <span>{certificate.issuer}</span>
                                  {certificate.issued && <span>{certificate.issued}</span>}
                                </div>
                              </div>
                              {(certificate.file || certificate.credentialUrl) && (
                                <div className="certificate-actions">
                                  {certificate.file && (
                                    <a
                                      className="certificate-link"
                                      href={`${import.meta.env.BASE_URL}${certificate.file}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      aria-label={`View certificate: ${certificate.title} (opens in a new tab)`}
                                    >
                                      View certificate
                                    </a>
                                  )}
                                  {certificate.credentialUrl && (
                                    <a
                                      className="certificate-link"
                                      href={certificate.credentialUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      aria-label={`Verify credential: ${certificate.title} (opens in a new tab)`}
                                    >
                                      Verify credential
                                    </a>
                                  )}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                    </section>
                    )}
                  </>
                )}
                {page === "portfolio" && (
                  <div className="project-select">
                    <div className="filters" role="group" aria-label="Filter projects">
                      {projectCategories.map((category) => (
                        <button
                          type="button"
                          aria-pressed={filter === category}
                          className={filter === category ? "selected" : ""}
                          onClick={() => {
                            setFilter(category);
                            const matches = projects.filter((project) => category === "All" || project.category === category);
                            if (!matches.some((project) => project.title === activeProjectTitle)) {
                              setActiveProjectTitle(matches[0]?.title ?? "");
                            }
                          }}
                          key={category}
                        >
                          {category}
                          <span className="filter-count">{category === "All" ? projects.length : projects.filter((project) => project.category === category).length}</span>
                        </button>
                      ))}
                    </div>
                    <div className="project-browser" role="group" aria-label="Choose a project" style={{ "--project-count": Math.max(visibleProjects.length, 1), "--project-span": visibleProjects.length + 1 } as CSSProperties}>
                      {visibleProjects.map((project, index) => (
                        <Fragment key={project.title}>
                          <button
                            className={`project-choice${activeProject === project ? " is-selected" : ""}`}
                            type="button"
                            aria-pressed={activeProject === project}
                            aria-controls="project-preview"
                            style={{ "--project-row": index + 1 } as CSSProperties}
                            onClick={() => setActiveProjectTitle(project.title)}
                          >
                            <ProjectIcon project={project} />
                            <span className="project-choice-title">{project.title}</span>
                            <span className="project-choice-category">{project.category}</span>
                          </button>
                          {activeProject === project && <ProjectPreview project={project} onOpen={openProject} />}
                        </Fragment>
                      ))}
                    </div>
                    {!activeProject && <p className="project-empty" role="status">No projects in this category.</p>}
                  </div>
                )}
                {page === "contact" && (
                  <div className="contact-panel">
                    <p>
                      Email me about projects or job opportunities.
                    </p>
                    <div className="contact-actions">
                      <a className="primary-button" href={`mailto:${profile.email}`}>
                        <Icon name="contact" />
                        {profile.email}
                      </a>
                      <button className="copy-email" type="button" onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(profile.email);
                          setCopyState("copied");
                        } catch {
                          setCopyState("failed");
                        }
                      }}><Icon name="copy" />Copy email</button>
                    </div>
                    <p className="contact-copy-status" role="status">{copyState === "copied" ? "Email address copied." : copyState === "failed" ? "Select and copy the email address above." : ""}</p>
                    <div className="contact-socials">
                      {profile.socials.map((s) => (
                        <a
                          href={s.url}
                          key={s.label}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <SocialIcon name={s.label} />
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}
          </main>
          <footer className="console-footer">
            <span className="console-copyright">
              © {new Date().getFullYear()} {profile.name}
            </span>
            <nav className="dock" aria-label="Main navigation">
              {pages.map((p) => (
                <a
                  key={p}
                  href={`#${p}`}
                  className={page === p ? "active" : ""}
                  aria-label={pageLabels[p]}
                  aria-current={page === p ? "page" : undefined}
                  title={pageLabels[p]}
                >
                  <Icon name={p} />
                  <span className="dock-label">{pageLabels[p]}</span>
                </a>
              ))}
              <span className="dock-separator" />
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
                type="button"
              >
                <Icon name={theme === "light" ? "moon" : "sun"} />
                <span className="dock-label">{theme === "light" ? "Dark" : "Light"}</span>
              </button>
            </nav>
          </footer>
        </div>
      </div>
      <ProjectDialog
        key={selectedProject?.title ?? "closed"}
        project={selectedProject}
        onClose={() => {
          setSelectedProject(null);
          requestAnimationFrame(() => {
            if (projectTriggerRef.current?.isConnected) projectTriggerRef.current.focus();
          });
        }}
      />
    </>
  );
}
