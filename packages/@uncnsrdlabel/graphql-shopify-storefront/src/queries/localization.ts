import { graphql } from "../codegen/index";

export const localizationDetailsQuery = graphql(/* GraphQL */ `
query localizationDetails($country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
  localization {
    availableCountries {
      availableLanguages {
        endonymName
        isoCode
        name
      }
      currency {
        isoCode
        name
        symbol
      }
      isoCode
      market {
        handle
        id
      }
      name
      unitSystem
    }
    availableLanguages {
      endonymName
      isoCode
      name
    }
    country {
      availableLanguages {
        endonymName
        isoCode
        name
      }
      currency {
        isoCode
        name
        symbol
      }
      isoCode
      market {
        handle
        id
      }
      name
      unitSystem
    }
    language {
      endonymName
      isoCode
      name
    }
    market {
      handle
      id
    }
  }
}
`);