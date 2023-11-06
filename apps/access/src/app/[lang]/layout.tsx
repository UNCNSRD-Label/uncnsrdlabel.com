import { themeColors } from "@/lib/tailwind";
import {
  SITE_DOMAIN_WEB,
  cn,
  getIETFLanguageTagFromlocaleTag,
  getLocaleObjectFromIETFLanguageTag,
  locales,
} from "@uncnsrdlabel/lib";
import { AppAnalyticsProvider } from "@uncnsrdlabel/providers";
import { config } from "@uncnsrdlabel/tailwind-config";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import { Organization } from "../../../../web/src/components/schema.org/organization";
import { type LayoutProps } from "../../../../web/src/types/next";
import "../globals.css";

const {
  TWITTER_CREATOR,
  TWITTER_SITE,
  NEXT_PUBLIC_SITE_NAME = "UNCNSRD",
} = process.env;

const languagesArray = locales.map((locale) => [
  getIETFLanguageTagFromlocaleTag(locale),
  [
    {
      title: getIETFLanguageTagFromlocaleTag(locale),
      url: new URL(
        `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}/${locale}`,
      ),
    },
  ],
]);

export async function generateMetadata({
  params: { lang },
}: LayoutProps): Promise<Metadata> {
  return {
    alternates: {
      canonical: "/",
      languages: Object.fromEntries(languagesArray),
    },
    applicationName: NEXT_PUBLIC_SITE_NAME,
    appleWebApp: {
      capable: true,
      title: NEXT_PUBLIC_SITE_NAME,
      // statusBarStyle: "default",
      statusBarStyle: "black-translucent",
    },
    description:
      "Discover UNCNSRD, a brand for the unapologetic rebellious soul. Explore our latest swimwear collection drawing inspiration from timeless cuts & nostalgic eras.",
    formatDetection: {
      telephone: false,
      date: false,
      address: false,
      email: false,
      url: false,
    },
    manifest: "/manifest.json",
    openGraph: {
      description:
      "Discover UNCNSRD, a brand for the unapologetic rebellious soul. Explore our latest swimwear collection drawing inspiration from timeless cuts & nostalgic eras.",
      title: NEXT_PUBLIC_SITE_NAME,
    },
    robots: {
      follow: true,
      index: true,
    },
    title: {
      default: NEXT_PUBLIC_SITE_NAME,
      template: `%s | ${NEXT_PUBLIC_SITE_NAME}`,
    },
    ...(TWITTER_CREATOR &&
      TWITTER_SITE && {
        twitter: {
          card: "summary_large_image",
          creator: TWITTER_CREATOR,
          site: TWITTER_SITE,
        },
      }),
  };
}

export const viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  shrinkToFit: "no",
  viewportFit: "cover",
  // @ts-expect-error Property 'hotPink' does not exist on type 'ResolvableTo<RecursiveKeyValuePair<string, string>>'.
  ...(config.theme?.extend?.colors?.hotPink && {
    // @ts-expect-error Property 'hotPink' does not exist on type 'ResolvableTo<RecursiveKeyValuePair<string, string>>'.
    themeColor: config.theme.extend.colors.hotPink,
  }),
};

const bomberEscort = localFont({
  src: "../../../../web/src/app/fonts/bomber-escort/bomberescort.ttf",
  display: "swap",
  variable: "--font-bomber-escort",
  weight: "400",
});

const bomberEscortOutline = localFont({
  src: "../../../../web/src/app/fonts/bomber-escort/bomberescortout.ttf",
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

export default async function AccessRootLayout({
  children,
  params: { lang },
}: PropsWithChildren<LayoutProps>) {
  const locale = getLocaleObjectFromIETFLanguageTag(lang);

  return (
    <html
      className={cn(
        bomberEscort.variable,
        bomberEscortOutline.variable,
        montserrat.variable,
        "snap-y",
      )}
      lang="en"
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
        <AppAnalyticsProvider>
          {children}
          <Organization />
        </AppAnalyticsProvider>
      </body>
    </html>
  );
}
