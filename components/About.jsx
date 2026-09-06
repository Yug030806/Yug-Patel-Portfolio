"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  GitBranch,
  Presentation,
  MapPin,
  GraduationCap,
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Systems",
    podClass: "ai-pod",
    description:
      "Exploring applied AI, natural language processing, semantic text summarization, and intelligent automation systems."
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    podClass: "web-pod",
    description:
      "Building responsive, high-performance web applications using modern Next.js, React, Tailwind CSS and Supabase."
  },
  {
    icon: GitBranch,
    title: "Algorithmic Problem Solving",
    podClass: "algo-pod",
    description:
      "Designing graph traversals, A* pathfinding heuristics, multi-floor routing coordination, and state logic."
  },
  {
    icon: Presentation,
    title: "Technical Research & Presentation",
    podClass: "speak-pod",
    description:
      "Synthesizing complex machine learning concepts, evaluating model pipelines, and communicating technical findings clearly."
  }
];

const MINI_FACTS = [
  {
    icon: GraduationCap,
    label: "STUDIES",
    val: "Computer Engineering"
  },
  {
    icon: MapPin,
    label: "INSTITUTION",
    val: "SVIT, Vasad"
  },
  {
    icon: Sparkles,
    label: "STATUS",
    val: "Open for Internships"
  },
  {
    icon: Layers,
    label: "CORE FOCUS",
    val: "AI • Full-Stack • Solutions"
  }
];

export default function About() {
  return (
    <section id="about" className="section-shell section-padding about-section">
      <div className="section-header-eyebrow">
        <span className="eyebrow-rule" />
        <span className="eyebrow-text">01 / ABOUT</span>
      </div>

      <div className="about-grid-layout">
        {/* Left Column: Original narrative & factual mini-facts */}
        <div className="about-intro-col">
          <h2 className="section-heading-large">
            Curious by nature.
            <br />
            <span className="text-accent">Builder by choice.</span>
          </h2>

          <div className="about-narrative">
            <p>
              I&apos;m a second-year <strong>Computer Engineering student</strong> at SVIT, Vasad,
              who enjoys turning ideas into practical software. My interests sit at the intersection of{" "}
              <strong>AI, intelligent systems and full-stack web development.</strong>
            </p>
            <p>
              I learn by building — from warehouse automation and NLP applications
              to polished web experiences. I&apos;m especially interested in understanding
              how technology can solve real-world problems.
            </p>
          </div>

          {/* Clean Glassmorphic Highlights */}
          <div className="about-quick-metrics">
            {MINI_FACTS.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="screenshot-glass-chip">
                  <div className="glass-icon-pod chip-icon-pod">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <span className="chip-label">{fact.label}</span>
                    <span className="chip-val">{fact.val}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 4 Focus Area Glassmorphism Cards */}
        <div className="about-cards-col">
          {/* Ambient background glow */}
          <div className="about-ambient-glow" />

          <div className="screenshot-glass-grid">
            {FOCUS_AREAS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="screenshot-glass-card hoverable"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <div className="glass-card-header">
                    <div className="glass-header-left">
                      <div className={`glass-icon-pod ${item.podClass}`}>
                        <Icon size={18} />
                      </div>
                      <h4 className="glass-card-title">{item.title}</h4>
                    </div>
                    <ChevronRight size={16} className="glass-chevron" />
                  </div>

                  <p className="glass-card-body-desc">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
