import { createPageMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { QuoteRequestForm } from "@/components/sections/quote-request-form";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Quote Request",
  description:
    "Request a tailored logistics quote from McBurney Transport Group for road haulage, shipping, warehousing or temperature-controlled services.",
  path: "/quote",
});

export default function QuotePage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Quote Request", path: "/quote" },
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
      <section className="bg-paper py-12 lg:py-16">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-start lg:gap-14 xl:gap-20">
            <div className="lg:pt-2">
              <h1 className="font-display text-3xl font-bold text-ink lg:text-4xl">
                Quote Request
              </h1>
              <div
                className="mt-4 h-0.5 w-14 bg-mcb-yellow"
                aria-hidden
              />
              <p className="mt-6 max-w-md text-base leading-relaxed text-brand-muted">
                If you would like a quote for our services please use the form on
                this page.
              </p>
            </div>

            <div className="bg-paper-2 px-5 py-6 sm:px-8 sm:py-8">
              <QuoteRequestForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
