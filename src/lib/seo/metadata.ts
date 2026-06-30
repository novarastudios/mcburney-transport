import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/content/images";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = SITE_IMAGES.ogDefault,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
