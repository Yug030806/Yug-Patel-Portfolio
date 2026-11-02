"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes,
  Mic2,
  Rocket,
  Users,
  Podcast,
  Calendar,
  Sparkles,
  Layers
} from "lucide-react";
import { activitiesData } from "../data/achievementsData";

const ACTIVITY_ICONS = {
  Boxes,
  Mic2,
  Rocket,
  Users,
  Podcast,
  Calendar,
  Sparkles
};

const CATEGORY_FILTERS = [
  { id: "all", label: "All Engagements" },
  { id: "leadership", label: "Club & Media", filterFn: (a) => ["svit-podcast-club", "praxis-club"].includes(a.id) },
  { id: "operations", label: "Admin & Logistics", filterFn: (a) => ["ip-cell", "tedx-svit"].includes(a.id) },
  { id: "innovation", label: "Sprints & Outreach", filterFn: (a) => ["smart-india-hackathon", "unstop-champion"].includes(a.id) }
];

export default function Activities() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredActivities = activitiesData.filter((item) => {
    if (activeFilter === "all") return true;
    const filterObj = CATEGORY_FILTERS.find((f) => f.id === activeFilter);
    return filterObj && filterObj.filterFn ? filterObj.filterFn(item) : true;
  });

  return (
    <section id="activities" className="section-shell section-padding activities-section">
      {/* Eyebrow */}
      <div className="section-header-eyebrow">
        <span className="eyebrow-rule" />
        <span className="eyebrow-text">05 / ACTIVITIES &amp; LEADERSHIP</span>
      </div>

      {/* Section Header */}
      <div className="section-header-row">
        <div>
          <h2 className="section-heading-large">
            Activities &amp; <span className="text-accent">Leadership.</span>
          </h2>
          <p className="section-subheading">
            Campus leadership, technical club management, event logistics, and institutional initiatives.
          </p>
        </div>

        <div className="projects-count-pill">
          <span className="count-number">
            {String(activitiesData.length).padStart(2, "0")}
          </span>
          <span className="count-label">ENGAGEMENTS</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="achievement-filters-bar activities-filter-bar">
        {CATEGORY_FILTERS.map((f) => {
          const count =
            f.id === "all"
              ? activitiesData.length
              : activitiesData.filter(f.filterFn).length;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`achievement-filter-btn ${activeFilter === f.id ? "active" : ""}`}
            >
              <span>{f.label}</span>
              <span className="filter-count-badge">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Activities Grid */}
      <motion.div layout className="activities-grid">
        <AnimatePresence mode="popLayout">
          {filteredActivities.map((act, index) => {
            const IconComponent = ACTIVITY_ICONS[act.iconName] || Boxes;
            return (
              <motion.div
                key={act.id}
                layout
                className="activity-card"
                style={{ "--card-accent": act.accentColor }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div>
                  {/* Card Header */}
                  <div className="activity-card-header">
                    <div className="activity-header-left">
                      {act.logo ? (
                        <div
                          className={`activity-logo-pod ${act.logoWide ? "activity-logo-pod-wide" : ""}`}
                          style={{
                            backgroundColor: act.logoBg || "rgba(255, 255, 255, 0.05)",
                            borderColor: `${act.accentColor}35`
                          }}
                        >
                          <img
                            src={act.logo}
                            alt={`${act.title} logo`}
                            className="activity-logo-img"
                            loading="lazy"
                          />
                        </div>
                      ) : (
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
                      )}
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
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
