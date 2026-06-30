/** Self-hosted site imagery (migrated from legacy WordPress). */
export const SITE_IMAGES = {
  logo: "/images/mcburney-logo.png",
  ogDefault: "/images/og/og-default.jpg",
  hero: "/images/content/fleet-2.jpg",
  ferry: "/images/content/ferry-a.jpg",
  fleetTop: "/images/content/fleet-top.jpg",
  scania: "/images/content/scania.jpg",
  depot: "/images/content/depotstop-2.jpg",
  history: "/images/content/history.jpg",
  careersHero: "/images/content/jobs-top.jpg",
  careers: ["/images/content/jobs-2.jpg", "/images/content/jobs-1.jpg"] as const,
  fleet: [
    "/images/content/fleet-mcburney-1.jpg",
    "/images/content/fleet-mcb-1.jpg",
    "/images/content/fleet-1.jpg",
    "/images/content/fleet-griffen.jpg",
  ] as const,
  depots: [
    "/images/content/mcburney-08.jpg",
    "/images/content/depotstop-2.jpg",
    "/images/content/warehouse.jpg",
  ] as const,
  companies: [
    "/images/content/mcburney-kells.jpg",
    "/images/content/mcburney-7365a.jpg",
    "/images/content/our-companies.jpg",
  ] as const,
  services: {
    "road-haulage": "/images/content/service-road.jpg",
    "temperature-controlled": "/images/content/service-temp.jpg",
    "warehousing-distribution": "/images/content/service-warehouse.jpg",
    "irish-sea-shipping": "/images/content/service-ferry.jpg",
    refrigeration: "/images/content/service-refrigeration.jpg",
    "value-added": "/images/content/service-refrigeration.jpg",
  } as const,
} as const;

export const IMAGES = {
  hero: SITE_IMAGES.hero,
  logo: SITE_IMAGES.logo,
  ferry: SITE_IMAGES.ferry,
  group: SITE_IMAGES.logo,
  fleetTop: SITE_IMAGES.fleetTop,
  scania: SITE_IMAGES.scania,
  depot: SITE_IMAGES.depot,
} as const;
