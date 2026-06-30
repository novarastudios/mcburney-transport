import { ArrowUpRight, FileText } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PolicyHeader } from "@/components/sections/policy-prose";
import { Button } from "@/components/ui/button";
import { RHA_CONDITIONS } from "@/lib/content/policies";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: RHA_CONDITIONS.title,
  description: RHA_CONDITIONS.description,
  path: "/rha-conditions-of-carriage",
});

export default function RhaConditionsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: RHA_CONDITIONS.title, path: "/rha-conditions-of-carriage" },
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
      <article className="bg-paper">
        <PolicyHeader
          title={RHA_CONDITIONS.title}
          description={RHA_CONDITIONS.description}
          eyebrow="Legal"
        />
        <div className="site-container max-w-3xl py-12 lg:py-16">
          <p className="text-base leading-[1.75] text-brand-muted">
            {RHA_CONDITIONS.note}
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <a
                href={RHA_CONDITIONS.pdfPath}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText />
                Download RHA Conditions of Carriage 2026
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
