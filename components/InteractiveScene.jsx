"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, Terminal, Network, ShieldCheck } from "lucide-react";

export default function InteractiveScene() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [activeTelemetry, setActiveTelemetry] = useState({
    fps: "60",
    nodes: "28",
    status: "SYNCHRONIZED"
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    // 3D Nodes generation
    const nodeCount = isMobile ? 16 : 28;
    const sphereRadius = Math.min(width, height) * 0.36;

    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      nodes.push({
        x: sphereRadius * Math.cos(theta) * Math.sin(phi),
        y: sphereRadius * Math.sin(theta) * Math.sin(phi),
        z: sphereRadius * Math.cos(phi),
        pulse: Math.random() * Math.PI * 2,
        baseSize: Math.random() * 2.2 + 2
      });
    }

    // Data pulses traveling along connections
    const pulses = [];
    const maxPulses = isMobile ? 4 : 8;

    let rotX = 0.002;
    let rotY = 0.003;
    let targetRotX = 0.002;
    let targetRotY = 0.003;
    let angleX = 0;
    let angleY = 0;

    const handleMouseMove = (e) => {
      if (prefersReducedMotion || isMobile) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotX = mouseY * 0.008;
      targetRotY = mouseX * 0.008;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationId;
    let lastTime = performance.now();
    let frameCount = 0;

    const render = (time) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setActiveTelemetry((prev) => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (time - lastTime)).toString()
        }));
        frameCount = 0;
        lastTime = time;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      if (!prefersReducedMotion) {
        rotX += (targetRotX - rotX) * 0.05;
        rotY += (targetRotY - rotY) * 0.05;
        angleX += rotX + 0.0015;
        angleY += rotY + 0.0025;
      }

      // Project 3D nodes
      const projected = nodes.map((node) => {
        // Rotate around Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.x * sinY + node.z * cosY;

        // Rotate around X
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = node.y * sinX + z1 * cosX;

        // Perspective scale
        const focalLength = sphereRadius * 2.2;
        const scale = focalLength / (focalLength + z2);
        const alpha = Math.max(0.15, Math.min(1, (z2 + sphereRadius) / (2 * sphereRadius)));

        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          scale,
          alpha,
          z: z2,
          pulse: node.pulse,
          baseSize: node.baseSize
        };
      });

      // Draw Orbiting Rings in 3D
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angleY * 0.5);

      // Outer ring
      ctx.beginPath();
      ctx.ellipse(0, 0, sphereRadius * 1.15, sphereRadius * 0.42, angleX, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(184, 255, 77, 0.14)";
      ctx.lineWidth = 1 * window.devicePixelRatio;
      ctx.setLineDash([4 * window.devicePixelRatio, 8 * window.devicePixelRatio]);
      ctx.stroke();

      // Inner subtle ring
      ctx.beginPath();
      ctx.ellipse(0, 0, sphereRadius * 0.85, sphereRadius * 0.3, -angleX * 0.8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.setLineDash([2 * window.devicePixelRatio, 6 * window.devicePixelRatio]);
      ctx.stroke();
      ctx.restore();

      // Draw interconnecting network lines
      const maxDistance = sphereRadius * (isMobile ? 0.9 : 0.8);
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.35 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(184, 255, 77, ${lineAlpha})`;
            ctx.lineWidth = 0.85 * window.devicePixelRatio;
            ctx.setLineDash([]);
            ctx.stroke();

            // Spawn data pulse packet
            if (!prefersReducedMotion && pulses.length < maxPulses && Math.random() < 0.004) {
              pulses.push({
                fromIdx: i,
                toIdx: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.012
              });
            }
          }
        }
      }

      // Update & draw data pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const p1 = projected[pulse.fromIdx];
        const p2 = projected[pulse.toIdx];
        if (!p1 || !p2) {
          pulses.splice(p, 1);
          continue;
        }

        const px = p1.x + (p2.x - p1.x) * pulse.progress;
        const py = p1.y + (p2.y - p1.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2 * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#b8ff4d";
        ctx.shadowBlur = 8 * window.devicePixelRatio;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes
      projected.sort((a, b) => a.z - b.z);
      projected.forEach((node) => {
        const size = node.baseSize * node.scale * window.devicePixelRatio;

        // Glow ring around prominent nodes
        if (node.scale > 1.05) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, size * 2.4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(184, 255, 77, ${node.alpha * 0.25})`;
          ctx.lineWidth = 1 * window.devicePixelRatio;
          ctx.stroke();
        }

        // Central node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle =
          node.scale > 1.1
            ? `rgba(184, 255, 77, ${node.alpha})`
            : `rgba(230, 235, 245, ${node.alpha * 0.85})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="interactive-scene-container" aria-hidden="true">
      <div className="scene-noise-overlay" />
      <canvas ref={canvasRef} className="scene-canvas" />

      {/* Futuristic Telemetry HUD overlays */}
      <div className="telemetry-badge top-left">
        <Cpu size={13} className="telemetry-icon" />
        <span className="telemetry-label">SYSTEM</span>
        <span className="telemetry-value">AI_ROUTING_ONLINE</span>
      </div>

      <div className="telemetry-badge top-right">
        <Network size={13} className="telemetry-icon" />
        <span className="telemetry-label">NODES</span>
        <span className="telemetry-value">{activeTelemetry.nodes} ACTIVE</span>
      </div>

      <div className="telemetry-badge bottom-left">
        <Terminal size={13} className="telemetry-icon" />
        <span className="telemetry-label">CORE</span>
        <span className="telemetry-value">A*_HEURISTIC</span>
      </div>

      <div className="telemetry-badge bottom-right">
        <ShieldCheck size={13} className="telemetry-icon" />
        <span className="telemetry-label">AUDIT</span>
        <span className="telemetry-value">VERIFIED</span>
      </div>
    </div>
  );
}
