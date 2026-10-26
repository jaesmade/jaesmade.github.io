import { useEffect, useRef, useState } from "react";
import { profile, projects, type Project } from "./data/portfolio";
import ToolboxIcon from "./components/ToolboxIcon";
import "./index.css";
const pages = ["home", "about", "portfolio", "contact"] as const;
type Page = (typeof pages)[number];
const getPage = (): Page => {
  const hash = location.hash.slice(1);
  if (hash === "resume") return "about";
  return pages.includes(hash as Page) ? (hash as Page) : "home";
};
function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    home: "m3 10 9-7 9 7v11h-6v-7H9v7H3Z",
    about: "M20 21v-2a7 7 0 0 0-14 0v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    portfolio: "M3 7h18v14H3ZM8 7V3h8v4M3 12h18M10 12v3h4v-3",
    resume: "M14 2H5v20h14V7ZM14 2v6h5M8 12h8M8 16h8",
    certificate: "M4 3h16v14H4ZM8 7h8M8 11h3M14 15l-2 7 4-2 4 2-2-7M19 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    contact: "M3 5h18v14H3ZM3 5l9 8 9-8",
    close: "M5 5l14 14M19 5 5 19",
    sun: "M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
    moon: "M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z",
    arrow: "M5 19 19 5M5 5h14v14",
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
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
function Divider() {
  return <div className="divider" aria-hidden="true" />;
}
function ProjectImage({ project, loading = "lazy" }: { project: Project; loading?: "lazy" | "eager" }) {
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
function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

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
      aria-describedby="project-dialog-description"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      {project && <div className="project-dialog-layout">
        <header className="project-dialog-header">
          <button
            className="project-dialog-close"
            type="button"
            aria-label={`Close ${project.title} details`}
            onClick={() => dialogRef.current?.close()}
          >
            <Icon name="close" />
          </button>
          <span className="project-dialog-category">{project.category}</span>
          <h2 id="project-dialog-title">{project.title}</h2>
        </header>
        <div className="project-dialog-media">
          <ProjectImage project={project} loading="eager" />
        </div>
        <div className="project-dialog-content">
          <section aria-labelledby="project-description-heading">
            <h3 id="project-description-heading">Description</h3>
            <p id="project-dialog-description">{project.description}</p>
          </section>
          <section aria-labelledby="project-tech-heading">
            <h3 id="project-tech-heading">Tech stack</h3>
            <ul className="project-tech-list">
              {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </section>
          <section aria-labelledby="project-guide-heading">
            <h3 id="project-guide-heading">Guide</h3>
            <ol className="project-guide-list">
              {project.guide.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>
          {project.repository && (
            <a className="primary-button project-repository" href={project.repository.url} target="_blank" rel="noreferrer">
              View on GitHub <Icon name="arrow" />
            </a>
          )}
        </div>
      </div>}
    </dialog>
  );
}
export default function App() {
  const [page, setPage] = useState<Page>(getPage);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [theme, setTheme] = useState(() => {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  });
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
      localStorage.setItem("cv-theme", theme);
    } catch {
      /* Optional storage. */
    }
  }, [theme]);
  useEffect(() => {
    document.title = `${profile.name} — ${page === "home" ? "Developer portfolio" : page}`;
  }, [page]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home">
          {profile.handle}
        </a>
        <span className="header-note">A little corner of the internet.</span>
        <a className="availability" href="#contact">
          <i />
          {profile.status}
        </a>
      </header>
      <main id="main" tabIndex={-1}>
        {page === "home" ? (
          <section className="home-layout">
            <div className="intro">
              <div className="eyebrow">
                HELLO, WORLD!
              </div>
              <h1>
                Hey, I'm
                <br />
                <span className="name-highlight">{profile.firstName}.</span>
                <span className="wave" aria-hidden="true">
                  ✌
                </span>
              </h1>
              <p className="intro-copy">{profile.intro}</p>
              <p className="tagline-note">
                <span>{profile.tagline}</span>
              </p>
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
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
            <nav className="card-nav" aria-label="Explore portfolio">
                {[
                  {
                    id: "about",
                    title: "About me",
                    text: "The person behind the pixels.",
                    color: "tone-warm",
                  },
                  {
                    id: "portfolio",
                    title: "My projects",
                    text: "Ideas turned into things that work.",
                    color: "tone-cool",
                  },
                  {
                    id: "contact",
                    title: "Let’s connect",
                    text: "Good things start with a hello.",
                    color: "tone-soft",
                  },
                ].map((item) => (
                  <a
                    className={`nav-card ${item.color}`}
                    href={`#${item.id}`}
                    key={item.id}
                  >
                    <span className="card-icon">
                      <Icon name={item.id} />
                    </span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.text}</small>
                    </span>
                    <Icon name="arrow" />
                  </a>
                ))}
            </nav>
          </section>
        ) : (
          <section className="inner-page" key={page}>
            <a className="back-link" href="#home">
              ← Back to home
            </a>
            <h1>
              {
                {
                  about: "Behind the pixels.",
                  portfolio: "Things I’ve built.",
                  contact: "Let’s make something.",
                  home: "",
                }[page]
              }
            </h1>
            <Divider />
            {page === "about" && (
              <>
                <div className="about-grid">
                  <div>
                    <h2>{profile.name}</h2>
                    {profile.about.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    <div className="about-actions">
                      <a
                        className="primary-button"
                        href={`${import.meta.env.BASE_URL}Josh-Andrew-Esmade-Resume.pdf`}
                        download="Josh-Andrew-Esmade-Resume.pdf"
                      >
                        <Icon name="resume" />
                        Download résumé (PDF)
                      </a>
                      <a className="text-link" href="#portfolio">
                        Explore my projects ↗
                      </a>
                    </div>
                  </div>
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
                <h2 className="section-heading">My toolbox</h2>
                <div className="skills">
                  {profile.skills.map((s, i) => (
                    <span
                      className={["tone-warm", "tone-cool", "tone-soft"][i % 3]}
                      key={s}
                    >
                      <ToolboxIcon name={s} />
                      {s}
                    </span>
                  ))}
                </div>
                <section className="certificate-section" aria-labelledby="certificates-heading">
                  <h2 id="certificates-heading">Certificates</h2>
                  <p className="certificate-intro">Courses, training, and professional credentials.</p>
                  {profile.certificates.length > 0 ? (
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
                                  View certificate <Icon name="arrow" />
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
                                  Verify credential <Icon name="arrow" />
                                </a>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="certificates-empty">
                      <span className="certificate-icon"><Icon name="certificate" /></span>
                      <p>Certificates will appear here as I add them.</p>
                    </div>
                  )}
                </section>
              </>
            )}
            {page === "portfolio" && (
              <>
                <p>A selection of applications, experiments, and systems.</p>
                <div className="filters" aria-label="Filter projects">
                  {["All", "Web", "AI / Data", "Systems"].map((f) => (
                    <button
                      aria-pressed={filter === f}
                      className={filter === f ? "selected" : ""}
                      onClick={() => {
                        setFilter(f);
                      }}
                      key={f}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <div className="project-grid">
                  {projects
                    .filter((p) => filter === "All" || p.category === filter)
                    .map((p) => (
                      <article className="project-card" key={p.title}>
                        <button
                          className="project-art"
                          type="button"
                          aria-haspopup="dialog"
                          aria-label={`View details for ${p.title}`}
                          onClick={(event) => {
                            projectTriggerRef.current = event.currentTarget;
                            setSelectedProject(p);
                          }}
                        >
                          <ProjectImage project={p} />
                          {(p.repository?.stars || p.repository?.forks) && (
                            <span className="repo-stats">
                              {p.repository.stars && (
                                <span title="GitHub stars"><Icon name="star" />{p.repository.stars}</span>
                              )}
                              {p.repository.forks && (
                                <span title="GitHub forks"><Icon name="fork" />{p.repository.forks}</span>
                              )}
                            </span>
                          )}
                          <span className="project-overlay">
                            <span className="project-overlay-inner">
                              <small className="project-category">{p.category}</small>
                              <strong>{p.title}</strong>
                              <span className="project-description">{p.description}</span>
                              <span className="project-overlay-action">View details ↗</span>
                            </span>
                          </span>
                        </button>
                      </article>
                    ))}
                </div>
              </>
            )}
            {page === "contact" && (
              <div className="contact-panel">
                <p>
                  Have a project, an opportunity, or just something interesting
                  to share? I’d love to hear from you.
                </p>
                <a className="primary-button" href={`mailto:${profile.email}`}>
                  <Icon name="contact" />
                  {profile.email} ↗
                </a>
                <div className="contact-socials">
                  {profile.socials.map((s) => (
                    <a
                      href={s.url}
                      key={s.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </main>
      <ProjectDialog
        project={selectedProject}
        onClose={() => {
          setSelectedProject(null);
          requestAnimationFrame(() => {
            if (projectTriggerRef.current?.isConnected) projectTriggerRef.current.focus();
          });
        }}
      />
      <footer>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          Made with curiosity. Built for
          the web.
        </span>
      </footer>
      <nav className="dock" aria-label="Main navigation">
        {pages.map((p) => (
          <a
            key={p}
            href={`#${p}`}
            className={page === p ? "active" : ""}
            aria-label={p.charAt(0).toUpperCase() + p.slice(1)}
            aria-current={page === p ? "page" : undefined}
            title={p.charAt(0).toUpperCase() + p.slice(1)}
          >
            <Icon name={p} />
          </a>
        ))}
        <span className="dock-separator" />
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          title="Toggle theme"
        >
          <Icon name={theme === "light" ? "moon" : "sun"} />
        </button>
      </nav>
    </>
  );
}
