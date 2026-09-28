import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import ProjectCard from "@/components/ProjectCard";
import { workData } from "@/data/work";
import ArrowUpRight from "@/components/ArrowUpRight";

export const metadata = {
  title: "Work",
  description:
    "Selected case studies from Team Devlux — 100+ websites shipped for brands and businesses across fintech, retail, healthcare, and more.",
};

export default function WorkPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="mb-6 block font-mono text-xs uppercase tracking-wide text-mute">
            {workData.hero.eyebrow}
          </span>
          <SplitHeading
            lines={workData.hero.heading}
            as="h1"
            className="font-display text-clamp-hero leading-[0.98] tracking-tightest text-bone"
          />
          <Reveal delay={0.3} as="p" className="mt-8 max-w-lg text-base leading-relaxed text-mute md:text-lg">
            {workData.hero.sub}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
            {workData.projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} size={i % 5 === 0 ? "large" : "regular"} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10">
          <Reveal as="h2" className="max-w-2xl font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
            {workData.cta.heading}
          </Reveal>
          <Reveal delay={0.1} as="p" className="max-w-md text-base text-mute">
            {workData.cta.sub}
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href={workData.cta.button.href}>
              {workData.cta.button.label}
              <ArrowUpRight />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
