import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mcburneytransportgroup.com",
        pathname: "/wp-content/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/gpgr",
        destination: "/gender-pay-gap",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
