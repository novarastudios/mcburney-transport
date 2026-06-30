import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { ContactForm } from "@/components/sections/contact-form";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Subcontractor Application",
  description:
    "Subcontractors and owner drivers — register your interest in working with McBurney Transport Group.",
  path: "/subcontractors",
});

export default function SubcontractorsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Subcontractors", path: "/subcontractors" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <Hero
        compact
        eyebrow="Partners"
        title="Subcontractor applications"
        description="If you are a subcontractor or owner driver, please show your interest by completing the form below. We will get back to you shortly."
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Apply"
              title="Register your interest"
              description="Provide details about your operation, coverage area and vehicle types. Our team will review your application and respond."
              className="mb-8"
            />
            <div className="rounded-3xl border border-brand-black/10 bg-white p-8 lg:p-10">
              <ContactForm
                formType="subcontractor"
                submitLabel="Submit Application"
                messageLabel="About your operation"
                messagePlaceholder="Include vehicle types, coverage area, experience and availability..."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
