import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FileText, X } from "lucide-react";

export default function ProjectDevNotes({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const triggerElement = triggerRef.current;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = document.querySelectorAll(
        ".dev-notes-panel button, .dev-notes-panel a, .dev-notes-panel [tabindex]:not([tabindex='-1'])",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (document.contains(triggerElement)) triggerElement.focus();
    };
  }, [isOpen]);

  const slideTransition = {
    duration: shouldReduceMotion ? 0.01 : 0.35,
    ease: "easeOut",
  };

  return (
    <>
      <div className="project-dev-notes">
        <button
          ref={triggerRef}
          className="dev-notes-trigger"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
        >
          <FileText size={18} aria-hidden="true" />
          <span>Click here to see my notes on this project</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="dev-notes-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <motion.aside
              className="dev-notes-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dev-notes-title"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={slideTransition}
            >
              <header className="dev-notes-panel__top">
                <div>
                  <span>FIELD NOTES / {String(project.id).padStart(2, "0")}</span>
                  <span>{project.category === "tech" ? "BUILD JOURNAL" : "STUDIO JOURNAL"}</span>
                </div>
                <button
                  ref={closeRef}
                  className="dev-notes-close"
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close project notes"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </header>

              <div className="dev-notes-paper">
                <div className="dev-notes-paper__title">
                  <p>PROJECT NOTEBOOK</p>
                  <h2 id="dev-notes-title">{project.title}</h2>
                  <span>Ideas, decisions &amp; things learned</span>
                </div>
                <div className="dev-notes-paper__body">
                  {(project.devNotes || []).map((note, index) => (
                    <section className="dev-notes-entry" key={`${note.heading}-${index}`}>
                      <span className="dev-notes-entry__number">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{note.heading}</h3>
                        <p>{note.body}</p>
                      </div>
                    </section>
                  ))}
                  {!project.devNotes?.length ? (
                    <p className="dev-notes-empty">Project notes are being written. Check back soon.</p>
                  ) : null}
                </div>
                <footer className="dev-notes-paper__footer">
                  <span>MADE WITH CURIOSITY</span>
                  <span>{String(project.id).padStart(2, "0")} / 06</span>
                </footer>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
