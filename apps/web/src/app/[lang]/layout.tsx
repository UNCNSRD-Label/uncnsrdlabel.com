import { HandleRouteChange } from "@/components/analytics/handle-route-change";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/layout/footer/index";
import { Progress } from "@/components/layout/progress";
import { Organization } from "@/components/schema.org/organization";
import { SITE_DOMAIN } from "@uncnsrdlabel/lib/constants";
import { themeColors } from "@uncnsrdlabel/lib/effects";
import { locales } from "@uncnsrdlabel/lib/i18n";
import { AppProviders } from "@uncnsrdlabel/providers";
import { clsx } from "clsx";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode, Suspense } from "react";
import "../globals.css";

const {
  TWITTER_CREATOR,
  TWITTER_SITE,
  NEXT_PUBLIC_SITE_NAME = "UNCNSRD",
} = process.env;

export const metadata = {
  applicationName: NEXT_PUBLIC_SITE_NAME,
  appleWebApp: {
    capable: true,
    title: NEXT_PUBLIC_SITE_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  keywords: [
    "bikini",
    "bikinis",
    "swimsuit",
    "swimsuits",
    "swimwear",
    "uncnsrd",
  ],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN}`),
  title: {
    default: NEXT_PUBLIC_SITE_NAME,
    template: `%s | ${NEXT_PUBLIC_SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  manifest: "/manifest.json",
  themeColor: "#ff4dd8",
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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: "300",
});

export async function generateStaticParams() {
  return locales.map((locale) => {
    const lang = locale.toString();

    return { lang };
  });
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const hideBanner = true;

  return (
    <html
      className={clsx(
        bomberEscort.variable,
        bomberEscortOutline.variable,
        inter.variable,
        montserrat.variable,
        // "[color-scheme:dark]",
        "snap-y",
        // "dark"
      )}
      lang={params.lang}
    >
      <body
        className={clsx(
          "grid min-h-[100dvh] grid-rows-[auto_1fr] tracking-widest",
          "selection:bg-hotPink",
          themeColors,
        )}
        style={{
          textRendering: "optimizeLegibility",
        }}
      >
        <AppProviders>
          <Progress />
          <Banner
            className={clsx("sticky top-0 w-full", hideBanner && "hidden")}
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
