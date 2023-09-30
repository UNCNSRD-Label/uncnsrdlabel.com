import { graphql } from "../codegen/index";

export const customerFragment = graphql(/* GraphQL */ `
  fragment customer on Customer {
    acceptsMarketing
    addresses(first: 10) {
      nodes {
        ...customerAddress
      }
    }
    createdAt
    dateOfBirth: metafield(namespace: "facts", key: "birth_date") {
      ...metafield
    }
    defaultAddress {
      ...customerAddress
    }
    displayName
    email
    firstName
    id
    lastIncompleteCheckout {
      id
    }
    lastName
    numberOfOrders
    phone
    tags
    updatedAt
  }
`);
