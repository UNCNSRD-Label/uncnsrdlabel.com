import { graphql } from "../codegen/index";

export const customerQuery = graphql(/* GraphQL */ `
query Customer($customerAccessToken: String!) {
  customer(customerAccessToken: $customerAccessToken) {
    ...customer
  }
}
`);