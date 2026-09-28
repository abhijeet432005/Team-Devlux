"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatCounter({ value, suffix = "", label }) {
  const numRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 100%",
          once: true,
        },
        onUpdate: () => {
          if (numRef.current) numRef.current.textContent = Math.floor(counter.val);
        },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [value]);

  return (
    <div ref={wrapRef} className="flex flex-col gap-2">
      <div className="font-display text-4xl md:text-5xl tracking-tightest text-bone">
        <span ref={numRef}>0</span>
        {suffix}
      </div>
      <div className="text-sm text-mute">{label}</div>
    </div>
  );
}
