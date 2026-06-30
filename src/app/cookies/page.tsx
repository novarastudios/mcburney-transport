import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PolicyProse } from "@/components/sections/policy-prose";
import { COOKIES_POLICY } from "@/lib/content/policies";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: COOKIES_POLICY.title,
  description: COOKIES_POLICY.description,
  path: "/cookies",
});

export default function CookiesPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: COOKIES_POLICY.title, path: "/cookies" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <PolicyProse policy={COOKIES_POLICY} />
    </>
  );
}
