export const SITE = {
  name: "McBurney Transport Group",
  shortName: "McBurney Transport",
  tagline: "Pushing boundaries to make the impossible possible",
  description:
    "Independent UK & Ireland logistics group delivering road haulage, Irish Sea shipping, temperature-controlled transport, and warehousing since 1965.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.mcburneytransportgroup.com",
  email: "info@mcburneytransport.com",
  founded: 1965,
  founder: "Norman McBurney OBE",
} as const;

export const OFFICES = [
  {
    city: "Ballymena",
    label: "Head Office",
    phone: "02825 891419",
    href: "tel:+442825891419",
  },
  {
    city: "Liverpool",
    label: "UK Operations",
    phone: "0151 4721600",
    href: "tel:+441514721600",
  },
  {
    city: "Dublin",
    label: "Ireland Operations",
    phone: "+353 18944826",
    href: "tel:+35318944826",
  },
] as const;

export const DEPOTS = [
  "Ballymena",
  "Larne",
  "Nutts Corner",
  "Dublin",
  "Cairnryan",
  "Penrith",
  "Heysham",
  "Liverpool",
] as const;

export const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Road Haulage",
        href: "/services/road-haulage",
        description: "Dry, ambient and tailored UK & Ireland road freight.",
      },
      {
        label: "Temperature Controlled",
        href: "/services/temperature-controlled",
        description: "Chilled and frozen transport with cold storage.",
      },
      {
        label: "Warehousing & Distribution",
        href: "/services/warehousing-distribution",
        description: "Groupage, storage and nationwide distribution.",
      },
      {
        label: "Irish Sea Shipping",
        href: "/services/irish-sea-shipping",
        description: "High-volume ferry logistics across the Irish Sea.",
      },
      {
        label: "Value Added Services",
        href: "/services/value-added",
        description: "Bespoke logistics support beyond core transport.",
      },
    ],
  },
  {
    label: "Company",
    href: "/about/our-companies",
    children: [
      {
        label: "Our Companies",
        href: "/about/our-companies",
        description: "McBurney Transport, Bondelivery and McBurney Refrigeration.",
      },
      {
        label: "History",
        href: "/about/history",
        description: "Family-owned logistics leadership since 1965.",
      },
      {
        label: "Why Choose Us",
        href: "/why-choose-us",
        description: "Partnership, reliability and long-term investment.",
      },
      {
        label: "Fleet",
        href: "/fleet",
        description: "One of Ireland's most invested transport fleets.",
      },
      {
        label: "Depots",
        href: "/depots",
        description: "Eight strategic locations across the UK & Ireland.",
      },
      {
        label: "Technology",
        href: "/technology",
        description: "Real-time visibility and bespoke customer integration.",
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Road Haulage", href: "/services/road-haulage" },
    { label: "Temperature Controlled", href: "/services/temperature-controlled" },
    { label: "Warehousing & Distribution", href: "/services/warehousing-distribution" },
    { label: "Irish Sea Shipping", href: "/services/irish-sea-shipping" },
    { label: "Value Added Services", href: "/services/value-added" },
  ],
  company: [
    { label: "Our Companies", href: "/about/our-companies" },
    { label: "History", href: "/about/history" },
    { label: "Fleet", href: "/fleet" },
    { label: "Depots", href: "/depots" },
    { label: "Technology", href: "/technology" },
    { label: "Careers", href: "/careers" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/quote" },
    { label: "Subcontractors", href: "/subcontractors" },
  ],
} as const;

export const SEARCH_PAGES: { label: string; href: string; group: string }[] = [
  { label: "Road Haulage", href: "/services/road-haulage", group: "Services" },
  { label: "Temperature Controlled", href: "/services/temperature-controlled", group: "Services" },
  { label: "Warehousing & Distribution", href: "/services/warehousing-distribution", group: "Services" },
  { label: "Irish Sea Shipping", href: "/services/irish-sea-shipping", group: "Services" },
  { label: "Value Added Services", href: "/services/value-added", group: "Services" },
  { label: "Services Overview", href: "/services", group: "Services" },
  { label: "Our Companies", href: "/about/our-companies", group: "Company" },
  { label: "History", href: "/about/history", group: "Company" },
  { label: "Why Choose Us", href: "/why-choose-us", group: "Company" },
  { label: "Fleet", href: "/fleet", group: "Company" },
  { label: "Depots", href: "/depots", group: "Company" },
  { label: "Technology", href: "/technology", group: "Company" },
  { label: "Careers", href: "/careers", group: "Pages" },
  { label: "Contact", href: "/contact", group: "Pages" },
  { label: "Request a Quote", href: "/quote", group: "Pages" },
  { label: "Subcontractors", href: "/subcontractors", group: "Pages" },
];
