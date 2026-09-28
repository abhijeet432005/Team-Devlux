import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-start justify-center px-6 md:px-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <span className="font-mono text-xs uppercase text-mute">404</span>
        <h1 className="mt-4 font-display text-clamp-xl tracking-tightest text-bone">
          This page wandered off.
        </h1>
        <p className="mt-4 max-w-sm text-mute">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="mt-10">
          <MagneticButton href="/">Back home</MagneticButton>
        </div>
      </div>
    </section>
  );
}
