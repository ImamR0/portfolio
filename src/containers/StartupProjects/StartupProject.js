import React, { useContext, useState } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {

  const [showImage, setShowImage] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const { isDark } = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) return;
    setImageSrc(url);
    setShowImage(true);
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
              {bigProjects.projects.map((project, i) => (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image && (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      />
                    </div>
                  )}

                  <div className="project-detail">
                    <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                      {project.projectName}
                    </h5>

                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>

                    {project.footerLink && (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => (
                          <span
                            key={i}
                            className={
                              isDark
                                ? "dark-mode project-tag"
                                : "project-tag"
                            }
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showImage && (
          <div
            className="architecture-modal"
            onClick={() => setShowImage(false)}
          >
            <img
              src={imageSrc}
              alt="System Architecture"
              className="architecture-image"
            />
          </div>
        )}
      </>
    </Fade>
  );
}