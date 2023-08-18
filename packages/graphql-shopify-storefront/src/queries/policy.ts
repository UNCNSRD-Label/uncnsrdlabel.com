import { graphql } from '@uncnsrdlabel/graphql-shopify-storefront/codegen';

export const shopPolicyFragment = graphql(/* GraphQL */ `
  fragment shopPolicy on ShopPolicy {
    ... on ShopPolicy {
      body
      handle
      id
      title
      url
    }
  }
`);

export const getPoliciesQuery = graphql(/* GraphQL */ `
  query getPolicies {
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
