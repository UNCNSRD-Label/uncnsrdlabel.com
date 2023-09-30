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

export const CustomerAddressCreateMutation = graphql(/* GraphQL */ `
  mutation CustomerAddressCreate(
    $input: MailingAddressInput!
    $customerAccessToken: String!
  ) {
    customerAddressCreate(
      address: $input
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

export const CustomerAddressDeleteMutation = graphql(/* GraphQL */ `
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

export const CustomerAddressUpdateMutation = graphql(/* GraphQL */ `
  mutation CustomerAddressUpdate(
    $input: MailingAddressInput!
    $customerAccessToken: String!
    $id: ID!
  ) {
    customerAddressUpdate(
      address: $input
      customerAccessToken: $customerAccessToken
      id: $id
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

export const CustomerCreateMutation = graphql(/* GraphQL */ `
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

export const CustomerDefaultAddressUpdateMutation = graphql(/* GraphQL */ `
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

export const CustomerRecoverPasswordMutation = graphql(/* GraphQL */ `
  mutation CustomerRecoverPassword($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`);

export const CustomerResetPasswordMutation = graphql(/* GraphQL */ `
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

export const CustomerResetPasswordByUrlMutation = graphql(/* GraphQL */ `
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

export const CustomerUpdateMutation = graphql(/* GraphQL */ `
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
