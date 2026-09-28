import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/Accordion";
import { contactData } from "@/data/contact";

export const metadata = {
  title: "Contact",
  description:
    "Start a project with Team Devlux. Tell us about your website, timeline, and budget — we reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="mb-6 block font-mono text-xs uppercase tracking-wide text-mute">
            {contactData.hero.eyebrow}
          </span>
          <SplitHeading
            lines={contactData.hero.heading}
            as="h1"
            className="font-display text-clamp-hero leading-[0.98] tracking-tightest text-bone"
          />
          <Reveal delay={0.3} as="p" className="mt-8 max-w-lg text-base leading-relaxed text-mute md:text-lg">
            {contactData.hero.sub}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-[320px_1fr]">
          <div className="flex flex-col gap-8">
            {contactData.details.map((d) => (
              <Reveal key={d.label} as="div">
                <span className="text-xs uppercase text-mute">{d.label}</span>
                {d.href ? (
                  <a href={d.href} data-cursor="hover" className="mt-2 block font-display text-2xl text-bone">
                    {d.value}
                  </a>
                ) : (
                  <div className="mt-2 font-display text-2xl text-bone">{d.value}</div>
                )}
              </Reveal>
            ))}

            <div className="mt-6">
              <Accordion items={contactData.faq} align="left" />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
