import { type Collection } from "@shopify/hydrogen/storefront-api-types";

export type CollectionSubset = Pick<Collection, "title"> & {
    handle: string | null;
};