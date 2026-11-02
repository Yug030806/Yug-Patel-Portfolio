"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  Calendar,
  Sparkles,
  Maximize2,
  ArrowUpRight,
  X,
  Users,
  Award
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import { achievementsData } from "../data/achievementsData";

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <>
      <section id="achievements" className="section-shell section-padding achievement-section">
        {/* Eyebrow */}
        <div className="section-header-eyebrow">
          <span className="eyebrow-rule" />
          <span className="eyebrow-text">04 / ACHIEVEMENTS &amp; CERTIFICATIONS</span>
        </div>

        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <h2 className="section-heading-large">
              Achievements &amp; <span className="text-accent">Certificates.</span>
            </h2>
            <p className="section-subheading">
              Verified awards, competitive hackathon recognitions, and official certificates.
            </p>
          </div>

          <div className="projects-count-pill">
            <span className="count-number">
              {String(achievementsData.length).padStart(2, "0")}
            </span>
            <span className="count-label">AWARDS &amp; CERTS</span>
          </div>
        </div>

        {/* Certificates Showcase Stack */}
        <div className="achievements-stack">
          {achievementsData.map((item, index) => {
            const cardAccent = item.accentColor || "#b8ff4d";
            return (
              <motion.div
                key={item.id}
                className="achievement-feature-box"
                style={{
                  "--cert-accent": cardAccent,
                  borderColor: `${cardAccent}45`
                }}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div
                  className="achievement-backdrop-glow"
                  style={{ background: cardAccent }}
                />

                <div className="achievement-content-grid">
                  {/* Left side: Information */}
                  <div className="achievement-info-col">
                    <div
                      className="prize-ribbon"
                      style={{
                        background: `${cardAccent}18`,
                        borderColor: `${cardAccent}40`
                      }}
                    >
                      <span className="medal-icon">{item.medal}</span>
                      <span className="ribbon-text" style={{ color: cardAccent }}>
                        {item.award}
                      </span>
                    </div>

                    <div className="organizer-badge">
                      <Building size={14} className="organizer-icon" style={{ color: cardAccent }} />
                      <span>{item.organizer}</span>
                    </div>

                    <h3 className="achievement-title">{item.title}</h3>

                    <p className="achievement-narrative">{item.description}</p>

                    <div className="achievement-meta-strip">
                      <div className="meta-item">
                        <Calendar size={15} className="meta-icon" style={{ color: cardAccent }} />
                        <span>{item.date}</span>
                      </div>
                      <div className="meta-item">
                        <Sparkles size={15} className="meta-icon" style={{ color: cardAccent }} />
                        <span>{item.topic}</span>
                      </div>
                      {item.team && (
                        <div className="meta-item">
                          <Users size={15} className="meta-icon" style={{ color: cardAccent }} />
                          <span>{item.team}</span>
                        </div>
                      )}
                    </div>

                    {/* Tag strip */}
                    {item.tags && (
                      <div className="achievement-tags-strip">
                        {item.tags.map((tag) => (
                          <span key={tag} className="achievement-tag">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="achievement-actions">
                      <button
                        type="button"
                        onClick={() => setSelectedCert(item)}
                        className="preview-cert-btn"
                        style={{
                          background: cardAccent,
                          color: cardAccent === "#b8ff4d" ? "#07080a" : "#ffffff"
                        }}
                      >
                        <Award size={15} />
                        <span>Inspect Certificate</span>
                        <Maximize2 size={15} />
                      </button>

                      <MagneticButton
                        href={item.certificateImage}
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
                      style={{ borderColor: `${cardAccent}45` }}
                      onClick={() => setSelectedCert(item)}
                      data-cursor="view"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelectedCert(item);
                        }
                      }}
                      aria-label={`Click to inspect ${item.title} certificate`}
                    >
                      <div
                        className="certificate-glow"
                        style={{ background: cardAccent }}
                      />

                      <div className="certificate-image-container">
                        <img
                          src={item.certificateImage}
                          alt={`${item.title} - ${item.award} Certificate`}
                          className="certificate-img"
                          loading="lazy"
                        />
                        <div className="cert-hover-hint">
                          <Maximize2 size={22} style={{ color: cardAccent }} />
                          <span style={{ color: cardAccent }}>Click to Expand Certificate</span>
                        </div>
                      </div>

                      <div className="certificate-caption">
                        <span className="caption-title">{item.title} Certificate</span>
                        <span className="caption-tag" style={{ color: cardAccent }}>
                          {item.certificateBadge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
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
                  <h3>
                    {selectedCert.title} — {selectedCert.award}
                  </h3>
                  <span>
                    {selectedCert.organizer} ({selectedCert.date})
                  </span>
                </div>
                <div className="modal-top-actions">
                  <a
                    href={selectedCert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-icon-btn"
                    title="Open full size in new tab"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="modal-icon-btn close-btn"
                    aria-label="Close certificate modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="cert-modal-body">
                <img
                  src={selectedCert.certificateImage}
                  alt={`Full ${selectedCert.title} Certificate`}
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
