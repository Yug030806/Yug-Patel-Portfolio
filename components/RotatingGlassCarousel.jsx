"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Cpu,
  FileCode,
  Code2,
  GitBranch,
  Layers,
  Atom,
  Palette,
  Globe,
  Sparkles,
  BrainCircuit,
  Network,
  Wrench,
  BookOpen,
  Server,
  Zap,
  Database,
  Workflow,
  Github,
  Terminal,
  Rocket
} from "lucide-react";

// Icon mapping
const ICON_MAP = {
  Cpu,
  FileCode,
  Code2,
  GitBranch,
  Layers,
  Atom,
  Palette,
  Globe,
  Sparkles,
  BrainCircuit,
  Network,
  Wrench,
  BookOpen,
  Server,
  Zap,
  Database,
  Workflow,
  Github,
  Terminal,
  Rocket
};

export default function RotatingGlassCarousel({
  skills = [],
  categoryTitle = "Skills",
  accentColor = "#b8ff4d"
}) {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartAngle = useRef(0);
  const animFrameId = useRef(null);
  const containerRef = useRef(null);

  const count = skills.length;
  const cardWidth = 115;
  const cardHeight = 145;

  // Radius calculation: smooth 3D cylinder proportion
  const radius = Math.max(
    130,
    Math.round((cardWidth / 2) / Math.tan(Math.PI / Math.max(count, 3))) + 18
  );

  // Rotation loop — runs continuously by default
  useEffect(() => {
    let lastTimestamp = performance.now();

    const animate = (now) => {
      const delta = now - lastTimestamp;
      lastTimestamp = now;

      if (!isPaused && !isDragging) {
        // Continuous smooth rotation: ~16 degrees per second
        setCurrentAngle((prev) => (prev + (16 * delta) / 1000) % 360);
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isPaused, isDragging]);

  // Drag to rotate handlers
  const handleMouseDown = useCallback(
    (e) => {
      setIsDragging(true);
      dragStartX.current = e.clientX;
      dragStartAngle.current = currentAngle;
    },
    [currentAngle]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX.current;
      setCurrentAngle(dragStartAngle.current - dx * 0.4);
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback(
    (e) => {
      if (e.touches.length === 1) {
        setIsDragging(true);
        dragStartX.current = e.touches[0].clientX;
        dragStartAngle.current = currentAngle;
      }
    },
    [currentAngle]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - dragStartX.current;
      setCurrentAngle(dragStartAngle.current - dx * 0.4);
    },
    [isDragging]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleMouseUp, handleTouchEnd]);

  return (
    <div
      ref={containerRef}
      className="glass-cylinder-stage"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (!isDragging) setIsPaused(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      role="region"
      aria-label={`${categoryTitle} 3D Rotating Glass Carousel`}
    >
      {/* Background subtle radial aura */}
      <div
        className="cylinder-radial-glow"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor}18 0%, transparent 68%)`
        }}
      />

      {/* Perspective depth grid ring */}
      <div className="cylinder-depth-grid" />

      {/* 3D Viewport */}
      <div className="cylinder-viewport">
        <div
          className="cylinder-hub"
          style={{
            transform: `rotateX(-10deg) rotateY(${currentAngle}deg)`,
            transition: isDragging ? "none" : "transform 0.05s linear"
          }}
        >
          {skills.map((skill, index) => {
            const angle = (360 / count) * index;
            const IconComponent = ICON_MAP[skill.iconName] || Terminal;

            return (
              <div
                key={skill.name}
                className="glass-cylinder-card"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  borderColor: "rgba(255, 255, 255, 0.16)"
                }}
                title={skill.name}
              >
                {/* Specular glass reflection */}
                <div className="glass-card-reflection" />

                {/* Glowing Icon Halo */}
                <div
                  className="glass-card-icon-halo"
                  style={{
                    color: skill.color,
                    background: `${skill.color}15`,
                    borderColor: `${skill.color}45`
                  }}
                >
                  <IconComponent size={24} />
                </div>

                {/* Skill Name */}
                <span className="glass-card-title">{skill.name}</span>

                {/* Skill Tag / Subtitle */}
                <span className="glass-card-tag">{skill.tag}</span>

                {/* Subtle corner indicator dot */}
                <div
                  className="glass-card-indicator"
                  style={{ background: skill.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
