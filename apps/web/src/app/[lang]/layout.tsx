import { HandleRouteChange } from "@/components/analytics/handle-route-change";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/layout/footer/index";
import { Progress } from "@/components/layout/progress/index";
import { Organization } from "@/components/schema.org/organization";
import { getDictionary } from "@/lib/get-dictionary";
import { SITE_DOMAIN, cn, getIETFLanguageTagFromlocaleTag, locales, themeColors } from "@uncnsrdlabel/lib";
import { AppProviders } from "@uncnsrdlabel/providers";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode, Suspense } from "react";
import "../globals.css";

const {
  TWITTER_CREATOR,
  TWITTER_SITE,
  NEXT_PUBLIC_SITE_NAME = "UNCNSRD",
} = process.env;

const languagesArray = locales.map((locale) => [
  getIETFLanguageTagFromlocaleTag(locale),
  [{
    title: getIETFLanguageTagFromlocaleTag(locale),
    url: new URL(
      `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN}/${locale}`,
    ),
  }],
]);

export const metadata: Metadata = {
  alternates: {
    canonical: new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN}`),
    languages: Object.fromEntries(languagesArray),
  },
  applicationName: NEXT_PUBLIC_SITE_NAME,
  appleWebApp: {
    capable: true,
    title: NEXT_PUBLIC_SITE_NAME,
    statusBarStyle: "default",
  },
  description: "UNCNSRD is multifunctional swimwear for female figures who aren’t afraid to show off their assets and want to feel unapologetically sexy.",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  keywords: [
    "bikini",
    "bikinis",
    "swimsuit",
    "swimsuits",
    "swimwear",
    "uncnsrd",
  ],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN}`),
  title: {
    default: NEXT_PUBLIC_SITE_NAME,
    template: `%s | ${NEXT_PUBLIC_SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  manifest: "/manifest.json",
  themeColor: "#ff4dd8",
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: "summary_large_image",
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE,
      },
    }),
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

const bomberEscort = localFont({
  src: "../fonts/bomber-escort/bomberescort.ttf",
  display: "swap",
  variable: "--font-bomber-escort",
  weight: "400",
});

const bomberEscortOutline = localFont({
  src: "../fonts/bomber-escort/bomberescortout.ttf",
  display: "swap",
  variable: "--font-bomber-escort-outline",
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: "300",
});

export async function generateStaticParams() {
  return locales.map((locale) => {
    const lang = getIETFLanguageTagFromlocaleTag(locale);

    return { lang };
  });
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const locale = new Intl.Locale(params.lang)

  const showBanner = false;

  const messages = await getDictionary(
    locale,
    "page.home"
  );

  return (
    <html
      className={cn(
        bomberEscort.variable,
        bomberEscortOutline.variable,
        montserrat.variable,
        // "[color-scheme:dark]",
        // "snap-y",
        // "dark"
      )}
      lang={params.lang}
    >
      <body
        className={cn(
          "grid min-h-[100dvh] grid-rows-[auto_1fr] tracking-widest",
          "selection:bg-hotPink",
          themeColors,
        )}
        style={{
          textRendering: "optimizeLegibility",
        }}
      >
        <AppProviders locale={getIETFLanguageTagFromlocaleTag(locale)} messages={messages}>
          <Progress />
          <Banner
            className={cn("sticky top-0 w-full", !showBanner && "hidden")}
          />
          <Suspense>
            {children}
            <Footer />
          </Suspense>
          <Organization />
          <HandleRouteChange />
        </AppProviders>
      </body>
    </html>
  );
}
