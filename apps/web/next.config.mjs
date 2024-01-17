import bundleAnalyzer from "@next/bundle-analyzer";
import withSerwistInit from "@serwist/next";
import withPlugins from "next-compose-plugins";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withSerwist = withSerwistInit({
  cacheOnFrontEndNav: true,
  disable: process.env.NEXT_PUBLIC_FEATURE_FLAG_PWA !== "true",
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

const plugins = [withBundleAnalyzer, withSerwist];

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const domains = [
  `www.${process.env.NEXT_PUBLIC_SITE_DOMAIN_WEB_PRODUCTION}`,
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  process.env.NEXT_PUBLIC_SITE_DOMAIN_WEB, // localhost, production or preview
  process.env.NEXT_PUBLIC_SITE_DOMAIN_WEB_PRODUCTION, // production for anything directly linked to the web app
  process.env.NEXT_PUBLIC_VERCEL_URL,
]
  .filter(onlyUnique)
  .join(" ");

// See https://www.google.com/supported_domains
const googleSupportedDomains = [
  ".google.com",
  ".google.ad",
  ".google.ae",
  // ".google.com.af",
  ".google.com.ag",
  // ".google.al",
  // ".google.am",
  // ".google.co.ao",
  ".google.com.ar",
  ".google.as",
  ".google.at",
  ".google.com.au",
  // ".google.az",
  // ".google.ba",
  // ".google.com.bd",
  ".google.be",
  // ".google.bf",
  ".google.bg",
  // ".google.com.bh",
  // ".google.bi",
  // ".google.bj",
  ".google.com.bn",
  // ".google.com.bo",
  ".google.com.br",
  ".google.bs",
  // ".google.bt",
  // ".google.co.bw",
  // ".google.by",
  ".google.com.bz",
  ".google.ca",
  // ".google.cd",
  // ".google.cf",
  // ".google.cg",
  ".google.ch",
  // ".google.ci",
  ".google.co.ck",
  ".google.cl",
  // ".google.cm",
  ".google.cn",
  ".google.com.co",
  ".google.co.cr",
  // ".google.com.cu",
  // ".google.cv",
  ".google.com.cy",
  ".google.cz",
  ".google.de",
  // ".google.dj",
  ".google.dk",
  ".google.dm",
  ".google.com.do",
  ".google.dz",
  ".google.com.ec",
  ".google.ee",
  ".google.com.eg",
  ".google.es",
  // ".google.com.et",
  ".google.fi",
  ".google.com.fj",
  // ".google.fm",
  ".google.fr",
  // ".google.ga",
  // ".google.ge",
  ".google.gg",
  // ".google.com.gh",
  ".google.com.gi",
  ".google.gl",
  // ".google.gm",
  ".google.gr",
  // ".google.com.gt",
  ".google.gy",
  ".google.com.hk",
  // ".google.hn",
  ".google.hr",
  // ".google.ht",
  ".google.hu",
  // ".google.co.id",
  ".google.ie",
  ".google.co.il",
  ".google.im",
  ".google.co.in",
  // ".google.iq",
  ".google.is",
  ".google.it",
  ".google.je",
  ".google.com.jm",
  // ".google.jo",
  ".google.co.jp",
  ".google.co.ke",
  // ".google.com.kh",
  // ".google.ki",
  // ".google.kg",
  ".google.co.kr",
  ".google.com.kw",
  ".google.kz",
  // ".google.la",
  ".google.com.lb",
  ".google.li",
  // ".google.lk",
  // ".google.co.ls",
  ".google.lt",
  ".google.lu",
  ".google.lv",
  // ".google.com.ly",
  // ".google.co.ma",
  ".google.md",
  ".google.me",
  // ".google.mg",
  ".google.mk",
  ".google.ml",
  // ".google.com.mm",
  // ".google.mn",
  ".google.com.mt",
  ".google.mu",
  ".google.mv",
  // ".google.mw",
  ".google.com.mx",
  ".google.com.my",
  // ".google.co.mz",
  // ".google.com.na",
  // ".google.com.ng",
  // ".google.com.ni",
  // ".google.ne",
  ".google.nl",
  ".google.no",
  // ".google.com.np",
  // ".google.nr",
  ".google.nu",
  ".google.co.nz",
  // ".google.com.om",
  ".google.com.pa",
  ".google.com.pe",
  // ".google.com.pg",
  ".google.com.ph",
  // ".google.com.pk",
  ".google.pl",
  ".google.pn",
  ".google.com.pr",
  // ".google.ps",
  ".google.pt",
  ".google.com.py",
  ".google.com.qa",
  ".google.ro",
  // ".google.ru",
  // ".google.rw",
  ".google.com.sa",
  ".google.com.sb",
  ".google.sc",
  ".google.se",
  ".google.com.sg",
  ".google.sh",
  ".google.si",
  ".google.sk",
  // ".google.com.sl",
  // ".google.sn",
  // ".google.so",
  ".google.sm",
  // ".google.sr",
  // ".google.st",
  ".google.com.sv",
  // ".google.td",
  // ".google.tg",
  ".google.co.th",
  // ".google.com.tj",
  // ".google.tl",
  // ".google.tm",
  // ".google.tn",
  // ".google.to",
  ".google.com.tr",
  // ".google.tt",
  ".google.com.tw",
  // ".google.co.tz",
  ".google.com.ua",
  // ".google.co.ug",
  ".google.co.uk",
  ".google.com.uy",
  // ".google.co.uz",
  ".google.com.vc",
  ".google.co.ve",
  ".google.co.vi",
  ".google.com.vn",
  // ".google.vu",
  // ".google.ws",
  ".google.rs",
  ".google.co.za",
  // ".google.co.zm",
  // ".google.co.zw",
  ".google.cat",
];

const contentSecurityPolicyComponents = [
  `base-uri 'self'`,
  // `connect-src 'self' *.clarity.ms *.facebook.com *.facebook.net *.klaviyo.com *.skimresources.com c.bing.com cdn.contentful.com fonts.googleapis.com fonts.gstatic.com images.ctfassets.net stats.g.doubleclick.net vitals.vercel-insights.com www.google-analytics.com www.googletagmanager.com ${domains}`,
  `connect-src *`,
  `default-src 'self' ${domains}`,
  `font-src 'self' fonts.googleapis.com fonts.gstatic.com sc-static.net widget-v4.tidiochat.com ${domains}`,
  `form-action 'self' www.facebook.com`,
  `frame-ancestors app.contentful.com`,
  `frame-src 'self' td.doubleclick.net vercel.live www.facebook.com ${domains}`,
  `img-src 'self' data: *.clarity.ms *.facebook.com *.facebook.net *.klaviyo.com *.skimresources.com assets.tidiochat.com assets.vercel.com c.bing.com cdnjs.cloudflare.com/ajax/libs/twemoji/ cdn.shopify.com fonts.gstatic.com googleads.g.doubleclick.net heapanalytics.com s3.amazonaws.com/bp9hssvzhoimfzyehfletkb8havpgjc2/conversation/ s3.amazonaws.com/tidio-files/ s3-eu-west-1.amazonaws.com/hj-insights script.hotjar.com vercel.com ${googleSupportedDomains.map(domain => `www${domain}`).join(' ')} images.ctfassets.net tidio-images-messenger.s3.amazonaws.com www.google-analytics.com www.googletagmanager.com`,
  `media-src 'self' cdn.shopify.com videos.ctfassets.net widget-v4.tidiochat.com`,
  `object-src 'self'`,
  `script-src 'self' 'unsafe-eval' *.clarity.ms *.facebook.net *.klaviyo.com *.skimresources.com heapanalytics.com vitals.vercel-insights.com`,
  `script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' data: *.clarity.ms *.facebook.com *.facebook.net *.klaviyo.com *.skimresources.com analytics.tiktok.com cdn.heapanalytics.com cdn.shopify.com cdn.tailwindcss.com cdn.vercel-insights.com code.tidio.co va.vercel-scripts.com vercel.live vitals.vercel-insights.com www.google-analytics.com www.googletagmanager.com sc-static.net script.hotjar.com static.hotjar.com widget-v4.tidiochat.com www.googleadservices.com`,
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
  // eslint: {
  //   // Disabling on production builds because we're running checks on PRs via GitHub Actions.
  //   ignoreDuringBuilds: true,
  // },
  experimental: {
    // swcPlugins: [
    //   ['@victorandree/graphql-codegen-client-preset-swc-plugin', { artifactDirectory: '@uncnsrdlabel/graphql-shopify-storefront/codegen', gqlTagName: 'graphql' }]
    // ],
    scrollRestoration: true,
    webpackBuildWorker: true,
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
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/account",
        destination: "https://account.uncnsrdlabel.com",
        permanent: true,
      },
    ];
  },
  transpilePackages: [
    "@uncnsrdlabel/graphql-shopify-admin",
    "@uncnsrdlabel/graphql-shopify-storefront",
    "@uncnsrdlabel/lib",
    "@uncnsrdlabel/providers",
    // "@uncnsrdlabel/tailwind-config",
    // "@uncnsrdlabel/ui",
  ],
};

export default withPlugins([...plugins], nextConfig);

console.info("next.config.js", JSON.stringify(nextConfig, null, 2));
