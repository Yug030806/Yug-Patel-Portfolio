"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ArrowUpRight, Calendar, Building, Sparkles, X, Maximize2, Download } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Achievement() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="achievement" className="section-shell section-padding achievement-section">
        <div className="section-header-eyebrow">
          <span className="eyebrow-rule" />
          <span className="eyebrow-text">04 / ACHIEVEMENT</span>
        </div>

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
                <span className="medal-icon">🥉</span>
                <span className="ribbon-text">3RD PRIZE WINNER</span>
              </div>

              <div className="organizer-badge">
                <Building size={14} className="organizer-icon" />
                <span>SVIT ACM STUDENT CHAPTER • COMPUTER ENGINEERING DEPT.</span>
              </div>

              <h2 className="achievement-title">NLP Ignite Bootcamp</h2>

              <p className="achievement-narrative">
                Awarded <strong>3rd Prize</strong> in the competitive NLP Ignite Bootcamp event
                organized by the SVIT ACM Student Chapter and Computer Engineering Department.
                The intensive bootcamp challenged participants to explore advanced natural language processing
                techniques, sentence tokenization, computational linguistics, and real-world semantic text analysis.
              </p>

              <div className="achievement-meta-strip">
                <div className="meta-item">
                  <Calendar size={15} className="meta-icon" />
                  <span>3rd Aug to 6th Aug 2026</span>
                </div>
                <div className="meta-item">
                  <Sparkles size={15} className="meta-icon" />
                  <span>Topic: Natural Language Processing</span>
                </div>
              </div>

              <div className="achievement-actions">
                <MagneticButton
                  href="/certificate.jpg"
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
                    src="/certificate.jpg"
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
                  <span className="caption-tag">VERIFIED ACHIEVEMENT</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
                    href="/certificate.jpg"
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
                  src="/certificate.jpg"
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
