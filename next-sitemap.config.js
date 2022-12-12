/** @type {import('next-sitemap').IConfig} */
module.exports = {
  alternateRefs: [
    {
      href: `${process.env.VERCEL_URL}/es`,
      hreflang: "es",
    },
    {
      href: `${process.env.VERCEL_URL}/fr`,
      hreflang: "fr",
    },
  ],
  generateRobotsTxt: true,
  siteUrl: process.env.VERCEL_URL || "https://www.uncnsrdlabel.com",
};
