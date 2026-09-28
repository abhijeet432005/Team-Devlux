"use client";

import { useState } from "react";
import { contactData } from "@/data/contact";
import ArrowUpRight from "@/components/ArrowUpRight";

export default function ContactForm() {
  const [budget, setBudget] = useState(contactData.budgetRanges[0]);
  const [timeline, setTimeline] = useState(contactData.timelines[0]);
  const [status, setStatus] = useState("idle");

  // NOTE: this demo submits nowhere. Wire this up to an API route,
  // or a service like Formspree / Resend, before going live.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[280px] flex-col justify-center gap-3 border-t border-line pt-10">
        <h3 className="font-display text-3xl text-bone">Message sent.</h3>
        <p className="max-w-sm text-sm text-mute">
          Thanks for reaching out — we reply to every inquiry within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-line pt-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase text-mute">Name</span>
          <input
            required
            type="text"
            name="name"
            className="border-b border-line bg-transparent py-3 text-bone outline-none focus:border-bone"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase text-mute">Email</span>
          <input
            required
            type="email"
            name="email"
            className="border-b border-line bg-transparent py-3 text-bone outline-none focus:border-bone"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase text-mute">Company</span>
          <input
            type="text"
            name="company"
            className="border-b border-line bg-transparent py-3 text-bone outline-none focus:border-bone"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase text-mute">Website (if any)</span>
          <input
            type="text"
            name="website"
            className="border-b border-line bg-transparent py-3 text-bone outline-none focus:border-bone"
          />
        </label>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <span className="text-xs uppercase text-mute">Budget</span>
        <div className="flex flex-wrap gap-3">
          {contactData.budgetRanges.map((b) => (
            <button
              key={b}
              type="button"
              data-cursor="hover"
              onClick={() => setBudget(b)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                budget === b
                  ? "border-bone bg-bone text-ink"
                  : "border-line text-mute hover:text-bone"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <span className="text-xs uppercase text-mute">Timeline</span>
        <div className="flex flex-wrap gap-3">
          {contactData.timelines.map((t) => (
            <button
              key={t}
              type="button"
              data-cursor="hover"
              onClick={() => setTimeline(t)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                timeline === t
                  ? "border-bone bg-bone text-ink"
                  : "border-line text-mute hover:text-bone"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <label className="mt-10 flex flex-col gap-2">
        <span className="text-xs uppercase text-mute">Tell us about the project</span>
        <textarea
          required
          name="message"
          rows={4}
          className="resize-none border-b border-line bg-transparent py-3 text-bone outline-none focus:border-bone"
        />
      </label>

      <button
        type="submit"
        data-cursor="hover"
        disabled={status === "sending"}
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-signal hover:text-white disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
        <ArrowUpRight />
      </button>
    </form>
  );
}
