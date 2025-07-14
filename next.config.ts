import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  // メモリ最適化とビルド設定
  experimental: {
    // 大きなファイルの処理を最適化
    largePageDataBytes: 512 * 1000, // 512KB (デフォルト: 128KB)
  },
  
  webpack: (config, { dev, isServer }) => {
    // メモリ最適化のための設定
    if (!dev) {
      // 本番ビルド時のメモリ最適化
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            // アニメーションデータを別チャンクに分離
            animationData: {
              test: /[\\/]src[\\/]data[\\/]anim[\\/]/,
              name: 'animation-data',
              chunks: 'all',
              priority: 20,
            },
          },
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;
