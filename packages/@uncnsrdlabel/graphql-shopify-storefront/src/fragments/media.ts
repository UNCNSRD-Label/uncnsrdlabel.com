import { graphql } from "../codegen/index";

export const mediaFragment = graphql(/* GraphQL */ `
  fragment media on Media {
    __typename
    alt
    id
    mediaContentType
    ... on Video {
      alt
      id
      mediaContentType
      previewImage {
        altText
        id
        url
      }
      sources {
        format
        height
        mimeType
        url
        width
      }
    }
  }
`);
