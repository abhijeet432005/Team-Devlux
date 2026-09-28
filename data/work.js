import { video } from "framer-motion/client";



export const workData = {
  hero: {
    eyebrow: "Selected work",
    heading: ["100+ sites shipped.", "A few we're proud of."],
    sub: "Every project below launched with performance and SEO budgets built in — not bolted on after the fact.",
  },
  projects: [
    {
      slug: "portfolio",
      name: "Personal Portfolio",
      category: "Portfolio & Creative Development",
      year: "2026",
      description:
        "A modern developer portfolio showcasing projects, technical expertise, and immersive web experiences through clean design and smooth interactions.",
      tags: ["React", "Next.js", "GSAP", "Tailwind CSS"],
      color: "#B9A7F5",
      video: "/videos/abhi-portfolio.mp4",
      url: "https://abhijeet-tech.vercel.app/",
    },
    {
      slug: "bps-industries",
      name: "BPS Industries",
      category: "Industrial & Manufacturing",
      year: "2026",
      description:
        "A professional digital presence built to showcase industrial solutions, strengthen brand credibility, and make business information accessible to potential clients.",
      tags: ["React", "UI/UX", "Responsive Design", "SEO"],
      color: "#7FA9A1",
      image: "/images/Bps.png",
      video: "/videos/bps.mp4",
      url: "https://www.bpsindustriesgroup.com/",
    },
    {
      slug: "ramayana",
      name: "Ramayana",
      category: "Mythology & Interactive Storytelling",
      year: "2026",
      description:
        "An immersive digital journey into the timeless epic of Ramayana, bringing its seven Kandas, legendary characters, sacred places, and timeless teachings to life through rich storytelling and interactive exploration.",
      tags: ["React", "Interactive UI", "Motion Design", "Cultural Heritage"],
      color: "#D9A45B",
      video: "/videos/ramayan.mp4",
      url: "https://ramayan.vercel.app/",
    },
    {
      slug: "orsia-jewels",
      name: "Orsia Jewels",
      category: "Luxury Jewellery & E-commerce",
      year: "2026",
      description:
        "An elegant jewellery storefront featuring refined visuals, product-focused layouts, and a seamless shopping experience that highlights the brand's collections.",
      tags: ["Shopify", "Liquid", "E-commerce", "Responsive Design"],
      color: "#C9A7A0",
      image: "/images/orsia.png",
      video: "/videos/orsia-jewels.mp4",
      url: "https://orsiajewels.com/",
    },
  ],
  cta: {
    heading: "Want to be the next case study?",
    sub: "Tell us about your project — we'll follow up with next steps and a rough scope.",
    button: { label: "Start a project", href: "/contact" },
  },
};
