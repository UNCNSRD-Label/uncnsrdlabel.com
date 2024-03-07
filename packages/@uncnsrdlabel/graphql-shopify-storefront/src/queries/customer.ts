import { graphql } from "../codegen/index";

export const customerQuery = graphql(/* GraphQL */ `
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...customer
    }
  }
`);
