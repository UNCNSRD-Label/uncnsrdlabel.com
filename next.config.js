/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  ...(process.env.NODE_ENV === "production" && {
    compiler: {
      removeConsole: {
        exclude: ["error"],
      },
    },
  }),
  experimental: {
    appDir: true,
    // Avoid Module not found: ESM packages (supports-color) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals
    esmExternals: "loose",
  },
  i18n: {
    locales: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(","),
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
    localeDetection: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/s/files/**",
      },
    ],
  },
  poweredByHeader: false,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
};

const plugins = [];

plugins.push([withBundleAnalyzer]);

plugins.push([
  withPWA({
    buildExcludes: [/middleware-manifest.json$/, /_middleware.js$/],
    dest: "public",
    disable: process.env.WITH_PWA !== "true",
    runtimeCaching,
  }),
]);

if (process.env.OUTPUT_STANDALONE === "true") {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    outputStandalone: true,
  };
}

module.exports = withPlugins([...plugins], nextConfig);

// Don't delete this console log, useful to see the commerce config in Vercel deployments
console.log("next.config.js", JSON.stringify(nextConfig, null, 2));
