import { graphql } from "../codegen/index";

export const imageFragment = graphql(/* GraphQL */ `
  fragment image on Image {
    altText
    blurDataURL: url(transform: { crop: CENTER, maxWidth: 200 })
    height
    id
    url
    width
  }
`);
