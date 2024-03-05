import { graphql } from "../codegen/index";

export const sellingPlanGroupAddProductsMutation = graphql(/* GraphQL */ `
  mutation SellingPlanGroupAddProducts($id: ID!, $productIds: [ID!]!) {
    sellingPlanGroupAddProducts(id: $id, productIds: $productIds) {
      sellingPlanGroup {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`);
