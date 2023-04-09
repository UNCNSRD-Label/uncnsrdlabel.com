import React, { lazy } from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { DecoratorFn } from '@storybook/react'
import * as nextImage from 'next/image'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@storybook/addon-viewport'
import '../styles/main.css'
import '../tailwind.config'
import { CollagerieAppProvider } from '../lib/hooks/useAppContext'
import ShopifyProvider from '../lib/providers/shopify'
import { ShopifyProviderProps } from '@shopify/hydrogen-react/dist/types/ShopifyProvider'
import {
  publicStorefrontToken as storefrontToken,
  storeDomain,
  storefrontApiVersion,
} from '../lib/clients/shopify/storefront'
import {
  CountryCode,
  LanguageCode,
} from '../packages/shopify/generated/graphql'

// Fix unconfigured hosts on next/image
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props: any) => <img {...props} />,
})

const customViewports = {
  extraSmall: {
    name: 'Extra Small Mobile',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  small: {
    name: 'Landscape Mobile',
    styles: {
      width: '640px',
      height: '480px',
    },
  },
  medium: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '540px',
    },
  },
  large: {
    name: 'Laptop',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  extraLarge: {
    name: 'Desktop',
    styles: {
      width: '1536px',
      height: '900px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
    locales: ['en-gb', 'en-us'],
    locale: 'en-gb',
    defaultLocale: 'en-gb',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
)

const { language, region } = new Intl.Locale('en-GB')

const shopifyConfig: ShopifyProviderProps = {
  countryIsoCode: region as CountryCode,
  languageIsoCode: language as LanguageCode,
  storeDomain,
  storefrontApiVersion,
  storefrontToken,
}

const wrapperComponentDecorator: DecoratorFn = (storyFn, context) => {
  const queryClient = new QueryClient()

  return (
    <>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <QueryClientProvider client={queryClient}>
          <CollagerieAppProvider state={{ locale: 'en-gb', isPreview: false }}>
            <div
              style={{
                position: 'relative',
                width: '100vw',
                minHeight: '100vh',
                maxWidth: '100%',
                padding: 0,
                margin: 0,
              }}
            >
              {storyFn(context)}
              <ReactQueryDevtoolsProduction
                position="bottom-right"
                initialIsOpen={false}
              />
            </div>
          </CollagerieAppProvider>
        </QueryClientProvider>
      </ShopifyProvider>
    </>
  )
}

export const decorators = [wrapperComponentDecorator]
