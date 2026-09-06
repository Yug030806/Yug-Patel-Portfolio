"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, UserCheck } from "lucide-react";
import ProjectVisual from "./ProjectVisuals";
import MagneticButton from "./MagneticButton";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`premium-project-card ${project.featured ? "featured-card" : ""}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top Header info */}
      <div className="card-header-bar">
        <div className="card-number-badge">
          <span className="number-hash">#</span>
          <span className="number-val">{project.number}</span>
        </div>

        <span className="card-category-tag">{project.category}</span>

        <div className="card-role-pill">
          <UserCheck size={11} className="role-icon" />
          <span>{project.roleType.split("&")[0].trim()}</span>
        </div>
      </div>

      {/* Compact Custom Visual Representation with "VIEW" cursor trigger */}
      <Link
        href={`/projects/${project.slug}`}
        className="card-visual-link"
        data-cursor="view"
        aria-label={`View ${project.title} case study`}
      >
        <div className="card-visual-wrapper">
          <ProjectVisual slug={project.slug} />
        </div>
      </Link>

      {/* Project Content Body */}
      <div className="card-body-content">
        <div className="card-title-group">
          <h3 className="card-title">
            <Link href={`/projects/${project.slug}`} className="title-link">
              {project.title}
            </Link>
          </h3>
          <p className="card-description">{project.shortDescription}</p>
        </div>

        {/* Role contribution strip */}
        <div className="card-role-callout">
          <span className="callout-label">CONTRIBUTION:</span>
          <p className="callout-text">{project.role}</p>
        </div>

        {/* Technology tags: top 4 pills */}
        <div className="card-tech-chips">
          {project.tech.slice(0, 4).map((techItem) => (
            <span key={techItem} className="tech-chip">
              {techItem}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-chip more-chip">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Actions bar */}
        <div className="card-actions-bar">
          <MagneticButton
            href={`/projects/${project.slug}`}
            className="case-study-action-btn"
          >
            <span>Case Study</span>
            <ArrowUpRight size={14} />
          </MagneticButton>

          <div className="external-links-cluster">
            {project.live && (
              <MagneticButton
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-action-btn"
                ariaLabel={`Live demo for ${project.title}`}
              >
                <ExternalLink size={15} />
              </MagneticButton>
            )}

            <MagneticButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-action-btn"
              ariaLabel={`GitHub repository for ${project.title}`}
            >
              <Github size={15} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
