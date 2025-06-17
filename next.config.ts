import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV;

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bitesweb",
  assetPrefix: "/bitesweb/",
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
