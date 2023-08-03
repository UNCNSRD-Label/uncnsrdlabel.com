const withPlugins = require("next-compose-plugins");

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const plugins = [withBundleAnalyzer];

if (process.env.NODE_ENV === "production") {
  plugins.push([withPWA]);
}

const domains = `${process.env.NEXT_PUBLIC_SITE_DOMAIN} www.${process.env.NEXT_PUBLIC_SITE_DOMAIN} ${process.env.NEXT_PUBLIC_VERCEL_URL} ${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}`;

const contentSecurityPolicyComponents = [
  `base-uri 'self'`,
  // `connect-src 'self' *.clarity.ms *.facebook.com *.facebook.net *.klaviyo.com *.skimresources.com c.bing.com cdn.contentful.com fonts.googleapis.com fonts.gstatic.com images.ctfassets.net stats.g.doubleclick.net vitals.vercel-insights.com www.google-analytics.com www.googletagmanager.com ${domains}`,
  `connect-src *`,
  `default-src 'self' ${domains}`,
  `font-src 'self' fonts.googleapis.com fonts.gstatic.com widget-v4.tidiochat.com ${domains}`,
  `form-action 'self' www.facebook.com`,
  `frame-ancestors app.contentful.com`,
  `frame-src vercel.live www.facebook.com ${domains}`,
  `img-src 'self' data: *.clarity.ms *.facebook.com *.facebook.net *.klaviyo.com *.skimresources.com assets.vercel.com c.bing.com cdn.shopify.com fonts.gstatic.com heapanalytics.com s3-eu-west-1.amazonaws.com/hj-insights script.hotjar.com vercel.com www.google.co.uk www.google.com images.ctfassets.net www.google-analytics.com www.googletagmanager.com`,
  `media-src 'self' videos.ctfassets.net widget-v4.tidiochat.com`,
  `object-src 'none'`,
  `script-src 'self' 'unsafe-eval' *.clarity.ms *.facebook.net *.klaviyo.com *.skimresources.com heapanalytics.com vitals.vercel-insights.com`,
  `script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' data: *.clarity.ms *.facebook.com *.facebook.net *.klaviyo.com *.skimresources.com analytics.tiktok.com cdn.heapanalytics.com cdn.shopify.com cdn.vercel-insights.com code.tidio.co va.vercel-scripts.com vercel.live vitals.vercel-insights.com www.google-analytics.com www.googletagmanager.com script.hotjar.com static.hotjar.com widget-v4.tidiochat.com`,
  `style-src 'self' 'unsafe-inline' fonts.googleapis.com static.klaviyo.com`,
  `style-src-elem 'self' 'unsafe-inline' fonts.googleapis.com static.klaviyo.com www.googletagmanager.com`,
];

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicyComponents.join("; "),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Avoid Module not found: ESM packages (supports-color) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals
    esmExternals: "loose",
    // scrollRestoration: true,
    serverActions: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/account",
        destination: "https://account.uncnsrdlabel.com",
        permanent: true,
      },
    ];
  },
  transpilePackages: ['@uncnsrdlabel/*'],
};

module.exports = withPlugins([...plugins], nextConfig);

console.info("next.config.js", JSON.stringify(nextConfig, null, 2));
