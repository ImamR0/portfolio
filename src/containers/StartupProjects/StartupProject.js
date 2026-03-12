import React, {useContext, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const projectEnhancements = {
  "PJO Management System": {
    category: "Workforce Operations",
    timeline: "PT Amman Mineral",
    headline:
      "Unified contractor administration into a structured operational workflow for registration, evaluation, and reporting.",
    techStack: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
    highlights: [
      "Centralized registration, evaluation, and exit processing",
      "Reduced fragmented coordination across departments",
      "Improved visibility for operational reporting and review"
    ],
    architecture: {
      title: "PJO Management System Architecture",
      description:
        "A PJO flow covering user input, workflow processing, SharePoint data storage, and reporting outputs across the contractor lifecycle.",
      image: process.env.PUBLIC_URL + "/pjo-architecture.png"
    }
  },
  "Vendor Registration Request (VRR)": {
    category: "Vendor Governance",
    timeline: "Enterprise Procurement Workflow",
    headline:
      "Structured vendor onboarding into a controlled flow for submission, verification, approval, and registration.",
    techStack: ["Power Apps", "Power Automate", "AI Builder", "SharePoint", "Power BI"],
    highlights: [
      "Standardized submission and approval checkpoints",
      "Added AI-assisted document analysis during verification",
      "Improved weekly monitoring of onboarding progress"
    ],
    architecture: {
      title: "Vendor Registration Request Architecture",
      description:
        "A VRR flow covering request submission, admin verification, AI document analysis, SharePoint storage, SAP registration, and weekly reporting.",
      image: process.env.PUBLIC_URL + "/vrr-architecture.png"
    }
  },
  "MPMH Calculator": {
    category: "Monthly Reporting",
    timeline: "Contract Support Operations",
    headline:
      "Standardized manpower and manhour reporting into a controlled monthly workflow with validation and archive tracking.",
    techStack: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Excel"],
    highlights: [
      "Centralized monthly submission and review flow",
      "Added validation before report finalization",
      "Improved traceability for reporting and archive history"
    ],
    architecture: {
      title: "MPMH Calculator Architecture",
      description:
        "An MPMH flow covering data input, validation, workflow processing, reporting output, and monthly archive tracking for contract support operations.",
      image: process.env.PUBLIC_URL + "/mpmh-architecture.png"
    }
  }
};

function ArchitectureModal({activeArchitecture, isDark, onClose}) {
  if (!activeArchitecture) {
    return null;
  }

  return createPortal(
    <div className="architecture-modal" onClick={onClose} role="presentation">
      <div
        className={isDark ? "architecture-panel dark-mode" : "architecture-panel"}
        onClick={event => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={activeArchitecture.title}
      >
        <div className="architecture-toolbar">
          <div className="architecture-copy">
            <p className="architecture-eyebrow">Architecture</p>
            <h3 className="architecture-title">{activeArchitecture.title}</h3>
          </div>
          <div className="architecture-actions">
            <a
              href={activeArchitecture.image}
              target="_blank"
              rel="noopener noreferrer"
              className="architecture-link"
            >
              Open image
            </a>
            <button
              type="button"
              className="architecture-close"
              onClick={onClose}
              aria-label="Close architecture viewer"
            >
              Close
            </button>
          </div>
        </div>

        <div className="architecture-image-stage">
          <img
            src={activeArchitecture.image}
            alt={activeArchitecture.title}
            className="architecture-image"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function StartupProject() {
  const [activeArchitecture, setActiveArchitecture] = useState(null);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    if (!activeArchitecture) {
      document.body.style.overflow = "";
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = event => {
      if (event.key === "Escape") {
        setActiveArchitecture(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeArchitecture]);

  function handleProjectAction(project, link) {
    const enhancement = projectEnhancements[project.projectName];
    const lowerUrl = (link.url || "").toLowerCase();
    const hasArchitecture =
      enhancement &&
      enhancement.architecture &&
      enhancement.architecture.image &&
      (link.name.toLowerCase().includes("architecture") ||
        lowerUrl.endsWith(".png") ||
        lowerUrl.endsWith(".jpg") ||
        lowerUrl.endsWith(".jpeg") ||
        lowerUrl.endsWith(".svg"));

    if (hasArchitecture) {
      setActiveArchitecture(enhancement.architecture);
      return;
    }

    if (link.url && link.url !== "#") {
      window.open(link.url, "_blank", "noopener,noreferrer");
    }
  }

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <>
        <div className="main" id="projects">
          <div>
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>

            <div className="projects-container">
              {bigProjects.projects.map((project, index) => {
                const enhancement = projectEnhancements[project.projectName] || {};
                const actions = project.actions || project.footerLink || [];

                return (
                  <article
                    key={project.projectName || index}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    {project.image && (
                      <div className="project-image">
                        <div className="project-image-shell">
                          <img
                            src={project.image}
                            alt={project.projectName}
                            className="card-image"
                          />
                        </div>
                      </div>
                    )}

                    <div className="project-detail">
                      <div className="project-topline">
                        <span className="project-pill">
                          {enhancement.category || "Enterprise System"}
                        </span>
                        <span
                          className={
                            isDark
                              ? "dark-mode project-timeline"
                              : "project-timeline"
                          }
                        >
                          {enhancement.timeline || "Internal Platform"}
                        </span>
                      </div>

                      <div className="project-copy">
                        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                          {project.projectName}
                        </h5>
                        <p
                          className={
                            isDark
                              ? "dark-mode project-headline"
                              : "project-headline"
                          }
                        >
                          {enhancement.headline || project.projectDesc}
                        </p>
                      </div>

                      {enhancement.techStack && enhancement.techStack.length > 0 && (
                        <div className="project-section">
                          <p className="project-section-label">Tools</p>
                          <div className="project-tech-stack">
                            {enhancement.techStack.map(tech => (
                              <span key={tech} className="project-tech-chip">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {enhancement.highlights && enhancement.highlights.length > 0 && (
                        <div className="project-section project-section-tight">
                          <p className="project-section-label">Impact</p>
                          <ul
                            className={
                              isDark
                                ? "dark-mode project-highlight-list"
                                : "project-highlight-list"
                            }
                          >
                            {enhancement.highlights.map(highlight => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {actions.length > 0 && (
                        <div className="project-card-footer">
                          {actions.map((link, actionIndex) => {
                            const disabled =
                              link.type === "disabled" || !link.url || link.url === "#";

                            return (
                              <button
                                key={`${project.projectName}-${actionIndex}`}
                                type="button"
                                className={
                                  disabled
                                    ? "project-action project-action-disabled"
                                    : "project-action"
                                }
                                onClick={() =>
                                  !disabled && handleProjectAction(project, link)
                                }
                                disabled={disabled}
                              >
                                {link.name}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <ArchitectureModal
          activeArchitecture={activeArchitecture}
          isDark={isDark}
          onClose={() => setActiveArchitecture(null)}
        />
      </>
    </Fade>
  );
}
