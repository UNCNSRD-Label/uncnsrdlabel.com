import { clsx } from 'clsx';
import Navbar from 'components/layout/navbar';
import NavbarContent from 'components/layout/navbar/content';
import { Inter, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: 'summary_large_image',
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE
      }
    })
};

const bomberEscort = localFont({
  src: './fonts/bomber-escort/bomberescort.ttf',
  display: 'swap',
  variable: '--font-bomber-escort',
  weight: '400'
});

const bomberEscortOutline = localFont({
  src: './fonts/bomber-escort/bomberescortout.ttf',
  display: 'swap',
  variable: '--font-bomber-escort-outline',
  weight: '400'
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: '300'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        bomberEscort.variable,
        bomberEscortOutline.variable,
        inter.variable,
        montserrat.variable,
        '[color-scheme:dark]'
      )}
    >
      <body className="grid min-h-[100dvh] grid-rows-[auto_1fr] bg-white text-black selection:bg-teal-300 dark:bg-black dark:text-white dark:selection:bg-fuchsia-600 dark:selection:text-white">
        <Navbar>
          {/* @ts-expect-error Server Component */}
          <NavbarContent />
        </Navbar>
        <Suspense>
          <main className="grid grid-rows-[1fr_auto]">{children}</main>
          <Script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`
            }}
          />
        </Suspense>
      </body>
    </html>
  );
}
