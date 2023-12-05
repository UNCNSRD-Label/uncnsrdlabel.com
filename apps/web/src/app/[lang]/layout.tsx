import { Banner } from "@/components/layout/banner";
import { Footer } from "@/components/layout/footer/index";
import { Progress } from "@/components/layout/progress/index";
import { LoadingDots } from "@/components/loading/dots";
import { Organization } from "@/components/schema.org/organization";
import { getIntl } from "@/lib/i18n";
import { getBaseMetadata } from "@/lib/metadata";
import { themeColors } from "@/lib/tailwind";
import { type LayoutProps } from "@/types/next";
import { getLocalizationAvailableBCP47LanguageTagsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import {
  DEFAULT_BCP47_LANGUAGE_TAGS,
  cn,
  getIETFLanguageTagFromlocaleTag,
  getLocaleObjectFromIETFLanguageTag,
} from "@uncnsrdlabel/lib";
import { AppProviders } from "@uncnsrdlabel/providers";
import { config } from "@uncnsrdlabel/tailwind-config";
import { intersection } from "lodash";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { PropsWithChildren, Suspense } from "react";
import "../globals.css";

export async function generateMetadata({
  params: { lang },
}: LayoutProps): Promise<Metadata> {
  const intlMetadata = await getIntl(lang, "global.metadata");
  const intlKeywords = await getIntl(lang, "global.metadata.keywords");

  const baseMetadata = await getBaseMetadata({
    lang,
  });

  return {
    ...baseMetadata,
    description: intlMetadata.formatMessage({ id: "description" }),
    keywords: [
      intlKeywords.formatMessage({ id: "beachwear" }),
      intlKeywords.formatMessage({ id: "bikini" }),
      intlKeywords.formatMessage({ id: "boots" }),
      intlKeywords.formatMessage({ id: "sarong" }),
      intlKeywords.formatMessage({ id: "scarf" }),
      intlKeywords.formatMessage({ id: "swimsuit" }),
      intlKeywords.formatMessage({ id: "swimwear" }),
    ],
    openGraph: {
      ...baseMetadata.openGraph,
      description: intlMetadata.formatMessage({ id: "description" }),
      locale: getIETFLanguageTagFromlocaleTag(
        getLocaleObjectFromIETFLanguageTag(lang),
      ),
    },
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
  const localization = await getLocalizationAvailableBCP47LanguageTagsHandler();

  const shopifyBCP47LanguageTags: Intl.BCP47LanguageTag[] =
    localization.availableCountries.flatMap((availableCountry) =>
      availableCountry.availableLanguages.map(
        (availableLanguage) =>
          `${availableLanguage.isoCode.toLocaleLowerCase()}-${
            availableCountry.isoCode
          }` as Intl.BCP47LanguageTag,
      ),
    );

  const supportedDefaultBCP47LanguageTags = intersection(
    DEFAULT_BCP47_LANGUAGE_TAGS,
    shopifyBCP47LanguageTags,
  );

  return supportedDefaultBCP47LanguageTags.map((BCP47LanguageTag) => ({
    lang: BCP47LanguageTag,
  }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: PropsWithChildren<LayoutProps>) {
  const showBanner = false;

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
        <AppProviders lang={lang}>
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
