import { Banner } from "@/components/layout/banner";
import { Footer } from "@/components/layout/footer/index";
import { Progress } from "@/components/layout/progress/index";
import { LoadingDots } from "@/components/loading/dots";
import { Organization } from "@/components/schema.org/organization";
import { getDictionary } from "@/lib/dictionary";
import { languagesArray } from "@/lib/i18n";
import { getIntl } from "@/lib/i18n/server";
import { state$ } from "@/lib/store";
import { themeColors } from "@/lib/tailwind";
import { type LayoutProps } from "@/types/next";
import {
  cn,
  getIETFLanguageTagFromlocaleTag,
  getLocaleObjectFromIETFLanguageTag,
  locales
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

export async function generateMetadata({
  params: { lang },
}: LayoutProps): Promise<Metadata> {
  const intlMetadata = await getIntl(lang, "global.metadata");
  const intlKeywords = await getIntl(lang, "global.metadata.keywords");

  return {
    alternates: {
      canonical: "/",
      languages: Object.fromEntries(languagesArray("/")),
    },
    applicationName: NEXT_PUBLIC_SITE_NAME,
    appleWebApp: {
      capable: true,
      title: NEXT_PUBLIC_SITE_NAME,
      // statusBarStyle: "default",
      statusBarStyle: "black-translucent",
      startupImage: [
        {
          media:
            "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "/images/splash-screens/iPhone_14_Pro_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "/images/splash-screens/iPhone_14_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "/images/splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "/images/splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "/images/splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "/images/splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/iPhone_11__iPhone_XR_landscape.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          url: "/images/splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",
        },
        {
          media:
            "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",
        },
        {
          media:
            "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/12.9__iPad_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/10.9__iPad_Air_landscape.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/10.5__iPad_Air_landscape.png",
        },
        {
          media:
            "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/10.2__iPad_landscape.png",
        },
        {
          media:
            "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",
        },
        {
          media:
            "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          url: "/images/splash-screens/8.3__iPad_Mini_landscape.png",
        },
        {
          media:
            "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "/images/splash-screens/iPhone_14_Pro_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "/images/splash-screens/iPhone_14_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "/images/splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "/images/splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "/images/splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "/images/splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/iPhone_11__iPhone_XR_portrait.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          url: "/images/splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
        },
        {
          media:
            "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
        },
        {
          media:
            "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/12.9__iPad_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/10.9__iPad_Air_portrait.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/10.5__iPad_Air_portrait.png",
        },
        {
          media:
            "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/10.2__iPad_portrait.png",
        },
        {
          media:
            "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
        },
        {
          media:
            "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          url: "/images/splash-screens/8.3__iPad_Mini_portrait.png",
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
      intlKeywords.formatMessage({ id: "beachwear" }),
      intlKeywords.formatMessage({ id: "bikini" }),
      intlKeywords.formatMessage({ id: "boots" }),
      intlKeywords.formatMessage({ id: "sarong" }),
      intlKeywords.formatMessage({ id: "scarf" }),
      intlKeywords.formatMessage({ id: "swimsuit" }),
      intlKeywords.formatMessage({ id: "swimwear" }),
    ],
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
          "selection:bg-gray-500/50",
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
