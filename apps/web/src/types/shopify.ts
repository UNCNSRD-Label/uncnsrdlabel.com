import { ResultOf } from "@graphql-typed-document-node/core";
import {
  videoFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";

export type WithVideo = Required<
  ResultOf<typeof videoFragment> & {
    __typename: "Video";
  }
>;
