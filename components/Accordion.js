"use client";

import { useState } from "react";

export default function Accordion({ items, align = "center" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const center = align === "center";

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              data-cursor="hover"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`relative flex w-full items-center py-6 md:py-7 ${
                center ? "justify-center px-10 text-center" : "justify-between gap-6 text-left"
              }`}
            >
              <span className="font-display text-lg text-bone md:text-2xl">{item.q}</span>
              <span
                className={`shrink-0 text-2xl leading-none text-mute transition-transform duration-300 ${
                  center ? "absolute right-0 top-1/2 -translate-y-1/2" : ""
                } ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-500 ease-signature"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-2xl pb-7 text-sm leading-relaxed text-mute md:text-base ${
                    center ? "mx-auto text-center" : ""
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
