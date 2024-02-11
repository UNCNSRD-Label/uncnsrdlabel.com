import { Banner } from "@/components/layout/banner";
import { Footer } from "@/components/layout/footer/index";
import { Progress } from "@/components/layout/progress/index";
import { NavigationEvents } from "@/components/navigation-events";
import { Organization } from "@/components/schema.org/organization";
import { ShopifyCookies } from "@/components/shopify-cookies";
import { getDictionary } from "@/lib/dictionary";
import { getAvailableBCP47LanguageTags } from "@/lib/i18n";
import { getBaseMetadata } from "@/lib/metadata";
import { themeColors } from "@/lib/tailwind";
import { type LayoutProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { Toaster } from "@uncnsrdlabel/components/atoms/sonner";
import {
  cn,
  getIETFLanguageTagFromlocaleTag,
  getLocaleObjectFromIETFLanguageTag
} from "@uncnsrdlabel/lib";
import { AppProviders } from "@uncnsrdlabel/providers";
import { config } from "@uncnsrdlabel/tailwind-config";
import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { PropsWithChildren, Suspense } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import "../globals.css";

export async function generateStaticParams() {
  const availableBCP47LanguageTags = await getAvailableBCP47LanguageTags();

  return availableBCP47LanguageTags.map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: LayoutProps): Promise<Metadata> {
  if (lang === "favicon.ico") {
    return {};
  }

  const messages: ResolvedIntlConfig["messages"] = await getDictionary({
    lang,
  });

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const baseMetadata = await getBaseMetadata({ lang, path: "/" });

  return {
    ...baseMetadata,
    description: intl.formatMessage({ id: "global.metadata.description" }),
    keywords: [
      // TODO: Add keywords from Shopify
      intl.formatMessage({ id: "global.metadata.keywords.beachwear" }),
      intl.formatMessage({ id: "global.metadata.keywords.bikini" }),
      intl.formatMessage({ id: "global.metadata.keywords.boots" }),
      intl.formatMessage({ id: "global.metadata.keywords.sarong" }),
      intl.formatMessage({ id: "global.metadata.keywords.scarf" }),
      intl.formatMessage({ id: "global.metadata.keywords.swimsuit" }),
      intl.formatMessage({ id: "global.metadata.keywords.swimwear" }),
    ],
    openGraph: {
      ...baseMetadata.openGraph,
      description: intl.formatMessage({ id: "global.metadata.description" }),
      locale: getIETFLanguageTagFromlocaleTag(
        getLocaleObjectFromIETFLanguageTag(lang),
      ),
    },
  };
}

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

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "600", "700"],
});

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

export default async function RootLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  if (lang === "favicon.ico") {
    return null;
  }

  return (
    <html
      className={cn(
        bomberEscort.variable,
        bomberEscortOutline.variable,
        lato.variable,
        montserrat.variable,
      )}
      lang={lang}
    >
      <body
        className={cn(
          themeColors,
          "grid min-h-[100dvh] grid-rows-[auto_1fr] tracking-widest",
        )}
      >
        <AppProviders lang={lang}>
          <Banner className={cn("sticky top-0 w-full z-30")} lang={lang} />
          <Progress />
          {children}
          <Footer lang={lang} />
          <Organization />
          <Suspense fallback={null}>
            <NavigationEvents />
            <ShopifyCookies />
          </Suspense>
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
