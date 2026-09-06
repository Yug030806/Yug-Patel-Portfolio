"use client";

import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-padding projects-section">
      <div className="section-header-eyebrow">
        <span className="eyebrow-rule" />
        <span className="eyebrow-text">02 / SELECTED WORK</span>
      </div>

      <div className="section-header-row">
        <div>
          <h2 className="section-heading-large">
            Projects that <span className="text-accent">solve something.</span>
          </h2>
          <p className="section-subheading">
            Three production and research builds: multi-floor pathfinding algorithms, NLP extraction pipelines, and modern web apps.
          </p>
        </div>

        <div className="projects-count-pill">
          <span className="count-number">03</span>
          <span className="count-label">BUILDS</span>
        </div>
      </div>

      <div className="projects-grid-layout">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
