import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/bcnext",
  assetPrefix: "/bcnext",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
