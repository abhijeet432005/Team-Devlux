"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        // A leftover transform on this wrapper would become the containing block
        // for position:fixed descendants, so clear it once the entrance is done.
        onComplete: () => gsap.set(contentRef.current, { clearProps: "transform,opacity" }),
      });
      tl.set(overlayRef.current, { yPercent: 0 })
        .set(contentRef.current, { opacity: 0, y: 24 })
        .to(overlayRef.current, { yPercent: -100, duration: 0.9, delay: 0.05 })
        .to(
          contentRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[150] bg-ink pointer-events-none"
        aria-hidden="true"
      />
      <div ref={contentRef}>{children}</div>
    </>
  );
}
