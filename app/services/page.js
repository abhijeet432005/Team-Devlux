import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import Accordion from "@/components/Accordion";
import { servicesData } from "@/data/services";
import ArrowUpRight from "@/components/ArrowUpRight";

export const metadata = {
  title: "Services",
  description:
    "Web design, Next.js development, motion and interaction, SEO, and e-commerce — everything Team Devlux offers for brands and businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="mb-6 block font-mono text-xs uppercase tracking-wide text-mute">
            {servicesData.hero.eyebrow}
          </span>
          <SplitHeading
            lines={servicesData.hero.heading}
            as="h1"
            className="font-display text-clamp-hero leading-[0.98] tracking-tightest text-bone"
          />
          <Reveal delay={0.3} as="p" className="mt-8 max-w-lg text-base leading-relaxed text-mute md:text-lg">
            {servicesData.hero.sub}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {servicesData.list.map((s, i) => (
              <Reveal key={s.index} delay={(i % 2) * 0.06} as="div" className="border-t border-line pt-8">
                <span className="font-mono text-xs text-mute">{s.index}</span>
                <h3 className="mt-4 font-display text-3xl tracking-tight text-bone">{s.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-mute">{s.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-line px-3 py-1 text-xs text-mute"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal as="div" className="max-w-xl">
            <span className="text-xs font-medium uppercase text-signal2">
              {servicesData.engagement.label}
            </span>
            <h2 className="mt-4 font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
              {servicesData.engagement.heading}
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {servicesData.engagement.models.map((m, i) => (
              <Reveal
                key={m.title}
                delay={i * 0.06}
                as="div"
                className="flex flex-col gap-4 rounded-2xl border border-line p-8"
              >
                <h3 className="font-display text-2xl tracking-tight text-bone">{m.title}</h3>
                <p className="text-sm leading-relaxed text-mute">{m.description}</p>
                <span className="mt-auto text-xs font-mono text-signal2">{m.detail}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal as="div" className="text-center">
            <span className="text-xs font-medium uppercase text-signal2">
              {servicesData.faq.label}
            </span>
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl">
            <Accordion items={servicesData.faq.items} />
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10">
          <Reveal as="h2" className="max-w-2xl font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
            {servicesData.cta.heading}
          </Reveal>
          <Reveal delay={0.1} as="p" className="max-w-md text-base text-mute">
            {servicesData.cta.sub}
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href={servicesData.cta.button.href}>
              {servicesData.cta.button.label}
              <ArrowUpRight />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
