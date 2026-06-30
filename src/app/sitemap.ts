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
  "/privacy",
  "/cookies",
  "/gender-pay-gap",
  "/rha-conditions-of-carriage",
];

const SITE_LAUNCH_DATE = new Date("2026-06-30T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: SITE_LAUNCH_DATE,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries = SERVICES.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: SITE_LAUNCH_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...serviceEntries];
}
