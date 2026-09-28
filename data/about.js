export const aboutData = {
  hero: {
    eyebrow: "About Team Devlux",
    heading: ["A small studio,", "built for focused work."],
    sub: "We started Team Devlux because most agencies were either all strategy and no craft, or all craft and no strategy. We wanted both in the same room.",
  },
  story: {
    label: "Our story",
    heading: "Seven years in, still a studio — not an assembly line.",
    paragraphs: [
      "Team Devlux was founded in 2019 by a small group of designers and engineers who were tired of watching good ideas die in handoff — between the design team and the dev team, between the agency and the client, between launch and what actually happens after.",
      "We kept the team intentionally small. Every project is led by people who will still be answering your emails eighteen months after launch, not a rotating cast of account managers.",
      "Today we work with founders, marketing leads, and in-house teams across 35+ industries — from fintech to hospitality to healthcare — building sites that are judged less by awards and more by conversion rate.",
    ],
  },
  values: {
    label: "How we think",
    items: [
      {
        title: "Design in the medium",
        description:
          "We prototype in the browser early, so what you approve accounts for real motion, real breakpoints, and real content.",
      },
      {
        title: "Performance is a feature",
        description:
          "A beautiful site that loads in six seconds is a broken site. We treat Core Web Vitals as a design constraint, not an afterthought.",
      },
      {
        title: "Built to be maintained",
        description:
          "Clean component architecture and clear documentation, so your team — or the next agency — can pick it up without archaeology.",
      },
      {
        title: "Slow down to launch faster",
        description:
          "A tight discovery phase prevents the expensive kind of rework. We'd rather ask questions in week one than in week eight.",
      },
    ],
  },
  stats: [
    { value: 100, suffix: "+", label: "Websites launched" },
    { value: 35, suffix: "+", label: "Industries served" },
    { value: 14, suffix: "", label: "People on the team" },
    { value: 7, suffix: "", label: "Years in business" },
  ],
  team: {
    label: "The team",
    heading: "Designers and engineers who ship together.",
    hintDesktop: "Hover a name to meet them.",
    hintMobile: "Tap a name to meet them.",
    // Swap the placeholder SVGs in /public/team for real photos (jpg/png/webp/svg all work).
    members: [
      {
        name: "Ayush Singh",
        role: "Founding Consultant",
        work: "Shapes project direction from the first conversation, turning client goals into clear strategies, creative direction, and focused execution.",
        projects: ["Nordholm", "Arclight Studio"],
        image: "/team/rohan-bhatt.svg",
      },
      {
        name: "Abhijeet Kumar",
        role: "Founding Developer",
        work: "Owns the technical architecture, performance, and engineering standards that keep our products scalable, reliable, and fast after launch.",
        projects: ["Orbit Fintech", "Halcyon Realty"],
        image: "/team/abhijeet.png",
      },
      {
        name: "Anuj Yadav",
        role: "Founding Engineer",
        work: "Builds the technical foundation behind our products, turning complex ideas into scalable systems, polished interfaces, and reliable experiences.",
        projects: ["Solstice Health", "Vantage Legal"],
        image: "/team/anuj-yadav-avatar.svg",
      },
    ],
  },
  cta: {
    heading: "Want to work with us?",
    sub: "We take on a handful of new projects each quarter — let's see if the timing works.",
    button: { label: "Get in touch", href: "/contact" },
  },
};
