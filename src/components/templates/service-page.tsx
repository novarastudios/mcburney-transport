import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { ServiceContent } from "@/lib/content/services";
import { Hero } from "@/components/sections/hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/sections/section-header";
import { StatisticsDark } from "@/components/sections/statistics";
import { FAQs } from "@/components/sections/faqs";
import { CallToAction } from "@/components/sections/call-to-action";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  breadcrumbSchema,
  faqSchema,
  jsonLd,
  serviceSchema,
} from "@/lib/seo/schema";

export function ServicePageTemplate({ service }: { service: ServiceContent }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const schema = [
    serviceSchema({
      name: service.title,
      description: service.description,
      path: `/services/${service.slug}`,
    }),
    breadcrumbSchema(breadcrumbs),
    faqSchema(service.faqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <Hero
        compact
        eyebrow="Services"
        title={service.headline}
        description={service.description}
        image={service.image}
        imageAlt={service.title}
        primaryCta={{ label: "Request a Quote", href: "/quote" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Overview"
              title={`What is ${service.title}?`}
              description={service.overview}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Challenges"
                title="Problems we solve"
                description="Common logistics challenges our customers face across the UK and Ireland."
              />
              <ul className="mt-8 space-y-4">
                {service.problems.map((problem) => (
                  <li key={problem} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                    {problem}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <SectionHeader
                eyebrow="Outcomes"
                title="Benefits for your business"
                description="How McBurney Transport delivers measurable value."
              />
              <ul className="mt-8 space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="How we work with you"
            description="A structured approach from requirement to consistent delivery."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.06}>
                <article className="h-full rounded-3xl border border-brand-black/10 bg-white p-6">
                  <p className="font-display text-sm font-semibold text-brand-yellow">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-brand-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatisticsDark stats={service.stats} />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            description={`Answers about ${service.title.toLowerCase()} from McBurney Transport Group.`}
          />
          <FAQs items={service.faqs} />
        </div>
      </section>

      <CallToAction
        title={`Ready to discuss ${service.title.toLowerCase()}?`}
        description="Speak with our team about tailored logistics solutions across the UK and Ireland."
      />
    </>
  );
}
