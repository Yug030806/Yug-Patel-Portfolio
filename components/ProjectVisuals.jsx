"use client";

import {
  Cpu,
  Sparkles,
  Dumbbell,
  BrainCircuit
} from "lucide-react";

export function WarehouseVisual() {
  return (
    <div className="project-custom-visual warehouse-visual" aria-hidden="true">
      <div className="visual-grid-bg" />

      {/* Clean Minimal Header */}
      <div className="visual-header-minimal">
        <div className="visual-title-badge">
          <Cpu size={12} className="text-accent" />
          <span>Smart Warehouse Logistics</span>
        </div>
        <span className="visual-sub-tag">A* Pathfinding</span>
      </div>

      {/* Clean Spacious SVG Schematic */}
      <svg className="warehouse-schematic-clean" viewBox="0 0 400 120" fill="none">
        <defs>
          <pattern id="grid-pattern-clean" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" />
          </pattern>
          <linearGradient id="route-gradient-clean" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#b8ff4d" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <filter id="glow-filter-clean" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect width="400" height="120" fill="url(#grid-pattern-clean)" />

        {/* Storage Racks */}
        <rect x="30" y="20" width="60" height="22" rx="4" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" />
        <rect x="30" y="65" width="60" height="22" rx="4" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" />
        <rect x="135" y="20" width="60" height="22" rx="4" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" />
        <rect x="135" y="65" width="60" height="22" rx="4" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" />

        {/* Elevator Bay */}
        <rect x="320" y="22" width="55" height="65" rx="6" fill="rgba(56, 189, 248, 0.05)" stroke="rgba(56, 189, 248, 0.35)" strokeDasharray="3 3" />
        <text x="347" y="58" fill="#38bdf8" fontSize="9.5" fontFamily="var(--mono)" textAnchor="middle" fontWeight="600">ELEVATOR</text>

        {/* A* Route */}
        <path
          d="M 50 100 L 105 100 L 105 52 L 210 52 L 210 32 L 320 32"
          stroke="url(#route-gradient-clean)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow-filter-clean)"
        />

        {/* Waypoint Nodes */}
        <circle cx="50" cy="100" r="4" fill="#10b981" />
        <circle cx="105" cy="100" r="3" fill="#ffffff" />
        <circle cx="105" cy="52" r="3" fill="#ffffff" />
        <circle cx="210" cy="52" r="3" fill="#ffffff" />
        <circle cx="210" cy="32" r="3" fill="#ffffff" />
        <circle cx="320" cy="32" r="4" fill="#38bdf8" />

        {/* AMR Autonomous Cart */}
        <g transform="translate(150, 46)">
          <circle cx="6" cy="6" r="9" fill="rgba(184, 255, 77, 0.18)" />
          <circle cx="6" cy="6" r="4" fill="#b8ff4d" />
        </g>
      </svg>
    </div>
  );
}

export function AINewsVisual() {
  return (
    <div className="project-custom-visual ai-news-visual" aria-hidden="true">
      <div className="visual-grid-bg" />

      {/* Clean Minimal Header */}
      <div className="visual-header-minimal">
        <div className="visual-title-badge">
          <BrainCircuit size={12} className="text-accent" />
          <span>AI News Summarizer</span>
        </div>
        <span className="visual-sub-tag">NLP Pipeline</span>
      </div>

      {/* Clean Workflow Pipeline */}
      <div className="nlp-clean-workflow">
        {/* Step 1: Input Document */}
        <div className="nlp-flow-step">
          <div className="nlp-step-icon-box">
            <span className="doc-icon-line w-full" />
            <span className="doc-icon-line w-3-4" />
            <span className="doc-icon-line w-1-2" />
          </div>
          <span className="nlp-step-label">Raw Articles</span>
        </div>

        {/* Connector */}
        <div className="nlp-flow-connector">
          <span className="flow-line" />
          <span className="flow-dot" />
        </div>

        {/* Step 2: Processing Engine */}
        <div className="nlp-flow-engine">
          <span className="engine-glow" />
          <Sparkles size={14} className="text-accent" />
          <span className="engine-title">spaCy & NLTK</span>
          <span className="engine-sub">NLP Processing</span>
        </div>

        {/* Connector */}
        <div className="nlp-flow-connector">
          <span className="flow-line" />
          <span className="flow-dot" />
        </div>

        {/* Step 3: Analysis Outputs */}
        <div className="nlp-outputs-stack">
          <div className="output-chip">
            <span className="dot emerald" />
            <span>Key Summaries</span>
          </div>
          <div className="output-chip">
            <span className="dot cyan" />
            <span>Named Entities</span>
          </div>
          <div className="output-chip">
            <span className="dot amber" />
            <span>Sentiment Insights</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BeingStrongVisual() {
  return (
    <div className="project-custom-visual fitness-visual" aria-hidden="true">
      <div className="visual-grid-bg" />

      {/* Clean Web App Window Header */}
      <div className="visual-header-minimal">
        <div className="visual-window-dots">
          <span className="win-dot red" />
          <span className="win-dot yellow" />
          <span className="win-dot green" />
          <span className="win-url">the-being-strong-fitness.vercel.app</span>
        </div>
        <span className="visual-sub-tag text-accent">Live Demo ↗</span>
      </div>

      {/* Athletic Web UI Mockup */}
      <div className="fitness-clean-preview">
        {/* Brand Banner */}
        <div className="fitness-hero-bar">
          <div className="brand-logo-wrap">
            <Dumbbell size={13} className="text-accent" />
            <span className="brand-name">BEINGSTRONG FITNESS</span>
          </div>
          <span className="brand-pill">Web Platform</span>
        </div>

        {/* Modern Athletic Cards Preview */}
        <div className="fitness-cards-row">
          <div className="fitness-preview-card">
            <span className="card-top-tag">Next.js 15</span>
            <h5 className="preview-card-title">Dark Athletic UI</h5>
            <span className="preview-card-sub">Modern Design System</span>
          </div>

          <div className="fitness-preview-card">
            <span className="card-top-tag">Framer Motion</span>
            <h5 className="preview-card-title">Responsive Flow</h5>
            <span className="preview-card-sub">Interactive Motion</span>
          </div>

          <div className="fitness-preview-card">
            <span className="card-top-tag">Tailwind CSS</span>
            <h5 className="preview-card-title">Modular Layout</h5>
            <span className="preview-card-sub">Clean Architecture</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectVisual({ slug }) {
  switch (slug) {
    case "smart-warehouse":
      return <WarehouseVisual />;
    case "ai-news-summarizer":
      return <AINewsVisual />;
    case "beingstrong-fitness":
      return <BeingStrongVisual />;
    default:
      return <WarehouseVisual />;
  }
}
