"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles, Terminal, Camera } from "lucide-react";
import MagneticButton from "./MagneticButton";
import InteractiveScene from "./InteractiveScene";

export default function Hero() {
  const [profileImage, setProfileImage] = useState("/profile.png");
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Check localStorage for user-uploaded custom photo
    try {
      const saved = localStorage.getItem("yug_profile_image");
      if (saved) {
        setProfileImage(saved);
      }
    } catch {
      // ignore storage access error
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result;
        if (typeof dataUrl === "string") {
          setProfileImage(dataUrl);
          try {
            localStorage.setItem("yug_profile_image", dataUrl);
          } catch {
            // storage may be full or disabled
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-backdrop-glow glow-primary" />
      <div className="hero-backdrop-glow glow-secondary" />
      <div className="hero-grid-pattern" />

      <div className="section-shell hero-layout">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Profile Identity Card Section */}
          <div className="hero-profile-card">
            <div
              className="hero-avatar-frame"
              onClick={() => fileInputRef.current?.click()}
              title="Click to choose or change your profile photo"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  fileInputRef.current?.click();
                }
              }}
            >
              <img
                src={profileImage}
                alt="Yug Patel"
                className="hero-avatar-photo"
                onError={() => setProfileImage("/avatar.svg")}
              />
              <span className="hero-avatar-status" title="Active & Available">
                <span className="status-ping-ring" />
              </span>
              <div className="hero-avatar-upload-overlay">
                <Camera size={14} />
                <span className="overlay-badge-text">PHOTO</span>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
                aria-label="Upload profile image"
              />
            </div>

            <div className="hero-profile-details">
              <div className="availability-badge">
                <span className="pulse-beacon" />
                <span className="badge-text">OPEN TO INTERNSHIPS & OPPORTUNITIES</span>
              </div>
              <div className="hero-profile-tagline">
                <span className="tagline-name">YUG PATEL</span>
                <span className="tagline-bullet">•</span>
                <span className="tagline-spec">COMPUTER ENGINEERING</span>
              </div>
            </div>
          </div>

          <p className="hero-eyebrow">
            <Terminal size={12} className="eyebrow-icon" />
            SOFTWARE DEVELOPER • AI & INTELLIGENT SYSTEMS • FULL-STACK
          </p>

          <h1 className="hero-title">
            <span>BUILDING SOFTWARE.</span>
            <br />
            <span className="gradient-accent">EXPLORING AI.</span>
            <br />
            <span>SOLVING REAL PROBLEMS.</span>
          </h1>

          <p className="hero-bio">
            I&apos;m <strong>Yug Patel</strong>, a Computer Engineering student focused on intelligent
            systems, modern web development and practical software solutions.
          </p>

          <div className="hero-cta-group">
            <MagneticButton
              href="#projects"
              className="primary-action-btn"
            >
              <span>VIEW PROJECTS</span>
              <ArrowUpRight size={17} />
            </MagneticButton>

            <MagneticButton
              href="/Yug_Patel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-action-btn"
            >
              <span>DOWNLOAD RESUME</span>
              <Download size={16} />
            </MagneticButton>
          </div>

          <div className="hero-social-strip">
            <span className="social-label">CONNECT:</span>
            <a
              href="https://github.com/Yug030806"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yug-patel-632a58381"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:yug6600@gmail.com"
              className="social-pill"
              aria-label="Email Yug Patel"
            >
              <Mail size={15} />
              <span>Email</span>
            </a>
          </div>
        </motion.div>

        {/* 3D / Interactive Visual System */}
        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="visual-glass-card">
            <div className="visual-card-header">
              <div className="header-traffic-lights">
                <span className="light red" />
                <span className="light yellow" />
                <span className="light green" />
              </div>
              <div className="header-badge">
                <Sparkles size={11} />
                <span>INTELLIGENT_SYSTEMS_GRAPH</span>
              </div>
              <div className="header-status">
                <span className="status-indicator" />
                <span>LIVE</span>
              </div>
            </div>

            <div className="visual-scene-viewport">
              <InteractiveScene />
            </div>

            <div className="visual-card-footer">
              <span className="footer-code-chip">python / next.js / a* / nlp</span>
              <span className="footer-coordinates">3D GRAPH • V2.0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
