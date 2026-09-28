"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * First-visit loader. It is rendered on the server so it covers the page from the very first
 * paint; returning visitors (same session) never see it because the inline script in
 * app/layout.js sets html[data-visited], which hides it via CSS before paint.
 */
export default function Preloader() {
  const rootRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem("devlux-visited")) return;

    const root = rootRef.current;
    const html = document.documentElement;
    html.classList.add("overflow-hidden");

    const counter = { value: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        html.classList.remove("overflow-hidden");
        sessionStorage.setItem("devlux-visited", "1");
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.6,
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = String(Math.floor(counter.value)).padStart(3, "0");
        }
      },
    })
      .to(barRef.current, { scaleX: 1, duration: 1.6 }, "<")
      .to(root, { yPercent: -100, duration: 0.9, ease: "power4.inOut", delay: 0.15 })
      .set(root, { display: "none" });

    return () => {
      tl.kill();
      html.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="preloader fixed inset-0 z-300 flex flex-col items-center justify-center gap-8 bg-ink"
    >
      <div className="font-display text-2xl tracking-tightest text-bone md:text-3xl">
        Team Devlux
      </div>
      <div className="w-[220px] md:w-[320px]">
        <div className="h-px w-full overflow-hidden bg-line">
          <div
            ref={barRef}
            className="h-full w-full origin-left bg-signal"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
      <div ref={countRef} className="font-mono text-sm text-mute">
        000
      </div>
    </div>
  );
}
