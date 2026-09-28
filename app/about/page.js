import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import MagneticButton from "@/components/MagneticButton";
import TeamList from "@/components/TeamList";
import { aboutData } from "@/data/about";
import ArrowUpRight from "@/components/ArrowUpRight";

export const metadata = {
  title: "About",
  description:
    "Team Devlux is a small web design and development studio working with brands and businesses across 35+ industries since 2019.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="mb-6 block font-mono text-xs uppercase tracking-wide text-mute">
            {aboutData.hero.eyebrow}
          </span>
          <SplitHeading
            lines={aboutData.hero.heading}
            as="h1"
            className="font-display text-clamp-hero leading-[0.98] tracking-tightest text-bone"
          />
          <Reveal delay={0.3} as="p" className="mt-8 max-w-lg text-base leading-relaxed text-mute md:text-lg">
            {aboutData.hero.sub}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[280px_1fr] md:gap-16">
          <Reveal as="div">
            <span className="text-xs font-medium uppercase text-signal2">
              {aboutData.story.label}
            </span>
          </Reveal>
          <div>
            <Reveal as="h2" className="font-display text-clamp-lg leading-[1.1] tracking-tightest text-bone">
              {aboutData.story.heading}
            </Reveal>
            <div className="mt-8 flex flex-col gap-5">
              {aboutData.story.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08} as="p" className="max-w-xl text-base leading-relaxed text-mute">
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {aboutData.stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal as="span" className="text-xs font-medium uppercase text-signal2">
            {aboutData.values.label}
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {aboutData.values.items.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} as="div" className="border-t border-line pt-6">
                <h3 className="font-display text-2xl tracking-tight text-bone">{v.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal as="div" className="max-w-xl">
            <span className="text-xs font-medium uppercase text-signal2">
              {aboutData.team.label}
            </span>
            <h2 className="mt-4 font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
              {aboutData.team.heading}
            </h2>
          </Reveal>
          <div className="mt-14">
            <TeamList
              members={aboutData.team.members}
              hintDesktop={aboutData.team.hintDesktop}
              hintMobile={aboutData.team.hintMobile}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10">
          <Reveal as="h2" className="max-w-2xl font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
            {aboutData.cta.heading}
          </Reveal>
          <Reveal delay={0.1} as="p" className="max-w-md text-base text-mute">
            {aboutData.cta.sub}
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href={aboutData.cta.button.href}>
              {aboutData.cta.button.label}
              <ArrowUpRight />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
