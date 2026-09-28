// components/ProjectCard.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ArrowUpRight from "@/components/ArrowUpRight";

export default function ProjectCard({ project, size = "regular" }) {
  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const [active, setActive] = useState(false);
  const [canHover, setCanHover] = useState(true);

  const hasImage = Boolean(project.image);
  const hasVideo = Boolean(project.video);
  const hasBoth = hasImage && hasVideo;
  const href = project.url || project.link;

  // Detect hover-capable devices (desktop) vs touch (mobile/tablet)
  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  // Touch devices: activate the video while the card is in view
  useEffect(() => {
    if (!hasBoth || canHover || !mediaRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.6 }
    );
    observer.observe(mediaRef.current);
    return () => observer.disconnect();
  }, [hasBoth, canHover]);

  // Play / pause the video whenever `active` changes
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !hasBoth) return;

    if (active) {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [active, hasBoth]);

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Visit ${project.name}`,
      }
    : {};

  return (
    <article
      data-cursor="hover"
      className={`group relative ${size === "large" ? "md:col-span-2" : ""}`}
    >
      <Wrapper {...wrapperProps} className="flex flex-col gap-5">
        <div
          ref={mediaRef}
          className="relative w-full overflow-hidden rounded-2xl bg-panel"
          onMouseEnter={hasBoth && canHover ? () => setActive(true) : undefined}
          onMouseLeave={hasBoth && canHover ? () => setActive(false) : undefined}
        >
          {/* Zoom layer: image + video scale together */}
          <div className="relative w-full transition-transform duration-700 ease-out overflow-hidden">
            {/* Image: always visible, keeps the card's natural height */}
            {hasImage && (
              <Image
                src={project.image}
                alt={project.name}
                width={1600}
                height={1200}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full"
              />
            )}

            {/* Video + image: overlay that fades in when active */}
            {hasBoth && (
              <video
                ref={videoRef}
                src={project.video}
                muted
                loop
                playsInline
                preload="metadata"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  active ? "opacity-100" : "opacity-0"
                }`}
              />
            )}

            {/* Video only: autoplays */}
            {hasVideo && !hasImage && (
              <video
                src={project.video}
                poster={project.poster}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="h-auto w-full"
              />
            )}
          </div>

          {!hasImage && !hasVideo && (
            <div className="flex aspect-[4/3] w-full items-center justify-center text-sm text-mute">
              No preview
            </div>
          )}

          {href && (
            <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-bone text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight />
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl text-bone">{project.name}</h3>
            <p className="mt-1 text-sm text-mute line-clamp-2">{project.description}</p>
          </div>
          <div className="shrink-0 text-right text-xs text-mute">
            <div>{project.category}</div>
            <div>{project.year}</div>
          </div>
        </div>
      </Wrapper>
    </article>
  );
}