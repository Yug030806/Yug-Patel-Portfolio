"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  UserCheck,
  Calendar,
  Sparkles
} from "lucide-react";
import ProjectVisual from "./ProjectVisuals";
import MagneticButton from "./MagneticButton";

export default function ProjectDetail({ project }) {
  if (!project) return null;

  return (
    <article className="case-study-page">
      {/* Top Breadcrumb navigation */}
      <div className="section-shell case-study-breadcrumb-bar">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{project.title}</span>
      </div>

      {/* Case Study Hero Section */}
      <section className="section-shell case-study-hero">
        <motion.div
          className="case-hero-header"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="case-meta-chips">
            <span className="case-number-chip">PROJECT {project.number}</span>
            <span className="case-category-chip">{project.category}</span>
            <span className="case-status-chip">
              <span className="pulse-beacon small" />
              {project.status}
            </span>
          </div>

          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-subtitle">{project.fullDescription}</p>

          <div className="case-role-banner">
            <div className="role-badge-icon">
              <UserCheck size={18} />
            </div>
            <div>
              <span className="role-banner-label">YUG&apos;S ROLE & CONTRIBUTION</span>
              <p className="role-banner-text">{project.role}</p>
            </div>
          </div>

          <div className="case-hero-actions">
            {project.live && (
              <MagneticButton
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-action-btn"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </MagneticButton>
            )}

            <MagneticButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-action-btn"
            >
              <Github size={16} />
              <span>View on GitHub</span>
              <ArrowUpRight size={16} />
            </MagneticButton>
          </div>
        </motion.div>

        {/* Custom Interactive Visual Showcase */}
        <motion.div
          className="case-study-visual-container"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="visual-viewport-frame">
            <ProjectVisual slug={project.slug} />
          </div>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="section-shell case-study-body-grid">
        {/* Left Column: Narrative Sections */}
        <div className="case-narrative-column">
          {/* Overview */}
          <motion.div
            className="case-section-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="case-block-heading">
              <span className="block-num">01</span> Project Overview
            </h2>
            <p className="case-block-text">{project.overview}</p>
          </motion.div>

          {/* Problem & Solution */}
          <div className="case-split-blocks">
            <motion.div
              className="case-card problem-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-top-indicator">
                <AlertTriangle size={18} className="text-warning" />
                <h3>The Engineering Problem</h3>
              </div>
              <p>{project.problem}</p>
            </motion.div>

            <motion.div
              className="case-card solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="card-top-indicator">
                <Lightbulb size={18} className="text-accent" />
                <h3>The Technical Solution</h3>
              </div>
              <p>{project.solution}</p>
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            className="case-section-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="case-block-heading">
              <span className="block-num">02</span> Core Capabilities & Features
            </h2>

            <div className="features-breakdown-grid">
              {project.keyFeatures.map((feat, idx) => (
                <div key={feat.title} className="feature-detail-card">
                  <div className="feature-card-header">
                    <span className="feature-index">0{idx + 1}</span>
                    <h4>{feat.title}</h4>
                  </div>
                  <p>{feat.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* System Architecture & Workflow */}
          <motion.div
            className="case-section-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="case-block-heading">
              <span className="block-num">03</span> Architecture & Execution Pipeline
            </h2>

            <div className="architecture-timeline">
              {project.architecture.map((step, idx) => (
                <div key={step.phase} className="timeline-step">
                  <div className="step-marker">
                    <span className="marker-dot" />
                    {idx < project.architecture.length - 1 && <span className="marker-line" />}
                  </div>
                  <div className="step-content">
                    <span className="step-phase-tag">PHASE 0{idx + 1}</span>
                    <h4 className="step-title">{step.phase}</h4>
                    <p className="step-detail">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Yug's Exact Role & Contributions */}
          <motion.div
            className="case-section-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="case-block-heading">
              <span className="block-num">04</span> Detailed Contributions
            </h2>

            <div className="contributions-list">
              {project.contributionDetails.map((detail, idx) => (
                <div key={idx} className="contribution-item">
                  <CheckCircle2 size={17} className="contribution-icon" />
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Engineering Challenges & Takeaways */}
          <motion.div
            className="case-section-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="case-block-heading">
              <span className="block-num">05</span> Key Challenges & Solutions
            </h2>

            <div className="challenges-grid">
              {project.challenges.map((item, idx) => (
                <div key={idx} className="challenge-card">
                  <div className="challenge-part">
                    <span className="part-label challenge-label">CHALLENGE</span>
                    <p className="part-text">{item.challenge}</p>
                  </div>
                  <div className="solution-part">
                    <span className="part-label solution-label">RESOLUTION</span>
                    <p className="part-text">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Sticky Metadata Sidebar */}
        <aside className="case-sidebar-column">
          <div className="sidebar-sticky-panel">
            {/* Tech Stack */}
            <div className="sidebar-block">
              <span className="sidebar-label">TECHNOLOGY STACK</span>
              <div className="sidebar-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Role Card */}
            <div className="sidebar-block">
              <span className="sidebar-label">ROLE SPECIFICATION</span>
              <div className="sidebar-role-highlight">
                <UserCheck size={16} className="text-accent" />
                <span className="role-text">{project.roleType}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sidebar-block">
              <span className="sidebar-label">REPOSITORY & DEMO</span>
              <div className="sidebar-links-cluster">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link-btn"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                  <ArrowUpRight size={14} className="link-arrow" />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-link-btn highlight"
                  >
                    <ExternalLink size={15} />
                    <span>Production URL</span>
                    <ArrowUpRight size={14} className="link-arrow" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Next Project Navigation */}
      {project.nextProject && (
        <section className="section-shell next-project-section">
          <div className="next-project-divider" />
          <Link
            href={`/projects/${project.nextProject.slug}`}
            className="next-project-card"
          >
            <div className="next-project-meta">
              <span className="next-label">NEXT CASE STUDY</span>
              <h3 className="next-title">{project.nextProject.title}</h3>
            </div>
            <div className="next-arrow-circle">
              <ArrowUpRight size={22} />
            </div>
          </Link>
        </section>
      )}
    </article>
  );
}
