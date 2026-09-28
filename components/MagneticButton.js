"use client";

import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function MagneticButton({ href, children, className = "", variant = "primary" }) {
  const btnRef = useRef(null);

  const handleMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.35, y: y * 0.5, duration: 0.5, ease: "power3.out" });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  const base =
    "inline-flex items-center gap-3 rounded-full px-7 py-4 font-body text-sm font-medium transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-bone text-ink hover:bg-signal hover:text-white"
      : "border border-line text-bone hover:border-bone";

  return (
    <Link
      href={href}
      ref={btnRef}
      data-cursor="hover"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
