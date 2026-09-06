"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, Clock, Globe } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "yug6600@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="section-shell section-padding contact-section">
      <div className="section-header-eyebrow">
        <span className="eyebrow-rule" />
        <span className="eyebrow-text">05 / CONTACT</span>
      </div>

      <motion.div
        className="contact-card-box"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="contact-radial-glow" />

        <div className="contact-inner-content">
          <div className="contact-status-chip">
            <span className="pulse-beacon" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <h2 className="contact-headline">
            LET&apos;S BUILD SOMETHING
            <br />
            <em className="text-accent">MEANINGFUL.</em>
          </h2>

          <p className="contact-subtext">
            I&apos;m open to internships, collaborations, hackathons and interesting software projects.
          </p>

          <div className="contact-primary-actions">
            <MagneticButton
              href={`mailto:${email}`}
              className="contact-email-btn"
            >
              <Mail size={18} />
              <span>Email Me</span>
              <ArrowUpRight size={17} />
            </MagneticButton>

            <button
              onClick={handleCopyEmail}
              className="copy-email-btn"
              aria-label="Copy email address to clipboard"
            >
              {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
            </button>
          </div>

          <div className="contact-social-cluster">
            <MagneticButton
              href="https://github.com/Yug030806"
              target="_blank"
              rel="noopener noreferrer"
              className="social-contact-link"
            >
              <Github size={17} />
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </MagneticButton>

            <MagneticButton
              href="https://www.linkedin.com/in/yug-patel-632a58381"
              target="_blank"
              rel="noopener noreferrer"
              className="social-contact-link"
            >
              <Linkedin size={17} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </MagneticButton>
          </div>

          <div className="contact-location-bar">
            <div className="location-item">
              <Globe size={14} className="location-icon" />
              <span>Gujarat, India</span>
            </div>
            <div className="location-item">
              <Clock size={14} className="location-icon" />
              <span>IST (UTC +5:30)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
