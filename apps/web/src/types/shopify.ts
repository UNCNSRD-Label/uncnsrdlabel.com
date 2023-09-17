import { ResultOf } from "@graphql-typed-document-node/core";
import {
  FragmentType,
  videoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";

export type WithVideoFragment = Required<
  ResultOf<typeof videoFragment> & {
    __typename: "Video";
  }
>;

export type WithVideo = Required<
  FragmentType<typeof videoFragment> & {
    __typename: "Video";
  }
>;
