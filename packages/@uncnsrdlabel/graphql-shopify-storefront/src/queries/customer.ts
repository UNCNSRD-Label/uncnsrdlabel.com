import { graphql } from "../codegen/index";

export const getCustomerQuery = graphql(/* GraphQL */ `
query Customer($customerAccessToken: String!) {
  customer(customerAccessToken: $customerAccessToken) {
    ...customer
  }
}
`);