import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getServiceBySlug, SERVICES } from "@/lib/content/services";
import { ServicePageTemplate } from "@/components/templates/service-page";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServicePageTemplate service={service} />;
}
