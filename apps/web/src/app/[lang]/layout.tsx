import { HandleRouteChange } from "@/components/analytics/handle-route-change";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/layout/footer/index";
import { Progress } from "@/components/layout/progress/index";
import { Organization } from "@/components/schema.org/organization";
import { getDictionary } from "@/lib/get-dictionary";
import { getIntl } from "@/lib/i18n/server";
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

export async function generateMetadata(
  
): Promise<Metadata> {
  const intlMetadata = await getIntl("global.metadata");
  const intlKeywords = await getIntl("global.metadata.keywords");
 
  return {
    alternates: {
      canonical: new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN}`),
      languages: Object.fromEntries(languagesArray),
    },
    applicationName: NEXT_PUBLIC_SITE_NAME,
    appleWebApp: {
      capable: true,
      title: NEXT_PUBLIC_SITE_NAME,
      // statusBarStyle: "default",
      statusBarStyle: 'black-translucent',
      startupImage: [
        '/assets/startup/apple-touch-startup-image-768x1004.png',
        {
          url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
          media: '(device-width: 768px) and (device-height: 1024px)',
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
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN}`),
    manifest: "/manifest.json",
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(
            process.env.NEXT_PUBLIC_SITE_NAME || "",
          )}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    robots: {
      follow: true,
      index: true,
    },
    // TODO: Retrieve from Tailwind config
    themeColor: "#ff4dd8",
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
    viewport:
      "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  }
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

export async function generateStaticParams() {
  return locales.map((locale) => {
    const lang = getIETFLanguageTagFromlocaleTag(locale);

    return { lang };
  });
}

export default async function RootLayout({
  children,
  params: { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! },
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const locale = new Intl.Locale(lang)

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
      lang={lang}
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
