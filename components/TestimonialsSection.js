import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ t, hidden = false }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex w-[80vw] shrink-0 flex-col justify-between rounded-2xl border border-line bg-surface p-8 mx-3 sm:w-[380px] md:w-[420px] md:p-10"
    >
      <p className="font-display text-xl leading-snug tracking-tight text-bone md:text-[1.4rem]">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-10">
        <div className="text-sm font-medium text-bone">{t.name}</div>
        <div className="text-sm text-mute">
          {t.role}, {t.company}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection({ label, heading }) {
  const rowA = testimonials;
  const rowB = [...testimonials].reverse();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal as="div" className="max-w-xl">
          <span className="text-xs font-medium uppercase text-signal2">{label}</span>
          <h2 className="mt-4 font-display text-clamp-xl leading-[1.05] tracking-tightest text-bone">
            {heading}
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col gap-6">
        <div className="testimonial-row overflow-hidden">
          <div className="testimonial-track testimonial-track--left">
            {rowA.map((t, i) => (
              <TestimonialCard key={`a-${i}`} t={t} />
            ))}
            {rowA.map((t, i) => (
              <TestimonialCard key={`a-dup-${i}`} t={t} hidden />
            ))}
          </div>
        </div>

        <div className="testimonial-row overflow-hidden">
          <div className="testimonial-track testimonial-track--right">
            {rowB.map((t, i) => (
              <TestimonialCard key={`b-${i}`} t={t} />
            ))}
            {rowB.map((t, i) => (
              <TestimonialCard key={`b-dup-${i}`} t={t} hidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
