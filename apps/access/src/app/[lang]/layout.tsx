import { themeColors } from "@/lib/tailwind";
import {
  cn,
  getIETFLanguageTagFromlocaleTag,
  getLocaleObjectFromIETFLanguageTag
} from "@uncnsrdlabel/lib";
import { AppAnalyticsProvider } from "@uncnsrdlabel/providers";
import { config } from "@uncnsrdlabel/tailwind-config";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import { Organization } from "../../../../web/src/components/schema.org/organization";
import { getIntl } from "../../../../web/src/lib/i18n/server";
import { sharedMetadata } from "../../../../web/src/shared-metadata";
import { type LayoutProps } from "../../../../web/src/types/next";
import "../globals.css";

export async function generateMetadata({
  params: { lang },
}: LayoutProps): Promise<Metadata> {
  const intlMetadata = await getIntl(lang, "global.metadata");
  const intlKeywords = await getIntl(lang, "global.metadata.keywords");

  return {
    ...sharedMetadata,
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
      ...sharedMetadata.openGraph,
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
