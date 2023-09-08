import { Organization } from "@/components/schema.org/organization";
import { SITE_DOMAIN_WEB } from "@/lib/constants";
import { themeColors } from "@/lib/effects";
import { cn } from "@uncnsrdlabel/lib";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode, Suspense } from "react";
import "./globals.css";

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
  description: "Discover UNCNSRD, a brand for the unapologetic rebellious soul. Explore our latest swimwear collection drawing inspiration from timeless cuts & nostalgic eras.",
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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`),
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

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "300",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      className={cn(
        bomberEscort.variable,
        bomberEscortOutline.variable,
        montserrat.variable,
        // "[color-scheme:dark]",
        "snap-y",
        "dark",
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
        <Suspense>{children}</Suspense>
        <Organization />
      </body>
    </html>
  );
}
