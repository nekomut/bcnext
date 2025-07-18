import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isProd && {
    basePath: "/bcnext",
    assetPrefix: "/bcnext",
  }),
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
