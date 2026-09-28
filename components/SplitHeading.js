"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplitHeading({
  lines,
  as: Tag = "h1",
  className = "",
  lineClassName = "",
  delay = 0.15,
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current.querySelectorAll(".split-line-inner"),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.09,
          delay,
          ease: "power4.out",
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, [delay]);

  return (
    <Tag ref={rootRef} className={className}>
      {lines.map((line, i) => (
        <span className={`reveal-line block ${lineClassName}`} key={i}>
          <span className="split-line-inner block">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
