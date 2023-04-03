import type { AppProps } from 'next/app'

import { Analytics } from '@vercel/analytics/react'
import { clsx } from 'clsx'
import { getCookie, hasCookie } from 'cookies-next'
import localFont from 'next/font/local'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import { useEffect, useState } from 'react'

import SEO from '#/config/next-seo.config'

import { BASE_URL, ORGANISATION_NAME } from '#/lib/constants/config'
import { mapLocaleToLocaleUpper, useI18nData } from '#/lib/hooks/i18n'

import Providers from '#/lib/providers'

import '#/styles/main.css'

const MTTMilanoFont = localFont({
  src: [
    {
      path: '../public/fonts/MTTMilanoMedium.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../public/fonts/MTTMilanoBold.woff2',
      weight: 'bold',
      style: 'italic',
    },
  ],
  // subsets: ['latin'],
  variable: '--font-sans',
})

const SaolDisplayFont = localFont({
  src: [
    {
      path: '../public/fonts/SaolDisplayMedium.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../public/fonts/SaolDisplayMedium.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
  // subsets: ['latin'],
  variable: '--font-serif',
})

const SaolTextFont = localFont({
  src: '../public/fonts/SaolTextRegular.woff2',
  // subsets: ['latin'],
  variable: '--font-text',
})

/**
 * Returns the path for a favicon based on the given color scheme.
 *
 * @param {boolean} isDarkMode If currently in dark mode
 */
const getColorScheme = (matches = false) => {
  return matches ? 'light' : 'dark'
}

const App = (props: AppProps) => {
  const { Component, pageProps, router } = props

  const consentSettings = getCookie('consentSettings')

  const hasSavedConsentSettings = hasCookie('consentSettings')

  const { currentLocale, locales, defaultLocale } = useI18nData()
  const { pathname } = useRouter()

  const [colorScheme, setColorScheme] = useState('light')

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  useEffect(() => {
    // Get current color scheme.
    const matcher = window.matchMedia('(prefers-color-scheme: dark)')
    // Set favicon initially.
    setColorScheme(getColorScheme(matcher.matches))
    // Change favicon if the color scheme changes.
    matcher.onchange = () => setColorScheme(getColorScheme(matcher.matches))
  }, [colorScheme])

  return (
    <>
      <Providers locale={currentLocale} props={props}>
        <DefaultSeo {...SEO} />
        <NextHead>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            crossOrigin="use-credentials"
            href="/site.webmanifest"
            key="linkManifest"
            rel="manifest"
          />
          <link href="https://images.ctfassets.net" rel="preconnect" />

          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}/${currentLocale}${pathname}`}
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}/${defaultLocale}${pathname}`}
          />
          {locales?.map((locale) => {
            const isoLocale = mapLocaleToLocaleUpper[locale]
            return (
              <link
                key={`hrefLang=${isoLocale}`}
                rel="alternate"
                hrefLang={isoLocale}
                href={`${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}/${locale}${pathname}`}
              />
            )
          })}

          <link
            href={`/chrome/favicon-${colorScheme}.ico`}
            key="linkImageXicon"
            rel="image/x-icon"
          />
          <link
            href={`/chrome/favicon-${colorScheme}-16x16.png`}
            key="linkIcon16"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            href={`/chrome/favicon-${colorScheme}-32x32.png`}
            key="linkIcon32"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/chrome/apple-touch-icon.png"
            key="linkIcon180"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/chrome/android-chrome-192x192.png"
            key="linkIcon192"
            rel="icon"
            sizes="192x192"
            type="image/png"
          />
          <link
            href="/chrome/android-chrome-512x512.png"
            key="linkIcon512"
            rel="icon"
            sizes="512x512"
            type="image/png"
          />
          <link
            color="#ffffff"
            href="/chrome/safari-pinned-tab.svg"
            key="linkMaskIcon"
            rel="mask-icon"
          />
          <link
            href="/chrome/mstile-150x150.png"
            key="linkShortcutIcon"
            rel="shortcut icon"
            type="image/png"
          />
          <link
            rel="search"
            href="/opensearch.xml"
            type="application/opensearchdescription+xml"
            title="Search collagerie.com"
          />
          <meta
            content="/browserconfig.xml"
            key="metaMsapplicationConfig"
            name="msapplication-config"
          />
          <meta content="#ffffff" key="metaThemeCcolor" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          {process.env.NEXT_PUBLIC_VERCEL === '1' && (
            <>
              <meta
                name="build:NEXT_PUBLIC_VERCEL_ENV"
                content={process.env.NEXT_PUBLIC_VERCEL_ENV}
              />
              <meta
                name="build:NEXT_PUBLIC_VERCEL_URL"
                content={process.env.NEXT_PUBLIC_VERCEL_URL}
              />
              <meta
                name="build:NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF"
                content={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}
              />
              <meta
                name="build:NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA"
                content={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
              />
            </>
          )}
        </NextHead>

        <Script
          type="application/ld+json"
          id="WebSite"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: ORGANISATION_NAME,
              url: `${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}`,
              email: 'hello@collagerie.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}/search?query={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        <Script
          type="application/ld+json"
          id="Organization"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: ORGANISATION_NAME,
              url: `${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}`,
              logo: `${process.env.NEXT_PUBLIC_PROTOCOL}://${BASE_URL}/ogimage.jpg`,
              sameAs: [
                'https://www.facebook.com/CollagerieLive/',
                'https://www.instagram.com/collagerie/',
                'https://www.pinterest.co.uk/collagerie/',
              ],
            }),
          }}
        />

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

        <Script
          id="gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
          }}
        />

        {hasSavedConsentSettings && (
          <Script
            id="consent-update"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            gtag('consent', 'update', ${consentSettings});
          `,
            }}
          />
        )}

        <div
          className={clsx(
            `${MTTMilanoFont.variable} font-sans`,
            `${SaolDisplayFont.variable} font-serif`,
            `${SaolTextFont.variable} font-text`
          )}
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <Component {...pageProps} key={router.route} />
        </div>
      </Providers>
      <Analytics />
    </>
  )
}

export default App
