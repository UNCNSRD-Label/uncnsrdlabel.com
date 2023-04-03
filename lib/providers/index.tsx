import type {
  CountryCode,
  LanguageCode,
} from '@shopify/hydrogen-react/storefront-api-types'
import type { ShopifyProviderProps } from '@shopify/hydrogen-react/dist/types/ShopifyProvider'
import type { AppProps } from 'next/app'

import { ReactNode } from 'react'

import {
  publicStorefrontToken as storefrontToken,
  storeDomain,
  storefrontApiVersion,
} from '#/lib/clients/shopify/storefront'

import ShopifyProvider from './shopify'
import ReactQueryProvider from './react-query'
import NextQueryParamsProvider from './next-query-params'
import { mapLocaleToLocaleUpper } from '#/lib/hooks/i18n'
import { Locale } from '#/lib/i18n/types'
import { BreakpointProvider } from 'react-use-breakpoint'
import { removePx, theme } from '#/lib/constants/style'

export default function Providers({
  children,
  props,
  locale,
}: {
  props: AppProps
  locale: Locale
  children: ReactNode
}) {
  if (!locale) {
    throw new Error('locale parameter is required in Providers configuration')
  }

  const { language, region } = new Intl.Locale(mapLocaleToLocaleUpper[locale])

  if (!language || !region) {
    throw new Error(
      'language and region variables could not be retrieved for locale in Providers'
    )
  }

  const shopifyConfig: ShopifyProviderProps = {
    countryIsoCode: region as CountryCode,
    languageIsoCode: language as LanguageCode,
    storeDomain,
    storefrontApiVersion,
    storefrontToken,
  }

  return (
    <ShopifyProvider shopifyConfig={shopifyConfig}>
      <ReactQueryProvider props={props}>
        <NextQueryParamsProvider>
          <BreakpointProvider
            breakpointOverrides={{
              xs: removePx(theme.screens.xs.max),
              sm: removePx(theme.screens.sm.max),
              md: removePx(theme.screens.md.max),
              lg: removePx(theme.screens.lg.max),
              xl: removePx(theme.screens.xl.max),
            }}
          >
            {children}
          </BreakpointProvider>
        </NextQueryParamsProvider>
      </ReactQueryProvider>
    </ShopifyProvider>
  )
}
