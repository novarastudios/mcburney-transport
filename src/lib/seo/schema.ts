import { OFFICES, SITE } from "@/lib/constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    foundingDate: String(SITE.founded),
    slogan: SITE.tagline,
    areaServed: ["United Kingdom", "Ireland"],
    contactPoint: OFFICES.map((office) => ({
      "@type": "ContactPoint",
      telephone: office.phone,
      contactType: "customer service",
      areaServed: office.city,
      availableLanguage: "English",
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    image: `${SITE.url}/wp-content/uploads/2016/03/fleet-2.jpg`,
    url: SITE.url,
    telephone: OFFICES[0].phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ballymena",
      addressCountry: "GB",
    },
    areaServed: ["United Kingdom", "Ireland"],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: ["United Kingdom", "Ireland"],
    url: `${SITE.url}${service.path}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function jsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(Array.isArray(data) ? data : data);
}
