'use client'

import type { ShopifyProviderProps } from '@shopify/hydrogen-react/dist/types/ShopifyProvider'

import { ShopifyProvider, CartProvider } from '@shopify/hydrogen-react'

import { ReactNode } from 'react'

export default function Provider({
  children,
  shopifyConfig,
}: {
  children: ReactNode
  shopifyConfig: ShopifyProviderProps
}) {
  return (
    <ShopifyProvider {...shopifyConfig}>
      <CartProvider countryCode={shopifyConfig.countryIsoCode}>
        {children}
      </CartProvider>
    </ShopifyProvider>
  )
}
