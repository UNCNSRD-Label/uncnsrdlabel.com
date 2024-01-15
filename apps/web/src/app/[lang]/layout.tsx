import { Banner } from "@/components/layout/banner";
import { Footer } from "@/components/layout/footer/index";
import { Progress } from "@/components/layout/progress/index";
import { SetState } from "@/components/layout/set-state";
import { NavigationEvents } from '@/components/navigation-events';
import { Organization } from "@/components/schema.org/organization";
import { getIntl } from "@/lib/i18n";
import { getBaseMetadata } from "@/lib/metadata";
import { state$ } from "@/lib/store";
import { themeColors } from "@/lib/tailwind";
import { type LayoutProps } from "@/types/next";
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen/storefront-api-types";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import {
  PRE_GENERATED_BCP47_LANGUAGE_TAGS,
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
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: LayoutProps): Promise<Metadata> {
  const intlMetadata = await getIntl(lang, "global.metadata");
  const intlKeywords = await getIntl(lang, "global.metadata.keywords");

  const baseMetadata = await getBaseMetadata();

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
  const localization = await getLocalizationDetailsHandler({});

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

  return [...languageCodes, ...preGeneratedBCP47LanguageTags].map((lang) => ({
    lang,
  }));
}

export default async function RootLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: PropsWithChildren<LayoutProps>) {
  if (lang) {
    const localization = await getLocalizationDetailsHandler({ lang });

    state$.country.set(lang.split("-")[1] as CountryCode);
    state$.lang.set(lang);
    state$.language.set(lang.split("-")[0] as LanguageCode);
    state$.localization.set(localization);
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
          "grid grid-rows-[auto_1fr] min-h-[100dvh] tracking-widest",
        )}
      >
        <AppProviders lang={lang}>
          <SetState lang={lang} />
          <Banner
            className={cn("sticky top-0 w-full z-30")}
          />
          <Progress />
          {children}
          <Footer />
          <Organization />
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </AppProviders>
      </body>
    </html>
  );
}
