export const servicesData = {
  hero: {
    eyebrow: "Services",
    heading: ["Everything a modern", "website needs to work."],
    sub: "From first sketch to shipped product — and everything that keeps it fast and findable after launch.",
  },
  list: [
    {
      index: "01",
      title: "Brand & Web Design",
      description:
        "Visual identity extensions, UX architecture, and high-fidelity interface design tailored to how your customers actually browse and buy.",
      deliverables: ["UX & sitemap", "Visual direction", "High-fidelity UI", "Design system"],
    },
    {
      index: "02",
      title: "Next.js Development",
      description:
        "Production-grade builds on Next.js and React — fast, accessible, and structured for whoever maintains the site after us.",
      deliverables: ["Component architecture", "CMS integration", "Responsive build", "QA & testing"],
    },
    {
      index: "03",
      title: "Motion & Interaction",
      description:
        "GSAP-driven scroll storytelling, page transitions, and micro-interactions that make a site feel considered without hurting load times.",
      deliverables: ["Scroll animation", "Page transitions", "Micro-interactions", "3D & WebGL accents"],
    },
    {
      index: "04",
      title: "SEO & Content Structure",
      description:
        "Technical SEO baked into the build — semantic HTML, structured data, sitemaps, and a Core Web Vitals budget we design against.",
      deliverables: ["Technical SEO audit", "Structured data", "Site speed tuning", "Analytics setup"],
    },
    {
      index: "05",
      title: "E-commerce",
      description:
        "Custom storefronts and headless commerce builds that put merchandising and conversion ahead of the shopping-cart template.",
      deliverables: ["Headless commerce", "Checkout UX", "Product data modeling", "Payment integration"],
    },
    {
      index: "06",
      title: "Ongoing Care",
      description:
        "Monthly retainers for teams who need a site that keeps evolving — new pages, campaigns, and performance tuning.",
      deliverables: ["Monthly updates", "Uptime monitoring", "Performance reviews", "Priority support"],
    },
  ],
  engagement: {
    label: "Engagement models",
    heading: "Work with us the way that fits your team.",
    models: [
      {
        title: "Fixed-scope project",
        description:
          "A defined site, a fixed price, and a clear timeline — best for a launch or full redesign.",
        detail: "Typical timeline: 6–10 weeks",
      },
      {
        title: "Monthly retainer",
        description:
          "Ongoing design and development capacity for teams who ship new pages and campaigns regularly.",
        detail: "Typical commitment: 3 months minimum",
      },
      {
        title: "Embedded team",
        description:
          "Our designers and engineers work inside your team's existing workflow and tools.",
        detail: "Typical commitment: quarterly",
      },
    ],
  },
  faq: {
    label: "FAQ",
    items: [
      {
        q: "How long does a typical project take?",
        a: "Most marketing sites take 6–10 weeks from kickoff to launch. Larger or e-commerce builds usually run 10–16 weeks depending on integrations.",
      },
      {
        q: "Do you work with an existing brand identity?",
        a: "Yes — most of our clients arrive with a brand already in place. We extend it into a full web design system rather than starting from zero.",
      },
      {
        q: "What platform do you build on?",
        a: "Next.js and React by default, paired with a headless CMS such as Sanity or Contentful, so your team can edit content without touching code.",
      },
      {
        q: "Do you offer support after launch?",
        a: "Every project includes a 30-day warranty period, and most clients move into a monthly retainer for ongoing updates.",
      },
    ],
  },
  cta: {
    heading: "Not sure which service you need?",
    sub: "Send us a few details about the project and we'll recommend a scope.",
    button: { label: "Start a project", href: "/contact" },
  },
};
