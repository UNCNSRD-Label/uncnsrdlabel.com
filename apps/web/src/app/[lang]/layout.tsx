import { GTMConsent } from "@/components/consent/gtm-consent";
import { Banner } from "@/components/layout/banner";
import { Footer } from "@/components/layout/footer/index";
import { Navbar } from "@/components/layout/navbar/index";
import { Progress } from "@/components/layout/progress/index";
import { LinkedDataOrganization } from "@/components/linked-data/organization";
import { ShopifyCookies } from "@/components/shopify-cookies";
import { getDictionary } from "@/lib/dictionary";
import { getAvailableBCP47LanguageTags } from "@/lib/i18n";
import { getBaseMetadata } from "@/lib/metadata";
import { themeColors } from "@/lib/tailwind";
import { type LayoutProps } from "@/types/next";
import { createIntl } from "@formatjs/intl";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "@uncnsrdlabel/components/atoms/sonner";
import {
  SITE_DOMAIN_WEB,
  cn,
  getIETFLanguageTagFromlocaleTag,
  getLocaleObjectFromIETFLanguageTag,
} from "@uncnsrdlabel/lib";
import { AppProviders } from "@uncnsrdlabel/providers";
import config from "@uncnsrdlabel/tailwind-config";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import "../globals.css";
import "./taint";

const { NEXT_PUBLIC_PROTOCOL } = process.env;

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

  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

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
    metadataBase: new URL(`${NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`),
    openGraph: {
      ...baseMetadata.openGraph,
      description: intl.formatMessage({ id: "global.metadata.description" }),
      locale: getIETFLanguageTagFromlocaleTag(
        getLocaleObjectFromIETFLanguageTag(lang),
      ),
    },
    title: intl.formatMessage({ id: "global.metadata.title" }),
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
  initialScale: 1,
  minimumScale: 1,
  shrinkToFit: "no",
  themeColor: config.theme.extend.colors.hotPink,
  viewportFit: "cover",
  width: "device-width",
};

export default async function Layout({
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
          <Banner
            className={cn("pt-safeTop sticky top-0 w-full")}
            lang={lang}
          />
          <Progress />
          <Navbar
            className="top-safeTop sticky left-0 z-10 w-full drop-shadow"
            lang={lang}
          />
          {children}
          <Footer lang={lang} />
          <Toaster />

          <ShopifyCookies />

          <LinkedDataOrganization lang={lang} />

          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!}
          />
          <GTMConsent />

          <SpeedInsights />
          <VercelAnalytics />
        </AppProviders>
      </body>
    </html>
  );
}
