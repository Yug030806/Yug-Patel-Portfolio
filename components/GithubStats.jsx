"use client";

import { useEffect, useState } from "react";
import {
  Github,
  BookOpen,
  ArrowUpRight,
  Code2,
  GitBranch,
  Cpu,
  Zap,
  BrainCircuit
} from "lucide-react";
import MagneticButton from "./MagneticButton";

const FALLBACK_DATA = {
  login: "Yug030806",
  name: "Yug Patel",
  html_url: "https://github.com/Yug030806",
  public_repos: 7
};

export default function GithubStats() {
  const [githubData, setGithubData] = useState(FALLBACK_DATA);

  useEffect(() => {
    let isMounted = true;
    async function fetchGithub() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data) {
            setGithubData(data);
          }
        }
      } catch {
        // Fallback already pre-set
      }
    }

    fetchGithub();
    return () => {
      isMounted = false;
    };
  }, []);

  const profileCards = [
    {
      title: "Public Repositories",
      icon: BookOpen,
      podClass: "ai-pod",
      description: `${githubData.public_repos || 7} active repositories on GitHub covering algorithms, AI, and full-stack projects.`,
      link: "https://github.com/Yug030806?tab=repositories"
    },
    {
      title: "Primary Languages",
      icon: Code2,
      podClass: "speak-pod",
      description: "Multi-stack codebase diversity focused on TypeScript, Python, and modern JavaScript.",
      link: "https://github.com/Yug030806"
    },
    {
      title: "Profile Activity",
      icon: GitBranch,
      podClass: "algo-pod",
      description: "Active open-source developer continuously building, experimenting, and shipping practical code.",
      link: "https://github.com/Yug030806"
    },
    {
      title: "Smart Warehouse Automation System",
      icon: Cpu,
      podClass: "ai-pod",
      description: "A smart warehouse logistics prototype featuring multi-floor routing, autonomous-cart simulation, QR verification, analytics and audit logging.",
      link: "https://github.com/Yug030806/Smart-Warehouse-Automation-System"
    },
    {
      title: "The BeingStrong Fitness",
      icon: Zap,
      podClass: "speak-pod",
      description: "A modern fitness-focused web application with a responsive interface, reusable components and polished motion-driven interactions.",
      link: "https://github.com/Yug030806/The-BeingStrong-Fitness"
    },
    {
      title: "AI News Summarizer",
      icon: BrainCircuit,
      podClass: "web-pod",
      description: "An AI-powered news analysis platform that summarizes articles and extracts sentiment, named entities, keywords, categories and credibility/bias insights.",
      link: "https://github.com/mayank018-tech/AI-News-summarizer"
    }
  ];

  return (
    <section id="github" className="section-shell section-padding github-section">
      <div className="section-header-eyebrow">
        <span className="eyebrow-rule" />
        <span className="eyebrow-text">OPEN SOURCE</span>
      </div>

      <div className="github-card-box">
        {/* Ambient background glows */}
        <div className="github-ambient-glow glow-left" />
        <div className="github-ambient-glow glow-right" />

        <div className="github-box-header">
          <div className="github-quote-wrap">
            <span className="github-tag-badge">
              <Github size={14} />
              <span>GITHUB PROFILE</span>
            </span>
            <h2 className="github-headline">
              &quot;Code is where ideas <span className="text-accent">become real.</span>&quot;
            </h2>
            <p className="github-subtext">
              Track active repositories, algorithms, experimental prototypes, and web applications.
            </p>
          </div>

          <div className="github-profile-link-wrap">
            <MagneticButton
              href="https://github.com/Yug030806"
              target="_blank"
              rel="noopener noreferrer"
              className="github-main-cta"
            >
              <Github size={17} />
              <span>Visit @Yug030806</span>
              <ArrowUpRight size={15} />
            </MagneticButton>
          </div>
        </div>

        {/* 6-Card Glassmorphism Dashboard Grid */}
        <div className="screenshot-dashboard-grid">
          {profileCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="screenshot-glass-card hoverable"
              >
                <div className="glass-card-header">
                  <div className="glass-header-left">
                    <div className={`glass-icon-pod ${card.podClass}`}>
                      <Icon size={18} />
                    </div>
                    <h4 className="glass-card-title">{card.title}</h4>
                  </div>
                  <ArrowUpRight size={16} className="glass-chevron" />
                </div>

                <p className="glass-card-body-desc">
                  {card.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
