"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">
      <div className="section-shell footer-inner">
        <div className="footer-brand-side">
          <Link href="/" className="footer-logo">
            <span className="logo-text">Y</span>
            <span className="logo-dot" />
            <span className="logo-text">P</span>
          </Link>
          <p className="footer-motto">
            Software Developer • AI & Intelligent Systems • Building with curiosity.
          </p>
        </div>

        <div className="footer-right-side">
          <div className="footer-links-group">
            <a href="https://github.com/Yug030806" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/yug-patel-632a58381" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:yug6600@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="section-shell footer-bottom-inner">
          <span>&copy; {new Date().getFullYear()} Yug Patel. All rights reserved.</span>
          <span>Designed & Engineered for Version 2</span>
        </div>
      </div>
    </footer>
  );
}
