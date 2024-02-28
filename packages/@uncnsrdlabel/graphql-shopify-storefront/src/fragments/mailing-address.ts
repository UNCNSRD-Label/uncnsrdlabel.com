import { graphql } from "../codegen/index";

export const mailingAddressFragment = graphql(/* GraphQL */ `
  fragment mailingAddress on MailingAddress {
    address1
    address2
    city
    company
    country
    countryCodeV2
    firstName
    formatted
    formattedArea
    id
    lastName
    name
    phone
    province
    provinceCode
    zip
  }
`);
