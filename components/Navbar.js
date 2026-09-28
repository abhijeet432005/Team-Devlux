"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { nav, site } from "@/data/site";
import Image from "next/image";

const CLOSED = "inset(0% 0% 100% 0%)";
const OPEN = "inset(0% 0% 0% 0%)";

export default function Navbar() {
  const pathname = usePathname();
  return <NavbarForRoute key={pathname} pathname={pathname} />;
}

function NavbarForRoute({ pathname }) {
  const [hidden, setHidden] = useState(false);

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const wasOpen = useRef(false);

  // Hide the header on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastScrollY && y > 160);
      lastScrollY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close automatically if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => () => {
    document.documentElement.classList.remove("overflow-hidden");
    window.__lenis?.start();
  }, []);

  // Escape closes the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Open / close animation
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (open) {
      wasOpen.current = true;
      document.documentElement.classList.add("overflow-hidden");
      window.__lenis?.stop();
      gsap.to(menu, { clipPath: OPEN, duration: 0.7, ease: "power4.inOut", overwrite: true });
      gsap.fromTo(
        ".mobile-nav-link",
        { yPercent: 110 },
        { yPercent: 0, duration: 0.7, ease: "power3.out", stagger: 0.07, delay: 0.25 }
      );
    } else if (wasOpen.current) {
      wasOpen.current = false;
      document.documentElement.classList.remove("overflow-hidden");
      window.__lenis?.start();
      gsap.to(menu, { clipPath: CLOSED, duration: 0.55, ease: "power3.inOut", overwrite: true });
    }
  }, [open]);

  // The header must stay on screen whenever the menu is open, otherwise the
  // close button (which lives inside it) could scroll away.
  const headerHidden = hidden && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-140 transition-transform duration-500 ease-signature ${headerHidden ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 ">
          <Link href="/" onClick={() => setOpen(false)} data-cursor="hover" className="text-bone">
            {/* <Logo className="h-6 w-auto md:h-7" /> */}
            <Image src="/Logo.png" width={120} height={100} className=" object-cover" alt="logo"/>
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="hover"
                className={`text-sm font-medium transition-colors ${pathname === item.href ? "text-bone" : "text-mute hover:text-bone"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact"
              data-cursor="hover"
              className="hidden items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:border-bone md:inline-flex"
            >
              Start a project
            </Link>

            <button
              type="button"
              data-cursor="hover"
              onClick={() => setOpen(!open)}
              className="relative z-145 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span
                className={`h-px w-6 bg-bone transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
              />
              <span
                className={`h-px w-6 bg-bone transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        ref={menuRef}
        inert={!open}
        className="fixed inset-0 z-135 flex flex-col justify-center bg-ink px-6 md:hidden"
        style={{ clipPath: CLOSED, pointerEvents: open ? "auto" : "none" }}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {nav.map((item, i) => (
            <div key={item.href} className="overflow-hidden py-2">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-link block font-display text-5xl tracking-tightest text-bone"
              >
                <span className="mr-3 align-top font-mono text-sm text-mute">0{i + 1}</span>
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-12 flex flex-col gap-1 text-sm text-mute">
          <span>{site.email}</span>
          <span>{site.location}</span>
        </div>
      </div>
    </>
  );
}
