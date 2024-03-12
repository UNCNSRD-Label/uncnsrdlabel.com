import { graphql } from "../codegen/index";

export const videoFragment = graphql(/* GraphQL */ `
  fragment video on Media {
    ... on Video {
      alt
      id
      mediaContentType
      previewImage {
        ...image
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
