const shopPolicyFragment = /* GraphQL */ `
  fragment shopPolicy on ShopPolicy {
    ... on ShopPolicy {
      body
      handle
      id
      title
      url
    }
  }
`;

export const getPoliciesQuery = /* GraphQL */ `
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
  ${shopPolicyFragment}
`;
