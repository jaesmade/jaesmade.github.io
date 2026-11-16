import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { Project } from "../data/portfolio";
import "./FeaturedProjects.css";

type FeaturedProjectsProps = {
  projects: Project[];
  intervalMs?: number;
  suspended?: boolean;
  renderImage: (project: Project) => ReactNode;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
};

export default function FeaturedProjects({
  projects,
  intervalMs = 6000,
  suspended = false,
  renderImage,
  onOpen,
}: FeaturedProjectsProps) {
  const id = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(() => !document.hidden);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");
  const count = projects.length;
  const visibleIndex = count ? activeIndex % count : 0;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => {
      // A later preference change also stops rotation; Resume remains an explicit choice.
      if (preference.matches) setPaused(true);
    };
    preference.addEventListener("change", handleMotionChange);
    return () => preference.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => setDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(section);
    return () => observer.disconnect();
  }, [count]);

  useEffect(() => {
    if (count < 2 || paused || hovered || focused || suspended || !documentVisible || !inView) return;
    const timeout = window.setTimeout(() => {
      setAnnouncement("");
      setActiveIndex((index) => (index + 1) % count);
    }, intervalMs);
    return () => window.clearTimeout(timeout);
  }, [activeIndex, count, intervalMs, paused, hovered, focused, suspended, documentVisible, inView]);

  if (!count) return null;

  return (
    <section
      ref={sectionRef}
      className="home-feature home-feature-rotator"
      aria-labelledby={`${id}-heading`}
      aria-roledescription="carousel"
      onPointerEnter={(event) => { if (event.pointerType !== "touch") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="home-feature-header">
        <h2 id={`${id}-heading`}>Featured projects</h2>
        <span>{projects[visibleIndex].category}</span>
      </div>
      <div className="home-feature-stage" aria-live="off">
        {projects.map((project, index) => {
          const active = index === visibleIndex;
          const titleId = `${id}-title-${index}`;
          return (
            <div
              key={project.title}
              className={`home-feature-slide home-feature-copy${active ? " is-active" : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-labelledby={titleId}
              aria-hidden={!active}
              inert={!active}
            >
              <div className="home-feature-media">{renderImage(project)}</div>
              <h3 id={titleId}>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="home-feature-tech" aria-label={`${project.title} technologies`}>
                {project.tech.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <button
                className="text-link home-feature-action"
                type="button"
                aria-haspopup="dialog"
                aria-label={`View project: ${project.title}`}
                tabIndex={active ? 0 : -1}
                onClick={(event) => onOpen(project, event.currentTarget)}
              >
                View project
              </button>
            </div>
          );
        })}
      </div>
      <span className="home-feature-announcement" role="status" aria-live="polite" aria-atomic="true">{announcement}</span>
      {count > 1 && (
        <div className="home-feature-controls">
          <span className="home-feature-count" aria-label={`Project ${visibleIndex + 1} of ${count}`}>
            {String(visibleIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label={paused ? "Resume automatic project rotation" : "Pause automatic project rotation"}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? "Resume" : "Pause"}
          </button>
          <button type="button" onClick={() => {
            const nextIndex = (visibleIndex + 1) % count;
            setActiveIndex(nextIndex);
            setAnnouncement(`${projects[nextIndex].title}, project ${nextIndex + 1} of ${count}`);
          }}>
            Next project
          </button>
        </div>
      )}
    </section>
  );
}
