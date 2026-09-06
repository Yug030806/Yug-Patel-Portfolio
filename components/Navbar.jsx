"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import MagneticButton from "./MagneticButton";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Achievement", id: "achievement" },
  { label: "Contact", id: "contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!isHome) return;

      const sections = ["home", "about", "projects", "skills", "achievement", "contact"];
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  const getHref = (id) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <header className={`nav-wrapper ${scrolled ? "compact" : ""}`}>
        <nav className="nav-container" aria-label="Main Navigation">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <span className="logo-text">Y</span>
            <span className="logo-dot" />
            <span className="logo-text">P</span>
          </Link>

          {/* Desktop Links */}
          <div className="nav-desktop-links">
            {NAV_ITEMS.map((item) => {
              const isActive = isHome && activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={getHref(item.id)}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  <span className="nav-link-dot" />
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="nav-actions">
            <MagneticButton
              href="/Yug_Patel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
            >
              <span>Resume</span>
              <Download size={14} />
            </MagneticButton>

            <MagneticButton
              href={getHref("contact")}
              className="nav-cta-btn"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight size={14} />
            </MagneticButton>

            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer / Overlay */}
      <div className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`} onClick={closeMenu}>
        <div
          className="mobile-nav-menu"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <div className="mobile-nav-header">
            <Link href="/" className="nav-logo" onClick={closeMenu}>
              <span className="logo-text">Y</span>
              <span className="logo-dot" />
              <span className="logo-text">P</span>
            </Link>
            <button
              onClick={closeMenu}
              className="mobile-close-btn"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.id}
                href={getHref(item.id)}
                onClick={closeMenu}
                className="mobile-nav-link"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="mobile-link-num">0{index + 1}</span>
                <span className="mobile-link-title">{item.label}</span>
                <ArrowUpRight size={18} className="mobile-link-arrow" />
              </a>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <a
              href="/Yug_Patel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-resume-action"
            >
              <Download size={16} /> Download Resume
            </a>
            <div className="mobile-socials">
              <a href="https://github.com/Yug030806" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/yug-patel-632a58381" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:yug6600@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
