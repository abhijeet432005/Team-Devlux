import Link from "next/link";
import Logo from "@/components/Logo";
import { site, footerNav, socials } from "@/data/site";
import ArrowUpRight from "@/components/ArrowUpRight";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink px-6 pt-20 pb-8 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 border-b border-line pb-14 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-clamp-xl leading-[1.02] tracking-tightest text-bone">
            Let&rsquo;s build your next site.
          </h2>
          <Link
            href="/contact"
            data-cursor="hover"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-signal hover:text-white"
          >
            Start a project
            <ArrowUpRight />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <Logo className="h-6 w-auto text-bone" />
            <p className="max-w-[220px] text-sm leading-relaxed text-mute">
              A studio designing and building websites for brands and businesses.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase text-mute">Sitemap</span>
            {footerNav.sitemap.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="hover"
                className="text-sm text-bone/80 hover:text-bone transition-colors w-fit"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase text-mute">Contact</span>
            <a href={`mailto:${site.email}`} data-cursor="hover" className="text-sm text-bone/80 hover:text-bone transition-colors w-fit">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} data-cursor="hover" className="text-sm text-bone/80 hover:text-bone transition-colors w-fit">
              {site.phone}
            </a>
            <span className="text-sm text-bone/80">{site.location}</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase text-mute">Follow</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="text-sm text-bone/80 hover:text-bone transition-colors w-fit"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-mute md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.label} href={item.href} data-cursor="hover" className="hover:text-bone transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
