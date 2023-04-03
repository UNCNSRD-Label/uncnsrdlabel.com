/** @type {import('next-sitemap').IConfig} */

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL

module.exports = {
  additionalSitemaps: [
    `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_SHOP_URL}/sitemap.xml`,
  ],
  alternateRefs: process.env.NEXT_PUBLIC_LOCALES_WITH_STORE?.split(',').map(
    (locale) => ({
      href: `${process.env.VERCEL_URL}/${locale}`,
      hreflang: locale,
    })
  ),
  exclude: ['/500'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search'],
      },
    ],
  },
  siteUrl: `${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}`,
}
