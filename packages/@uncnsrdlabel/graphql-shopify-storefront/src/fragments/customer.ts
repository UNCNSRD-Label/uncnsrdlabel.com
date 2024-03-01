import { graphql } from "../codegen/index";

export const customerFragment = graphql(/* GraphQL */ `
  fragment customer on Customer {
    acceptsMarketing
    addresses(first: 16) {
      nodes {
        ...mailingAddress
      }
    }
    createdAt
    dateOfBirth: metafield(namespace: "facts", key: "birth_date") {
      ...metafield
    }
    defaultAddress {
      ...mailingAddress
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
    orders(first: 16) {
      nodes {
        ...order
      }
    }
    phone
    tags
    updatedAt
  }
`);
