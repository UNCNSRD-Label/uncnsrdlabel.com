import { Banner } from "@/components/layout/banner";
import { Footer } from "@/components/layout/footer/index";
import { Progress } from "@/components/layout/progress/index";
import { LoadingDots } from "@/components/loading/dots";
import { Organization } from "@/components/schema.org/organization";
import { getDictionary } from "@/lib/dictionary";
import { getIntl } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import { themeColors } from "@/lib/tailwind";
import { type LayoutProps } from "@/types/next";
import {
  SITE_DOMAIN_WEB,
  cn,
  getIETFLanguageTagFromlocaleTag,
  getLocaleObjectFromIETFLanguageTag,
  locales,
} from "@uncnsrdlabel/lib";
import { AppProviders } from "@uncnsrdlabel/providers";
import { config } from "@uncnsrdlabel/tailwind-config";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { PropsWithChildren, Suspense } from "react";
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
  const intlMetadata = await getIntl(lang, "global.metadata");
  const intlKeywords = await getIntl(lang, "global.metadata.keywords");

  return {
    alternates: {
      canonical: new URL(
        `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`,
      ),
      languages: Object.fromEntries(languagesArray),
    },
    applicationName: NEXT_PUBLIC_SITE_NAME,
    appleWebApp: {
      capable: true,
      title: NEXT_PUBLIC_SITE_NAME,
      // statusBarStyle: "default",
      statusBarStyle: "black-translucent",
      startupImage: [
        "/assets/startup/apple-touch-startup-image-768x1004.png",
        {
          url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
          media: "(device-width: 768px) and (device-height: 1024px)",
        },
      ],
    },
    description: intlMetadata.formatMessage({ id: "description" }),
    formatDetection: {
      telephone: false,
      date: false,
      address: false,
      email: false,
      url: false,
    },
    keywords: [
      intlKeywords.formatMessage({ id: "bikini" }),
      intlKeywords.formatMessage({ id: "swimsuit" }),
      intlKeywords.formatMessage({ id: "swimwear" }),
      intlKeywords.formatMessage({ id: "beachwear" }),
      intlKeywords.formatMessage({ id: "sarong" }),
      intlKeywords.formatMessage({ id: "scarf" }),
      intlKeywords.formatMessage({ id: "boots" }),
    ],
    metadataBase: new URL(
      `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`,
    ),
    manifest: "/manifest.json",
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
  params: { lang },
}: PropsWithChildren<LayoutProps>) {
  const locale = getLocaleObjectFromIETFLanguageTag(lang);

  state$.lang.set(lang);
  state$.locale.set(locale);

  const showBanner = false;

  const messages = await getDictionary(locale, "page.home");

  return (
    <html
      className={cn(
        bomberEscort.variable,
        bomberEscortOutline.variable,
        montserrat.variable,
      )}
      lang={lang}
    >
      <body
        className={cn(
          "grid min-h-[100dvh] grid-rows-[auto_1fr] tracking-widest",
          "selection:bg-hotPink",
          themeColors,
        )}
      >
        <AppProviders
          locale={getIETFLanguageTagFromlocaleTag(locale)}
          messages={messages}
        >
          <Progress />
          <Banner
            className={cn("sticky top-0 w-full", !showBanner && "hidden")}
          />
          <Suspense fallback={<LoadingDots />}>
            {children}
            <Footer />
          </Suspense>
          <Organization />
        </AppProviders>
      </body>
    </html>
  );
}
