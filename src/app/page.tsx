import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/sections/statistics";
import { SectionHeader } from "@/components/sections/section-header";
import { FeatureCards } from "@/components/sections/feature-cards";
import { IndustryCards } from "@/components/sections/industry-cards";
import { FleetCards } from "@/components/sections/fleet-cards";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { LatestNews } from "@/components/sections/latest-news";
import { CallToAction } from "@/components/sections/call-to-action";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  CASE_STUDIES,
  HOME_STATS,
  IMAGES,
  INDUSTRIES,
  LATEST_NEWS,
  TESTIMONIALS,
  WHY_CHOOSE_POINTS,
} from "@/lib/content/home";
import { getServiceSummaries } from "@/lib/content/services";
import { SITE } from "@/lib/constants";

export default function HomePage() {
  const services = getServiceSummaries();

  return (
    <>
      <Hero
        eyebrow="UK & Ireland Logistics"
        title="Road haulage and logistics built on trust since 1965"
        description="McBurney Transport Group delivers complete transport, Irish Sea shipping, temperature-controlled logistics and warehousing for businesses of every scale — from multinational corporations to local companies."
        image={IMAGES.hero}
        imageAlt="McBurney Transport fleet on the road"
        primaryCta={{ label: "Explore Services", href: "/services" }}
        secondaryCta={{ label: "Request a Quote", href: "/quote" }}
      />

      <Statistics stats={HOME_STATS} />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we do"
            title="A complete transport package"
            description="Our fleet travels over 450,000 miles every week, with services fully tailored to each customer's requirements across the UK and Ireland."
            className="mb-12"
          />
          <FeatureCards items={services} />
        </div>
      </section>

      <section className="bg-brand-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industries"
            title="Trusted across sectors"
            description="Our customer base includes major supermarkets, food and drink manufacturers, high street retailers, and leaders in construction, horticulture and industrial sectors."
            className="mb-12"
          />
          <IndustryCards items={INDUSTRIES} />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Fleet"
              title="Scale, investment and visibility"
              description="Over £50 million invested in equipment. Our yellow lorries and MCB registration plates are synonymous with the McBurney Transport brand."
            />
            <Button asChild variant="outline">
              <Link href="/fleet">
                View full fleet
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <FleetCards
            items={[
              {
                title: "Articulated tractor units",
                value: "290",
                description:
                  "Six-year replacement policy ensuring modern, compliant tractor units across the group.",
                image: IMAGES.fleetTop,
              },
              {
                title: "Refrigerated trailers",
                value: "700",
                description:
                  "Including 120 high-cube refrigerated trailers with 52-pallet capacity.",
                image: IMAGES.scania,
              },
              {
                title: "Capital investment",
                value: "£50M+",
                description:
                  "One of the highest fleet investment levels of any transport company in Ireland.",
                image: IMAGES.group,
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-brand-black py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why McBurney"
              title="Partnership, reliability and long-term investment"
              description="Family-owned and managed, with the resources and capital base to service your needs — today and for decades to come."
              dark
            />
            <ul className="mt-8 space-y-4">
              {WHY_CHOOSE_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-white/75"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  {point}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link href="/why-choose-us">Why choose us</Link>
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src={IMAGES.group}
                alt="McBurney Transport Group team and fleet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case studies"
            title="Proven partnerships"
            description="Long-term relationships demonstrating commitment, adaptability and quality of service."
            className="mb-12"
          />
          <CaseStudies items={CASE_STUDIES} />
        </div>
      </section>

      <section className="bg-brand-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonials"
            title="What our customers say"
            description="Placeholder testimonials — replace with verified client quotes when available."
            className="mb-12"
          />
          <Testimonials items={TESTIMONIALS} />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="News"
              title="Latest from McBurney"
              description="Updates on fleet investment, technology and network expansion across the group."
            />
          </div>
          <LatestNews items={LATEST_NEWS} />
        </div>
      </section>

      <CallToAction
        title="Let's move your business forward"
        description={`${SITE.tagline}. Speak with our team about tailored logistics across the UK and Ireland.`}
      />
    </>
  );
}
