import { DEPOT_LOCATIONS } from "@/lib/content/depots";
import { INDUSTRIES } from "@/lib/content/home";
import { SERVICES } from "@/lib/content/services";
import { SITE } from "@/lib/constants";

export type SearchItem = {
  id: string;
  label: string;
  href: string;
  group: string;
  description?: string;
  keywords: string[];
};

const STATIC_PAGES: SearchItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    group: "Pages",
    description: SITE.description,
    keywords: ["homepage", "logistics", "transport", "uk", "ireland", "1965"],
  },
  {
    id: "services-overview",
    label: "Services Overview",
    href: "/services",
    group: "Services",
    description: "Transport and logistics tailored to your business across the UK and Ireland.",
    keywords: ["haulage", "shipping", "warehousing", "distribution"],
  },
  {
    id: "our-companies",
    label: "Our Companies",
    href: "/about/our-companies",
    group: "Company",
    description:
      "McBurney Transport, Bondelivery and McBurney Refrigeration — one complete logistics group.",
    keywords: ["bondelivery", "refrigeration", "group", "companies"],
  },
  {
    id: "history",
    label: "History",
    href: "/about/history",
    group: "Company",
    description: "Family-owned logistics leadership since 1965.",
    keywords: ["norman mcburney", "obe", "heritage", "founded"],
  },
  {
    id: "why-choose-us",
    label: "Why Choose Us",
    href: "/why-choose-us",
    group: "Company",
    description: "Partnership, reliability and long-term investment.",
    keywords: ["partnership", "reliability", "family owned", "investment"],
  },
  {
    id: "fleet",
    label: "Fleet",
    href: "/fleet",
    group: "Company",
    description: "One of Ireland's most invested transport fleets.",
    keywords: ["vehicles", "trailers", "tractors", "scania", "investment", "lorries"],
  },
  {
    id: "depots",
    label: "Depots",
    href: "/depots",
    group: "Company",
    description: "Eight strategic locations across the UK and Ireland.",
    keywords: ["network", "locations", "warehousing", "ports"],
  },
  {
    id: "technology",
    label: "Technology",
    href: "/technology",
    group: "Company",
    description: "Real-time visibility and bespoke customer integration.",
    keywords: ["it", "systems", "tracking", "drivers app", "reporting", "pod"],
  },
  {
    id: "careers",
    label: "Careers",
    href: "/careers",
    group: "Pages",
    description: "Join the McBurney Transport Group team.",
    keywords: ["jobs", "drivers", "vacancies", "employment", "hr"],
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    group: "Pages",
    description: "Speak with our team across Ballymena, Liverpool and Dublin.",
    keywords: ["phone", "email", "office", "support", "enquiry"],
  },
  {
    id: "quote",
    label: "Request a Quote",
    href: "/quote",
    group: "Pages",
    description: "Get a tailored logistics quote for your business.",
    keywords: ["pricing", "quote", "estimate", "rfq"],
  },
  {
    id: "subcontractors",
    label: "Subcontractors",
    href: "/subcontractors",
    group: "Pages",
    description: "Partner with McBurney Transport as a subcontractor.",
    keywords: ["subcontract", "partner", "owner operator", "haulier"],
  },
];

const COMPANY_ENTRIES: SearchItem[] = [
  {
    id: "company-mcburney-transport",
    label: "McBurney Transport",
    href: "/about/our-companies",
    group: "Companies",
    description: "Founding road haulage company and market leader across the UK and Ireland.",
    keywords: ["european haulier", "asda", "award", "head office", "ballymena"],
  },
  {
    id: "company-bondelivery",
    label: "Bondelivery",
    href: "/about/our-companies",
    group: "Companies",
    description: "Groupage, distribution and warehousing throughout Ireland.",
    keywords: ["groupage", "nutts corner", "irish logistics", "warehousing"],
  },
  {
    id: "company-refrigeration",
    label: "McBurney Refrigeration",
    href: "/about/our-companies",
    group: "Companies",
    description: "Chilled and frozen haulage with cold storage in Liverpool and Dublin.",
    keywords: ["cold chain", "chilled", "frozen", "brc", "refrigerated"],
  },
];

function serviceItems(): SearchItem[] {
  return SERVICES.flatMap((service) => {
    const faqKeywords = service.faqs.flatMap((faq) => [faq.question, faq.answer]);
    const benefitKeywords = service.benefits.join(" ");
    const problemKeywords = service.problems.join(" ");

    return [
      {
        id: `service-${service.slug}`,
        label: service.title,
        href: `/services/${service.slug}`,
        group: "Services",
        description: service.description,
        keywords: [
          service.slug.replace(/-/g, " "),
          service.headline,
          service.overview,
          benefitKeywords,
          problemKeywords,
          ...faqKeywords,
          ...service.stats.map((stat) => `${stat.value} ${stat.label}`),
        ],
      },
    ];
  });
}

function depotItems(): SearchItem[] {
  return DEPOT_LOCATIONS.map((depot) => ({
    id: `depot-${depot.name.toLowerCase().replace(/\s+/g, "-")}`,
    label: `${depot.name} Depot`,
    href: "/depots",
    group: "Depots",
    description: depot.label
      ? `${depot.name} — ${depot.label}`
      : `McBurney depot in ${depot.name}`,
    keywords: [depot.name, depot.label ?? "", "depot", "location", "network"],
  }));
}

function industryItems(): SearchItem[] {
  return INDUSTRIES.map((industry) => ({
    id: `industry-${industry.title.toLowerCase().replace(/\s+/g, "-")}`,
    label: industry.title,
    href: "/services",
    group: "Industries",
    description: industry.description,
    keywords: [industry.title, "sector", "industry", "customers"],
  }));
}

export const SITE_SEARCH_INDEX: SearchItem[] = [
  ...STATIC_PAGES,
  ...serviceItems(),
  ...COMPANY_ENTRIES,
  ...depotItems(),
  ...industryItems(),
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}

function scoreItem(item: SearchItem, query: string) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return 0;

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const label = normalize(item.label);
  const description = normalize(item.description ?? "");
  const group = normalize(item.group);
  const keywords = normalize(item.keywords.join(" "));
  const haystack = `${label} ${description} ${group} ${keywords}`;

  if (label === normalizedQuery) return 120;
  if (label.startsWith(normalizedQuery)) return 95;
  if (label.includes(normalizedQuery)) return 75;

  if (terms.length > 1 && terms.every((term) => haystack.includes(term))) {
    return 55 + terms.length * 4;
  }

  let score = 0;
  for (const term of terms) {
    if (label.includes(term)) score += 28;
    else if (keywords.includes(term)) score += 18;
    else if (description.includes(term)) score += 12;
    else if (group.includes(term)) score += 8;
  }

  return score;
}

export function searchSite(query: string, limit = 12): SearchItem[] {
  const trimmed = query.trim();

  if (!trimmed) {
    return SITE_SEARCH_INDEX.filter((item) =>
      [
        "home",
        "services-overview",
        "service-road-haulage",
        "service-irish-sea-shipping",
        "depots",
        "fleet",
        "quote",
        "contact",
      ].includes(item.id),
    ).slice(0, 8);
  }

  const scored = SITE_SEARCH_INDEX.map((item) => ({
    item,
    score: scoreItem(item, trimmed),
  }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label));

  const seen = new Set<string>();
  const results: SearchItem[] = [];

  for (const { item } of scored) {
    const key = `${item.href}::${item.label}`;
    if (seen.has(key)) continue;
    seen.add(key);
    results.push(item);
    if (results.length >= limit) break;
  }

  return results;
}

export function groupSearchResults(results: SearchItem[]) {
  const groups = new Map<string, SearchItem[]>();

  for (const item of results) {
    const existing = groups.get(item.group) ?? [];
    existing.push(item);
    groups.set(item.group, existing);
  }

  return Array.from(groups.entries());
}
