import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  jsonLd,
  localBusinessSchema,
  organizationSchema,
} from "@/lib/seo/schema";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  title: `${SITE.name} | UK & Ireland Logistics Since 1965`,
  description: SITE.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = [organizationSchema(), localBusinessSchema()];

  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
