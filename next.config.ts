import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // basePath: "/bitesweb",
  // assetPrefix: "/bitesweb/",
  images: {
    unoptimized: true,
  },
  /* config options here */
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
