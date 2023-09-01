import { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index.js";

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
