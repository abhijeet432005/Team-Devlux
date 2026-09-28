import ArrowUpRight from "@/components/ArrowUpRight";

export default function ProjectCard({ project, size = "regular" }) {
  return (
    <article
      data-cursor="hover"
      className={`group relative flex flex-col gap-5 ${
        size === "large" ? "md:col-span-2" : ""
      }`}
    >
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
        style={{
          background: `linear-gradient(155deg, ${project.color}22 0%, rgb(var(--surface)) 65%)`,
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 ease-signature group-hover:scale-105"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, ${project.color}55, transparent 55%)`,
          }}
        />
        <div className="absolute inset-0 flex items-end justify-between p-6">
          <span className="font-display text-3xl text-bone/90">{project.name}</span>
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full bg-bone/10 text-bone opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1"
            aria-hidden
          >
            <ArrowUpRight />
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-bone">{project.name}</h3>
          <p className="mt-1 text-sm text-mute">{project.description}</p>
        </div>
        <div className="shrink-0 text-right text-xs text-mute">
          <div>{project.category}</div>
          <div>{project.year}</div>
        </div>
      </div>
    </article>
  );
}
