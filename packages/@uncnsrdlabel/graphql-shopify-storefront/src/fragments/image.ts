import { graphql } from "../codegen/index";

export const imageFragment = graphql(/* GraphQL */ `
  fragment image on Image {
    altText
    height
    id
    url
    width
  }
`);
