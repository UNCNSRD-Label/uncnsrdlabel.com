import { clsx } from "clsx";
import { Analytics } from "components/analytics";
import Banner from "components/banner";
import Footer from "components/layout/footer";
import Progress from "components/layout/progress";
import { Organization } from "components/schema.org/organization";
import { themeColors } from "lib/effects";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const {
  TWITTER_CREATOR,
  TWITTER_SITE,
  NEXT_PUBLIC_SITE_NAME = "UNCNSRD",
} = process.env;

export const metadata = {
  // icons: {
  //   icon: ['/images/icon.svg', '/images/icon.png', '/images/favicon.ico'],
  //   apple: '/images/icon.svg'
  // },
  title: {
    default: NEXT_PUBLIC_SITE_NAME,
    template: `%s | ${NEXT_PUBLIC_SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: "summary_large_image",
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE,
      },
    }),
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
};

const bomberEscort = localFont({
  src: "./fonts/bomber-escort/bomberescort.ttf",
  display: "swap",
  variable: "--font-bomber-escort",
  weight: "400",
});

const bomberEscortOutline = localFont({
  src: "./fonts/bomber-escort/bomberescortout.ttf",
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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const hideBanner = true;

  return (
    <html
      lang="en"
      className={clsx(
        bomberEscort.variable,
        bomberEscortOutline.variable,
        inter.variable,
        montserrat.variable,
        // "[color-scheme:dark]",
        "snap-y"
        // "dark"
      )}
    >
      <body
        className={clsx(
          "grid min-h-[100dvh] grid-rows-[auto_1fr] tracking-widest",
          "selection:bg-hotPink",
          themeColors
        )}
        style={{
          textRendering: "optimizeLegibility",
        }}
      >
        <Progress />
        <Banner
          className={clsx("sticky top-0 w-full", hideBanner && "hidden")}
        />
        <Suspense>
          {children}
          <Footer />
          <Analytics />
          <Organization />
        </Suspense>
      </body>
    </html>
  );
}
