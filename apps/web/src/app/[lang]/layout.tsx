import { Banner } from "@/components/layout/banner";
import { Footer } from "@/components/layout/footer/index";
import { Progress } from "@/components/layout/progress/index";
import { NavigationEvents } from "@/components/navigation-events";
import { Organization } from "@/components/schema.org/organization";
import { getDictionary } from "@/lib/dictionary";
import { getBaseMetadata } from "@/lib/metadata";
import { themeColors } from "@/lib/tailwind";
import { type LayoutProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { type LanguageCode } from "@shopify/hydrogen/storefront-api-types";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import {
  cn,
  getIETFLanguageTagFromlocaleTag,
  getLocaleObjectFromIETFLanguageTag,
  PRE_GENERATED_BCP47_LANGUAGE_TAGS,
} from "@uncnsrdlabel/lib";
import { AppProviders } from "@uncnsrdlabel/providers";
import { config } from "@uncnsrdlabel/tailwind-config";
import { intersection } from "lodash";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { PropsWithChildren, Suspense } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import "../globals.css";

export async function generateStaticParams() {
  const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en-AU";

  // We need to get the localization details here to ensure the state is set correctly for the static generation
  // The lang value can be anything as we just want the list of available languages
  const localization = await getLocalizationDetailsHandler({ lang });

  const languageCodes = localization.availableLanguages.map(
    (availableLanguage) =>
      availableLanguage.isoCode.toLocaleLowerCase() as LanguageCode,
  );

  const shopifyBCP47LanguageTags: Intl.BCP47LanguageTag[] =
    localization.availableCountries.flatMap((availableCountry) =>
      availableCountry.availableLanguages.map(
        (availableLanguage) =>
          `${availableLanguage.isoCode.toLocaleLowerCase()}-${
            availableCountry.isoCode
          }` as Intl.BCP47LanguageTag,
      ),
    );

  // To prevent extremely large builds, limit pre-generated BCP47 language tags to the intersection of the ones the Shopify store supports and the hard-coded list
  const preGeneratedBCP47LanguageTags = intersection(
    PRE_GENERATED_BCP47_LANGUAGE_TAGS,
    shopifyBCP47LanguageTags,
  );

  const availableBCP47LanguageTags = [...languageCodes, ...preGeneratedBCP47LanguageTags] 

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

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: "300",
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
          <Banner className={cn("sticky top-0 z-30 w-full")} lang={lang} />
          <Progress />
          {children}
          <Footer lang={lang} />
          <Organization />
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </AppProviders>
      </body>
    </html>
  );
}
