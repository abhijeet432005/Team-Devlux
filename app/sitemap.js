import { site } from "@/data/site";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/work", "/contact"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
