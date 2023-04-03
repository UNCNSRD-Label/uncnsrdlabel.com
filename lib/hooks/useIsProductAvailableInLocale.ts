import { useEffect, useState } from 'react'

const storage = globalThis?.sessionStorage

export const useIsProductAvailableInLocale = (namedTags?: {
  [index: string]: string[] | undefined
}) => {
  const [productAvailableInLocale, setProductAvailableInLocale] = useState(true)
  const countryCode = storage?.getItem('countryCode')

  useEffect(() => {
    if (countryCode) {
      if (!namedTags?.collagerie?.includes(countryCode)) {
        setProductAvailableInLocale(false)
      }
    }
  }, [countryCode, namedTags?.collagerie])

  return productAvailableInLocale
}
