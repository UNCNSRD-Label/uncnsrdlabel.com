import { ResultOf } from "@graphql-typed-document-node/core";
import {
    mediaFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";

export type WithVideo = Required<
  ResultOf<typeof mediaFragment> & {
    __typename: "Video";
  }
>;
