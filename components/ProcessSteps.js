import Reveal from "@/components/Reveal";

export default function ProcessSteps({ steps }) {
  return (
    <div className="mt-14 divide-y divide-line border-t border-line">
      {steps.map((step, i) => (
        <Reveal key={step.index} delay={i * 0.05} as="div">
          <div className="grid grid-cols-[auto_1fr] gap-6 py-8 md:grid-cols-[80px_1fr_1.4fr] md:items-center md:gap-10">
            <span className="font-mono text-sm text-mute">{step.index}</span>
            <h3 className="font-display text-2xl tracking-tight text-bone">{step.title}</h3>
            <p className="col-span-2 mt-2 text-sm leading-relaxed text-mute md:col-span-1 md:mt-0">
              {step.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
