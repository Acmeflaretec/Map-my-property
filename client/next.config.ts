import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "www.server.mapmyproperty.in"],
  },
  webpack: (config) => {
    config.resolve.alias["next/image"] = path.resolve(__dirname, "components/ui/CustomImage.tsx");
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

export default nextConfig;
