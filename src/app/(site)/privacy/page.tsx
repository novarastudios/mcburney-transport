import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PolicyProse } from "@/components/sections/policy-prose";
import { PRIVACY_POLICY } from "@/lib/content/policies";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: PRIVACY_POLICY.title,
  description: PRIVACY_POLICY.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: PRIVACY_POLICY.title, path: "/privacy" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <Breadcrumbs items={breadcrumbs} clearNav />
      <PolicyProse policy={PRIVACY_POLICY} />
    </>
  );
}
