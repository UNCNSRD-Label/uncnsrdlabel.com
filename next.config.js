/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const contentSecurityPolicyComponents = [
  `base-uri 'self'`,
  // `connect-src 'self' *.clarity.ms *.facebook.com *.facebook.net *.klaviyo.com *.skimresources.com c.bing.com cdn.contentful.com ${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN.replace('https://', '')} fonts.googleapis.com fonts.gstatic.com images.ctfassets.net ${process.env.NEXT_PUBLIC_BASE_URL} ${process.env.NEXT_PUBLIC_VERCEL_URL} stats.g.doubleclick.net vitals.vercel-insights.com www.google-analytics.com www.googletagmanager.com`,
  `connect-src *`,
  `default-src 'self' ${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN.replace(
    `${process.env.NEXT_PUBLIC_PROTOCOL}://`,
    ''
  )}`,
  `font-src 'self' fonts.googleapis.com fonts.gstatic.com ${process.env.NEXT_PUBLIC_BASE_URL} ${process.env.NEXT_PUBLIC_VERCEL_URL} www.collagerie.com`,
  `form-action 'self' www.facebook.com`,
  `frame-src vercel.live www.facebook.com`,
  `img-src 'self' data: *.clarity.ms *.facebook.com *.facebook.net *.klaviyo.com *.skimresources.com assets.vercel.com c.bing.com cdn.shopify.com fonts.gstatic.com www.google.co.uk/ads www.google.com/ads images.ctfassets.net www.google-analytics.com www.googletagmanager.com via.placeholder.com`,
  `media-src 'self' videos.ctfassets.net`,
  `object-src 'none'`,
  `script-src 'self' 'unsafe-eval' *.clarity.ms *.facebook.net *.klaviyo.com *.skimresources.com vitals.vercel-insights.com`,
  `script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' data: *.clarity.ms *.facebook.com *.facebook.net *.klaviyo.com *.skimresources.com cdn.vercel-insights.com vercel.live vitals.vercel-insights.com www.google-analytics.com www.googletagmanager.com`,
  `style-src 'self' 'unsafe-inline' fonts.googleapis.com static.klaviyo.com`,
  `style-src-elem 'self' 'unsafe-inline' fonts.googleapis.com static.klaviyo.com www.googletagmanager.com`,
]

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicyComponents.join('; '),
  },
]

const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error'],
      },
    },
  }),
  experimental: {
    appDir: true,
    // Avoid Module not found: ESM packages (supports-color) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals
    esmExternals: 'loose',
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    domains: ['cdn.shopify.com', 'images.ctfassets.net'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: process.env.NEXT_PUBLIC_LOCALES_WITH_STORE?.split(','),
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
    localeDetection: true,
  },
  poweredByHeader: false,
  reactStrictMode: true, // see https://flaviocopes.com/nextjs-serialize-date-json/
  async redirects() {
    return [
      {
        source: '/brand/:path*',
        destination: '/brands/:path*',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_SHOP_URL}/pages/contact-us`,
        permanent: true,
      },
      {
        source: '/pages/privacy',
        destination: '/policies/privacy-policy',
        permanent: true,
      },
      {
        source: '/pages/shipping-returns',
        destination: '/policies/shipping-policy',
        permanent: true,
      },
      {
        source: '/pages/terms',
        destination: '/policies/terms-of-service',
        permanent: true,
      },
      {
        source: '/collections',
        destination: '/collections/just-in',
        permanent: true,
      },
      {
        source: '/collection/:path*',
        destination: '/collections/:path*',
        permanent: true,
      },
      {
        source: '/product/:path*',
        destination: '/products/:path*',
        permanent: true,
      },
      {
        source: '/whats-new/:path*',
        destination: '/discover/:path*',
        permanent: true,
      },
      {
        source: '/whats-new',
        destination: '/discover',
        permanent: true,
      },
    ]
  },
  rewrites() {
    return [
      {
        source: '/about',
        destination: '/about/about',
      },
      {
        source: '/affiliate',
        destination: '/pages/affiliate',
      },
      {
        source: '/career',
        destination: '/pages/career',
      },
      // {
      //   source: '/contact-us',
      //   destination: '/pages/contact-us',
      // },
      {
        source: '/partner',
        destination: '/about/partner',
      },
      {
        source: '/privacy-policy',
        destination: '/policies/privacy-policy',
      },
      {
        source: '/refund-policy',
        destination: '/policies/refund-policy',
      },
      {
        source: '/shipping-policy',
        destination: '/policies/shipping-policy',
      },
      {
        source: '/terms-of-service',
        destination: '/policies/terms-of-service',
      },
      {
        source: '/wondrous-winter-giveaway',
        destination: '/competition',
      },
    ].filter(Boolean)
  },
  webpack: (config) => {
    config.experiments = {
      layers: true,
      topLevelAwait: true,
    }
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })
    return config
  },
}

const plugins = []

plugins.push([withBundleAnalyzer])

plugins.push([
  withPWA({
    buildExcludes: [/middleware-manifest.json$/, /_middleware.js$/],
    dest: 'public',
    disable: process.env.WITH_PWA !== 'true',
    runtimeCaching,
  }),
])

if (process.env.OUTPUT_STANDALONE === 'true') {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    outputStandalone: true,
  }
}

module.exports = withPlugins([...plugins], nextConfig)

// Don't delete this console info, useful to see the commerce config in Vercel deployments
console.info('next.config.js', JSON.stringify(nextConfig, null, 2))
