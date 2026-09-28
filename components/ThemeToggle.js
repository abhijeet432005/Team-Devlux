"use client";

const THEME_KEY = "devlux-theme";

export default function ThemeToggle({ className = "" }) {
  const handleToggle = (e) => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";

    const apply = () => {
      root.dataset.theme = next;
      root.style.colorScheme = next;
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (_) {
        /* storage unavailable — theme just won't persist */
      }
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fallback: no View Transitions support (Firefox, older Safari) -> soft color fade
    if (reduced || typeof document.startViewTransition !== "function") {
      if (!reduced) {
        root.classList.add("theme-fade");
        window.setTimeout(() => root.classList.remove("theme-fade"), 650);
      }
      apply();
      return;
    }

    // Circle expands from the button and repaints the page in the new theme
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(apply);

    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 800,
          easing: "cubic-bezier(0.76, 0, 0.24, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      data-cursor="hover"
      aria-label="Toggle light / dark theme"
      className={`theme-toggle relative h-10 w-10 shrink-0 rounded-full border border-line text-bone transition-colors hover:border-bone ${className}`}
    >
      <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
