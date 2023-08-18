import { graphql } from '@uncnsrdlabel/graphql-shopify-storefront/codegen';

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
