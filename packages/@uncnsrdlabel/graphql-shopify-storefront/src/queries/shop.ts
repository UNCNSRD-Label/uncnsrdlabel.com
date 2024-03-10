import { graphql } from "../codegen/index";

export const shopDetailsQuery = graphql(/* GraphQL */ `
  query getShopDetails($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    shop {
      brand {
        colors {
          primary {
            background
            foreground
          }
          secondary {
            background
            foreground
          }
        }
        coverImage {
          alt
          image {
            altText
            height
            url
            width
          }
        }
        logo {
          alt
          image {
            altText
            height
            url
            width
          }
        }
        squareLogo {
          alt
          image {
            altText
            height
            url
            width
          }
        }
        shortDescription
        slogan
      }
      description
      id
      moneyFormat
      name
      paymentSettings {
        acceptedCardBrands
        cardVaultUrl
        countryCode
        currencyCode
        enabledPresentmentCurrencies
        shopifyPaymentsAccountId
        supportedDigitalWallets
      }
      primaryDomain {
        host
        sslEnabled
        url
      }
      shipsToCountries
    }
  }
`);

export const shopPoliciesQuery = graphql(/* GraphQL */ `
  query shopPolicies($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...shopPolicy
      }
      refundPolicy {
        ...shopPolicy
      }
      shippingPolicy {
        ...shopPolicy
      }
      termsOfService {
        ...shopPolicy
      }
    }
  }
`);