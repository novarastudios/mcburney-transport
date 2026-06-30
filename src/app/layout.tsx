import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  jsonLd,
  localBusinessSchema,
  organizationSchema,
} from "@/lib/seo/schema";
import "./globals.css";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const body = Inter({
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
        {children}
      </body>
    </html>
  );
}
