import { graphql } from "../codegen/index";

export const imageFragment = graphql(/* GraphQL */ `
  fragment image on Image {
    altText
    blurDataURL: url(transform: { maxWidth: 10 })
    height
    id
    url
    width
  }
`);
