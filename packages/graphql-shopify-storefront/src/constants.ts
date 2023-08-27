import {
  ProductCollectionSortKeys,
  ProductSortKeys,
} from "@uncnsrdlabel/graphql-shopify-storefront/codegen/graphql";
import { type CollectionSubset } from "@uncnsrdlabel/types";

export type ProductCollectionSortFilterItem = CollectionSubset & {
  sortKey: ProductCollectionSortKeys;
  reverse: boolean;
};

export type ProductSortFilterItem = CollectionSubset & {
  sortKey: ProductSortKeys;
  reverse: boolean;
};

export const productCollectionDefaultSort: ProductCollectionSortFilterItem = {
  title: "Relevance",
  handle: null,
  sortKey: ProductCollectionSortKeys.Relevance,
  reverse: false,
};

export const productDefaultSort: ProductSortFilterItem = {
  title: "Relevance",
  handle: null,
  sortKey: ProductSortKeys.Relevance,
  reverse: false,
};

export const productCollectionSorting: ProductCollectionSortFilterItem[] = [
  productCollectionDefaultSort,
  {
    title: "Trending",
    handle: "trending-desc",
    sortKey: ProductCollectionSortKeys.BestSelling,
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    handle: "latest-desc",
    sortKey: ProductCollectionSortKeys.Created,
    reverse: true,
  },
  {
    title: "Price: Low to high",
    handle: "price-asc",
    sortKey: ProductCollectionSortKeys.Price,
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    handle: "price-desc",
    sortKey: ProductCollectionSortKeys.Price,
    reverse: true,
  },
];

export const productSorting: ProductSortFilterItem[] = [
  productDefaultSort,
  {
    title: "Trending",
    handle: "trending-desc",
    sortKey: ProductSortKeys.BestSelling,
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    handle: "latest-desc",
    sortKey: ProductSortKeys.CreatedAt,
    reverse: true,
  },
  {
    title: "Price: Low to high",
    handle: "price-asc",
    sortKey: ProductSortKeys.Price,
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    handle: "price-desc",
    sortKey: ProductSortKeys.Price,
    reverse: true,
  },
];
