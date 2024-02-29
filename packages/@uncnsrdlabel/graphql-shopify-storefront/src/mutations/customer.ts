import { graphql } from "../codegen/index";

export const customerAccessTokenCreateMutation = graphql(/* GraphQL */ `
  mutation CustomerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`);

export const customerAccessTokenDeleteMutation = graphql(/* GraphQL */ `
  mutation CustomerAccessTokenDelete($customerAccessToken: String!) {
    customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
      deletedAccessToken
      deletedCustomerAccessTokenId
      userErrors {
        field
        message
      }
    }
  }
`);

export const customerAddressCreateMutation = graphql(/* GraphQL */ `
  mutation CustomerAddressCreate($address: MailingAddressInput!, $customerAccessToken: String!) {
    customerAddressCreate(
      address: $address
      customerAccessToken: $customerAccessToken
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`);

export const customerAddressDeleteMutation = graphql(/* GraphQL */ `
  mutation CustomerAddressDelete($customerAccessToken: String!, $id: ID!) {
    customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
      customerUserErrors {
        code
        field
        message
      }
      deletedCustomerAddressId
    }
  }
`);

export const customerAddressUpdateMutation = graphql(/* GraphQL */ `
  mutation CustomerAddressUpdate($address: MailingAddressInput!, $customerAccessToken: String!, $id: ID!) {
    customerAddressUpdate(address: $address, customerAccessToken: $customerAccessToken, id: $id) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`);

export const customerCreateMutation = graphql(/* GraphQL */ `
  mutation CustomerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }
`);

export const customerDefaultAddressUpdateMutation = graphql(/* GraphQL */ `
  mutation CustomerDefaultAddressUpdate(
    $id: ID!
    $customerAccessToken: String!
  ) {
    customerDefaultAddressUpdate(
      addressId: $id
      customerAccessToken: $customerAccessToken
    ) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`);

export const customerRecoverMutation = graphql(/* GraphQL */ `
  mutation CustomerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`);

export const customerResetMutation = graphql(/* GraphQL */ `
  mutation CustomerResetPassword($id: ID!, $input: CustomerResetInput!) {
    customerReset(id: $id, input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`);

export const customerResetByUrlMutation = graphql(/* GraphQL */ `
  mutation CustomerResetPasswordByUrl($password: String!, $resetUrl: URL!) {
    customerResetByUrl(password: $password, resetUrl: $resetUrl) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`);

export const customerUpdateMutation = graphql(/* GraphQL */ `
  mutation CustomerUpdate(
    $customerAccessToken: String!
    $input: CustomerUpdateInput!
  ) {
    customerUpdate(
      customerAccessToken: $customerAccessToken
      customer: $input
    ) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        ...customer
      }
    }
  }
`);
