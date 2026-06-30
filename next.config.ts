import type { NextConfig } from "next";

const LEGACY_REDIRECTS = [
  { source: "/gpgr", destination: "/gender-pay-gap", permanent: true },
  { source: "/quote-request", destination: "/quote", permanent: true },
  { source: "/quote-request/", destination: "/quote", permanent: true },
  { source: "/what-we-do", destination: "/services", permanent: true },
  { source: "/what-we-do/:path*", destination: "/services/:path*", permanent: true },
  { source: "/contact-us", destination: "/contact", permanent: true },
  { source: "/contact-us/", destination: "/contact", permanent: true },
  { source: "/jobs", destination: "/careers", permanent: true },
  { source: "/jobs/", destination: "/careers", permanent: true },
  { source: "/about-us", destination: "/about/history", permanent: true },
  { source: "/about-us/", destination: "/about/history", permanent: true },
  { source: "/our-companies", destination: "/about/our-companies", permanent: true },
  { source: "/our-companies/", destination: "/about/our-companies", permanent: true },
  { source: "/why-choose-mcburney", destination: "/why-choose-us", permanent: true },
  { source: "/why-choose-mcburney/", destination: "/why-choose-us", permanent: true },
  { source: "/web/sysloginpage", destination: "/customer-login", permanent: false },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return LEGACY_REDIRECTS;
  },
};

export default nextConfig;
