"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  BrainCircuit,
  Database,
  Wrench,
  Sparkles
} from "lucide-react";
import { skillsCategories } from "../data/skillsData";
import RotatingGlassCarousel from "./RotatingGlassCarousel";

const CATEGORY_ICONS = {
  programming: Code2,
  "web-frontend": Globe,
  "ai-ml": BrainCircuit,
  "backend-data": Database,
  tools: Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-padding skills-section">
      <div className="section-header-eyebrow">
        <span className="eyebrow-rule" />
        <span className="eyebrow-text">03 / TOOLKIT</span>
      </div>

      <div className="section-header-row">
        <div>
          <h2 className="section-heading-large">
            Technologies I <span className="text-accent">work with.</span>
          </h2>
          <p className="section-subheading">
            Interactive 3D rotating glass cylinders showcasing core proficiencies across programming,
            modern frontend web, backend data systems, AI/ML pipelines, and developer tooling.
          </p>
        </div>
      </div>

      {/* All Categories Separately Rotating in One Single Unified Section */}
      <div className="unified-skills-grid">
        {skillsCategories.map((cat, idx) => {
          const Icon = CATEGORY_ICONS[cat.id] || Code2;

          return (
            <motion.div
              key={cat.id}
              className="skill-cylinder-pod"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Pod Header */}
              <div className="pod-header">
                <div className="pod-title-group">
                  <div
                    className="pod-icon-box"
                    style={{
                      color: cat.accentColor,
                      background: `${cat.accentColor}14`,
                      borderColor: `${cat.accentColor}35`
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="pod-index">0{idx + 1}</span>
                    <h3 className="pod-heading">{cat.category}</h3>
                  </div>
                </div>

                <span
                  className="pod-skill-count"
                  style={{
                    color: cat.accentColor,
                    borderColor: `${cat.accentColor}35`,
                    background: `${cat.accentColor}0a`
                  }}
                >
                  {cat.skills.length} SKILLS
                </span>
              </div>

              <p className="pod-summary">{cat.description}</p>

              {/* Continuous 3D Rotating Glass Cylinder (No pause/spin buttons, rotating by default) */}
              <div className="pod-cylinder-container">
                <RotatingGlassCarousel
                  skills={cat.skills}
                  categoryTitle={cat.category}
                  accentColor={cat.accentColor}
                />
              </div>

              {/* Bottom Quick-Read Skill Badges */}
              <div className="pod-badges-footer">
                {cat.skills.map((s) => (
                  <span key={s.name} className="pod-skill-chip">
                    <span className="chip-dot" style={{ background: s.color }} />
                    <span className="chip-name">{s.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
