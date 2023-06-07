import { clsx } from "clsx";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { ReactNode, Suspense } from "react";

import "./globals.css";

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;

export const metadata = {
  // icons: {
  //   icon: ['/images/icon.svg', '/images/icon.png', '/images/favicon.ico'],
  //   apple: '/images/icon.svg'
  // },
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
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

const bomberEscortOutlineItalic = localFont({
  src: "./fonts/bomber-escort/bomberescortoutital.ttf",
  display: "swap",
  variable: "--font-bomber-escort-outline-italic",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter ",
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
  return (
    <html
      lang="en"
      className={clsx(
        bomberEscort.variable,
        bomberEscortOutline.variable,
        bomberEscortOutlineItalic.variable,
        inter.variable,
        montserrat.variable,
        "[color-scheme:dark]",
        "snap-y"
      )}
    >
      <body
        className="grid min-h-[100dvh] bg-black tracking-widest text-white selection:bg-pink-600"
        style={{
          textRendering: "optimizeLegibility",
        }}
      >
        <Suspense>
          <main className="grid grid-rows-[1fr_auto]">{children}</main>
          <Script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
            }}
          />
        </Suspense>
      </body>
    </html>
  );
}
