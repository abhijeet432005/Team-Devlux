import Link from "next/link";
import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import Marquee from "@/components/Marquee";
import StatCounter from "@/components/StatCounter";
import ProjectCard from "@/components/ProjectCard";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialsSection from "@/components/TestimonialsSection";
import Accordion from "@/components/Accordion";
import { homeData } from "@/data/home";
import { workData } from "@/data/work";
import ArrowUpRight from "@/components/ArrowUpRight";

export default function HomePage() {
  const featured = workData.projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-14 pt-40 md:px-10 md:pb-20">
        <div className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-signal/20 blur-[140px] md:h-[640px] md:w-[640px]" />

        <div className="relative mx-auto w-full max-w-[1440px]">
          <span className="mb-6 block font-mono text-xs uppercase tracking-wide text-mute">
            {homeData.hero.eyebrow}
          </span>

          <SplitHeading
            lines={homeData.hero.heading}
            as="h1"
            className="font-display text-clamp-hero leading-[0.98] tracking-tightest text-bone"
          />

          <div className="mt-10 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-mute md:text-lg">
              {homeData.hero.sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton href={homeData.hero.cta.href}>
                {homeData.hero.cta.label}
                <ArrowUpRight />
              </MagneticButton>
              <MagneticButton href={homeData.hero.secondaryCta.href} variant="secondary">
                {homeData.hero.secondaryCta.label}
              </MagneticButton>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 md:mt-20 md:grid-cols-4">
            {homeData.hero.stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <Marquee items={homeData.marquee} />

      {/* Intro */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[280px_1fr] md:gap-16">
          <Reveal as="div">
            <span className="text-xs font-medium uppercase text-signal2">
              {homeData.intro.label}
            </span>
          </Reveal>
          <div>
            <Reveal as="h2" className="font-display text-clamp-xl leading-[1.08] tracking-tightest text-bone">
              {homeData.intro.heading}
            </Reveal>
            <Reveal delay={0.1} as="p" className="mt-8 max-w-xl text-base leading-relaxed text-mute">
              {homeData.intro.body}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="divide-y divide-line border-t border-line">
            {homeData.services.map((s, i) => (
              <Reveal key={s.index} delay={i * 0.05} as="div">
                <div className="group grid gap-4 py-10 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-10">
                  <h3 className="font-display text-3xl tracking-tight text-bone transition-colors duration-300 group-hover:text-signal2 md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-mute md:text-base">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal as="div">
              <span className="text-xs font-medium uppercase text-signal2">
                {homeData.featuredWork.label}
              </span>
              <h2 className="mt-4 font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
                {homeData.featuredWork.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/work"
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-sm font-medium text-bone underline decoration-line underline-offset-4 hover:decoration-bone"
              >
                View all work
                <ArrowUpRight />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal as="div" className="max-w-xl">
            <span className="text-xs font-medium uppercase text-signal2">
              {homeData.process.label}
            </span>
            <h2 className="mt-4 font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
              {homeData.process.heading}
            </h2>
          </Reveal>
          <ProcessSteps steps={homeData.process.steps} />
        </div>
      </section>

      <TestimonialsSection
        label={homeData.testimonialsLabel.label}
        heading={homeData.testimonialsLabel.heading}
      />

      {/* FAQ */}
      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal as="div" className="mx-auto max-w-xl text-center">
            <span className="text-xs font-medium uppercase text-signal2">
              {homeData.faq.label}
            </span>
            <h2 className="mt-4 font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
              {homeData.faq.heading}
            </h2>
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={homeData.faq.items} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10">
          <Reveal as="h2" className="max-w-2xl font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
            {homeData.cta.heading}
          </Reveal>
          <Reveal delay={0.1} as="p" className="max-w-md text-base text-mute">
            {homeData.cta.sub}
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href={homeData.cta.button.href}>
              {homeData.cta.button.label}
              <ArrowUpRight />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
