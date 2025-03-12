import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
  turbo: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  optimizeCss: true,
  },
};

export default nextConfig;
