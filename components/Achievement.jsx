"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ArrowUpRight,
  Calendar,
  Building,
  Sparkles,
  X,
  Maximize2,
  Boxes,
  Mic2,
  Rocket,
  Users
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import { featuredAchievement, activitiesData } from "../data/achievementsData";

const ACTIVITY_ICONS = {
  Boxes,
  Mic2,
  Rocket,
  Users
};

const FILTERS = [
  { id: "all", label: "All Recognitions", count: 5 },
  { id: "achievements", label: "Awards & Honors", count: 1 },
  { id: "activities", label: "Activities & Leadership", count: 4 }
];

export default function Achievement() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const showFeatured = activeTab === "all" || activeTab === "achievements";
  const showActivities = activeTab === "all" || activeTab === "activities";

  return (
    <>
      <section id="achievement" className="section-shell section-padding achievement-section">
        {/* Eyebrow */}
        <div className="section-header-eyebrow">
          <span className="eyebrow-rule" />
          <span className="eyebrow-text">04 / ACHIEVEMENTS &amp; ACTIVITIES</span>
        </div>

        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <h2 className="section-heading-large">
              Achievements &amp; <span className="text-accent">Activities.</span>
            </h2>
            <p className="section-subheading">
              Competitive hackathons, institutional logistics, campus leadership, and verified awards.
            </p>
          </div>

          <div className="projects-count-pill">
            <span className="count-number">05</span>
            <span className="count-label">MILESTONES</span>
          </div>
        </div>

        {/* Filter Switcher */}
        <div className="achievement-filters-bar">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveTab(f.id)}
              className={`achievement-filter-btn ${activeTab === f.id ? "active" : ""}`}
            >
              <span>{f.label}</span>
              <span className="filter-count-badge">{f.count}</span>
            </button>
          ))}
        </div>

        {/* Featured Award: NLP Ignite Bootcamp */}
        {showFeatured && (
          <motion.div
            className="achievement-feature-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="achievement-backdrop-glow" />

            <div className="achievement-content-grid">
              {/* Left side: Information */}
              <div className="achievement-info-col">
                <div className="prize-ribbon">
                  <span className="medal-icon">{featuredAchievement.medal}</span>
                  <span className="ribbon-text">{featuredAchievement.award}</span>
                </div>

                <div className="organizer-badge">
                  <Building size={14} className="organizer-icon" />
                  <span>{featuredAchievement.organizer}</span>
                </div>

                <h3 className="achievement-title">{featuredAchievement.title}</h3>

                <p className="achievement-narrative">
                  {featuredAchievement.description}
                </p>

                <div className="achievement-meta-strip">
                  <div className="meta-item">
                    <Calendar size={15} className="meta-icon" />
                    <span>{featuredAchievement.date}</span>
                  </div>
                  <div className="meta-item">
                    <Sparkles size={15} className="meta-icon" />
                    <span>{featuredAchievement.topic}</span>
                  </div>
                </div>

                <div className="achievement-actions">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="preview-cert-btn"
                  >
                    <span>Inspect Certificate</span>
                    <Maximize2 size={16} />
                  </button>

                  <MagneticButton
                    href={featuredAchievement.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-full-cert-btn"
                  >
                    <span>Open Full Certificate</span>
                    <ArrowUpRight size={16} />
                  </MagneticButton>
                </div>
              </div>

              {/* Right side: Clickable Certificate Preview with Glow & Zoom */}
              <div className="achievement-visual-col">
                <div
                  className="certificate-frame-card"
                  onClick={() => setModalOpen(true)}
                  data-cursor="view"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setModalOpen(true);
                    }
                  }}
                  aria-label="Click to inspect NLP Ignite Bootcamp certificate"
                >
                  <div className="certificate-glow" />

                  <div className="certificate-image-container">
                    <img
                      src={featuredAchievement.certificateImage}
                      alt="NLP Ignite Bootcamp 3rd Prize Certificate - SVIT ACM Student Chapter"
                      className="certificate-img"
                      loading="lazy"
                    />
                    <div className="cert-hover-hint">
                      <Maximize2 size={20} />
                      <span>Click to Expand</span>
                    </div>
                  </div>

                  <div className="certificate-caption">
                    <span className="caption-title">Official Award Certificate</span>
                    <span className="caption-tag">{featuredAchievement.certificateBadge}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Activities Section */}
        {showActivities && (
          <div className="activities-container">
            {activeTab === "all" && (
              <div className="activities-section-divider">
                <div className="activities-subhead">
                  <div className="activities-subhead-left">
                    <span className="subhead-pill">LEADERSHIP &amp; CO-CURRICULAR</span>
                    <h3 className="activities-subhead-title">Roles &amp; Participations</h3>
                  </div>
                  <span className="activities-subhead-tag">4 Active Engagements</span>
                </div>
              </div>
            )}

            <div className="activities-grid">
              {activitiesData.map((act, index) => {
                const IconComponent = ACTIVITY_ICONS[act.iconName] || Boxes;
                return (
                  <motion.div
                    key={act.id}
                    className="activity-card"
                    style={{ "--card-accent": act.accentColor }}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="activity-card-header">
                        <div className="activity-header-left">
                          <div
                            className="activity-icon-pod"
                            style={{
                              color: act.accentColor,
                              backgroundColor: `${act.accentColor}14`,
                              borderColor: `${act.accentColor}35`
                            }}
                          >
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <span className="activity-org-label">{act.organization}</span>
                            <h4 className="activity-card-title">{act.title}</h4>
                          </div>
                        </div>

                        <span
                          className="activity-badge-pill"
                          style={{
                            color: act.accentColor,
                            backgroundColor: `${act.accentColor}14`,
                            borderColor: `${act.accentColor}30`
                          }}
                        >
                          {act.badge}
                        </span>
                      </div>

                      {/* Role Banner */}
                      <div className="activity-role-banner">
                        <span
                          className="activity-role-bullet"
                          style={{ backgroundColor: act.accentColor }}
                        />
                        <span className="activity-role-text">{act.role}</span>
                      </div>

                      {/* Narrative Description */}
                      <p className="activity-card-desc">{act.description}</p>
                    </div>

                    {/* Tag strip at bottom */}
                    <div className="activity-tags-strip">
                      {act.tags.map((tag) => (
                        <span key={tag} className="activity-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="cert-modal-window"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div className="modal-title-group">
                  <h3>NLP Ignite Bootcamp — 3rd Prize</h3>
                  <span>SVIT ACM Student Chapter (3–6 Aug 2026)</span>
                </div>
                <div className="modal-top-actions">
                  <a
                    href={featuredAchievement.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-icon-btn"
                    title="Open full size"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="modal-icon-btn close-btn"
                    aria-label="Close certificate modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="cert-modal-body">
                <img
                  src={featuredAchievement.certificateImage}
                  alt="Full NLP Ignite Bootcamp Certificate"
                  className="modal-full-img"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
