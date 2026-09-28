export default function Marquee({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-row overflow-hidden border-y border-line py-6">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 shrink-0 font-display text-2xl md:text-3xl text-mute/70 tracking-tight"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
