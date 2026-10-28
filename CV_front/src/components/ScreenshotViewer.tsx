import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./ScreenshotViewer.css";

type ScreenshotViewerProps = {
  src: string;
  alt: string;
  title: string;
};

function ViewerIcon({ close = false }: { close?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d={close ? "M5 5l14 14M19 5 5 19" : "M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6M3 3l6 6M21 3l-6 6M3 21l6-6M21 21l-6-6"} />
    </svg>
  );
}

export default function ScreenshotViewer({ src, alt, title }: ScreenshotViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [actualSize, setActualSize] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const helpId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    // The enclosing project dialog already owns the scroll lock when nested.
    const previousOverflow = document.body.style.overflow;
    const ownsScrollLock = previousOverflow !== "hidden";
    if (ownsScrollLock) document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      if (ownsScrollLock) document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const setSize = (nextActualSize: boolean) => {
    setActualSize(nextActualSize);
    scrollRef.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="screenshot-enlarge"
        aria-haspopup="dialog"
        aria-label={`Enlarge screenshot: ${title}`}
        onClick={() => {
          setActualSize(false);
          setFailed(false);
          setAttempt(0);
          setIsOpen(true);
        }}
      >
        <ViewerIcon />
        Enlarge screenshot
      </button>
      {isOpen && createPortal(
        <dialog
          ref={dialogRef}
          className="screenshot-viewer"
          aria-labelledby={titleId}
          aria-describedby={helpId}
          onKeyDown={(event) => event.stopPropagation()}
          onCancel={(event) => event.stopPropagation()}
          onClose={(event) => {
            event.stopPropagation();
            if (event.currentTarget.open) return;
            setIsOpen(false);
            const trigger = triggerRef.current;
            if (trigger?.isConnected && trigger.getClientRects().length) trigger.focus({ preventScroll: true });
          }}
          onClick={(event) => {
            event.stopPropagation();
            if (event.target !== event.currentTarget) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
              event.currentTarget.close();
            }
          }}
        >
          <header className="screenshot-viewer-header">
            <h2 id={titleId}>{title}</h2>
            <button className="screenshot-viewer-close" type="button" aria-label="Close screenshot" onClick={() => dialogRef.current?.close()} autoFocus>
              <ViewerIcon close />
            </button>
          </header>
          <div className="screenshot-viewer-toolbar">
            <div className="screenshot-viewer-sizes" role="group" aria-label="Screenshot size">
              <button type="button" aria-pressed={!actualSize} disabled={failed} onClick={() => setSize(false)}>Fit width</button>
              <button type="button" aria-pressed={actualSize} disabled={failed} onClick={() => setSize(true)}>Actual size</button>
            </div>
            <p id={helpId}>{actualSize ? "Scroll to explore the full-resolution image." : "Scroll down to see the full screenshot."}</p>
          </div>
          <div
            ref={scrollRef}
            className={`screenshot-viewer-canvas${actualSize ? " is-actual-size" : ""}`}
            role="region"
            aria-label="Enlarged screenshot"
            tabIndex={0}
          >
            {failed ? (
              <div className="screenshot-viewer-error" role="status">
                <p>This screenshot couldn’t be loaded.</p>
                <button type="button" onClick={() => { setFailed(false); setAttempt((value) => value + 1); }}>Retry screenshot</button>
              </div>
            ) : (
              <img key={`${src}-${attempt}`} src={src} alt={alt} decoding="async" onError={() => setFailed(true)} />
            )}
          </div>
        </dialog>,
        document.body,
      )}
    </>
  );
}
