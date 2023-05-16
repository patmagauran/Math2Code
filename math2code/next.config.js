/** @type {import('next').NextConfig} */
const { StatsWriterPlugin } = require("webpack-stats-plugin");
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['tex-math-parser', 'react-math-view'],
  webpack: (config, options) => {
    const { dev, isServer } = options;

    // Output webpack stats JSON file only for client-side/production build
    if (!dev && !isServer) {
      config.plugins.push(
        new StatsWriterPlugin({
          filename: "../webpack-stats.json",
          stats: {
            assets: true,
            chunks: true,
            modules: true,
            chunkModules: true,
          },
        })
      );
    }

    return {
      // resolve: {
      //   plugins: [
      //     new TsconfigPathsPlugin({
      //       /* options: see below */
      //     }),
      //   ],
      // },
      optimization: {
        minimize: true,
        sideEffects: true,
        usedExports: true,
      },
      ...config,
    };
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(nextConfig);
