"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  target,
  rel,
  download,
  strength = 0.28,
  ariaLabel
}) {
  const ref = useRef(null);
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanAnimate(finePointer && !prefersReducedMotion);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 160, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!canAnimate || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Restrained pull (max offset around 15px)
    const pullX = Math.max(-16, Math.min(16, distanceX * strength));
    const pullY = Math.max(-16, Math.min(16, distanceY * strength));

    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    if (!canAnimate) return;
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      download={download}
      aria-label={ariaLabel}
      className={`magnetic-btn-wrap ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={canAnimate ? { x: springX, y: springY } : undefined}
    >
      {children}
    </Component>
  );
}
