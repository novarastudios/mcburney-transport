import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/content/services";

const STATIC_ROUTES = [
  "",
  "/services",
  "/about/history",
  "/about/our-companies",
  "/fleet",
  "/depots",
  "/why-choose-us",
  "/technology",
  "/careers",
  "/contact",
  "/quote",
  "/subcontractors",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries = SERVICES.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...serviceEntries];
}
