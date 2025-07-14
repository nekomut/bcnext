import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  webpack: (config, { dev, isServer }) => {
    // メモリ最適化のための設定 - アニメーションデータはJSONに移行するため設定削除
    return config;
  },
};

export default nextConfig;
