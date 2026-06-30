import { createPageMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactForm } from "@/components/sections/contact-form";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Request a Quote",
  description:
    "Request a tailored logistics quote from McBurney Transport Group for road haulage, shipping, warehousing or temperature-controlled services.",
  path: "/quote",
});

export default function QuotePage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Request a Quote", path: "/quote" },
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
        eyebrow="Quote"
        title="Request a tailored logistics quote"
        description="Tell us about your routes, volumes and service requirements. Our team will respond with a solution tailored to your business."
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl border border-brand-black/10 bg-white p-8 lg:p-10">
              <ContactForm
                formType="quote"
                submitLabel="Submit Quote Request"
                messageLabel="Requirements"
                messagePlaceholder="Include routes, volumes, frequency, temperature requirements and any other relevant details..."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
