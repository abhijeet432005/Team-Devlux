"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import gsap from "gsap";

/**
 * Team list.
 *  - Mouse devices: hovering a row reveals that member's photo, which follows the cursor
 *    (smoothed, with a little velocity tilt). Moving to another row swaps the photo.
 *  - Touch devices: tapping a row expands it like an FAQ item, revealing photo + details.
 */
export default function TeamList({ members, hintDesktop, hintMobile }) {
  // Hydration-safe "are we in the browser" flag (portal target only exists client-side)
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [active, setActive] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const floatRef = useRef(null);
  const imgRefs = useRef([]);
  const visible = useRef(false);
  const canHover = useRef(false);
  const zCounter = useRef(1);

  // Cursor-follow setup
  useEffect(() => {
    if (!mounted) return;

    const mq = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)");
    canHover.current = mq.matches;
    const onMq = (e) => {
      canHover.current = e.matches;
    };
    mq.addEventListener("change", onMq);

    const el = floatRef.current;
    gsap.set(el, { xPercent: -50, yPercent: -50, x: 0, y: 0, scale: 0.6, opacity: 0 });

    const xTo = gsap.quickTo(el, "x", { duration: 0.7, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.7, ease: "power3.out" });
    const rotTo = gsap.quickTo(el, "rotation", { duration: 0.8, ease: "power3.out" });

    let rotTimer;
    const onMove = (e) => {
      if (!visible.current) return;
      xTo(e.clientX);
      yTo(e.clientY);
      rotTo(gsap.utils.clamp(-14, 14, e.movementX * 0.6));
      clearTimeout(rotTimer);
      rotTimer = setTimeout(() => rotTo(0), 90);
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      mq.removeEventListener("change", onMq);
      window.removeEventListener("mousemove", onMove);
      clearTimeout(rotTimer);
    };
  }, [mounted]);

  // Reveal the active member's photo (newest image stacks on top with a wipe)
  useEffect(() => {
    if (!mounted) return;
    const node = imgRefs.current[active];
    if (!node) return;
    zCounter.current += 1;
    gsap.set(node, { zIndex: zCounter.current });
    gsap.fromTo(
      node,
      { clipPath: "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power4.out" }
    );
    const img = node.querySelector("img");
    if (img) gsap.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 0.9, ease: "power3.out" });
  }, [active, mounted]);

  const show = (i, e) => {
    if (!canHover.current) return;
    const el = floatRef.current;
    if (!visible.current) {
      visible.current = true;
      gsap.set(el, { x: e.clientX, y: e.clientY });
      gsap.to(el, { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out", overwrite: "auto" });
    }
    setActive(i);
  };

  const hide = () => {
    if (!visible.current) return;
    visible.current = false;
    gsap.to(floatRef.current, {
      opacity: 0,
      scale: 0.6,
      duration: 0.35,
      ease: "power3.in",
      overwrite: "auto",
    });
  };

  const toggle = (i) => {
    if (canHover.current) return;
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const floating = (
    <div
      ref={floatRef}
      aria-hidden="true"
      className="team-floating pointer-events-none fixed top-0 left-0 z-60 h-[340px] w-[260px] overflow-hidden rounded-xl opacity-0 shadow-2xl"
    >
      {members.map((m, i) => (
        <div
          key={m.name}
          ref={(node) => {
            imgRefs.current[i] = node;
          }}
          className="absolute inset-0"
          style={{ clipPath: "inset(100% 0% 0% 0%)" }}
        >
          <Image src={m.image} alt="" fill sizes="260px" unoptimized className="object-cover" />
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <p className="mb-8 text-sm text-mute">
        <span className="team-hint-desktop">{hintDesktop}</span>
        <span className="team-hint-mobile">{hintMobile}</span>
      </p>

      <ul className="team-list border-t border-line" onMouseLeave={hide}>
        {members.map((m, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={m.name} className="team-row border-b border-line">
              <button
                type="button"
                onMouseEnter={(e) => show(i, e)}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="team-row-btn grid w-full grid-cols-[1fr_auto] items-center gap-4 py-7 text-left"
              >
                <span>
                  <span className="team-name block font-display text-3xl tracking-tightest text-bone md:text-5xl lg:text-6xl">
                    {m.name}
                  </span>
                  <span className="team-inline-role mt-1 block text-sm text-mute">{m.role}</span>
                </span>

                <span className="team-cols text-sm text-bone">{m.role}</span>

                <span className="team-cols max-w-sm">
                  <span className="block text-sm leading-relaxed text-mute">{m.work}</span>
                  {/* <span className="mt-2 block text-xs text-mute/70">
                    Worked on {m.projects.join(", ")}
                  </span> */}
                </span>

                <span
                  className={`team-plus text-2xl leading-none text-mute transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              {/* Touch: accordion-style panel */}
              <div
                className="team-mobile-panel grid transition-all duration-500 ease-signature"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="pb-8">
                    <div className="relative aspect-[4/5] w-[70%] max-w-[280px] overflow-hidden rounded-xl">
                      <Image
                        src={m.image}
                        alt={`${m.name}, ${m.role}`}
                        fill
                        sizes="280px"
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-mute">{m.work}</p>
                    <p className="mt-3 text-xs text-mute/70">Worked on {m.projects.join(", ")}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {mounted && createPortal(floating, document.body)}
    </div>
  );
}
