import {
  ProductCollectionSortKeys,
  ProductSortKeys,
} from "@uncnsrdlabel/graphql-shopify-storefront/codegen/graphql";

export type ProductCollectionSortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: ProductCollectionSortKeys;
  reverse: boolean;
};

export type ProductSortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: ProductSortKeys;
  reverse: boolean;
};

export const productCollectionDefaultSort: ProductCollectionSortFilterItem = {
  title: "Relevance",
  slug: null,
  sortKey: ProductCollectionSortKeys.Relevance,
  reverse: false,
};

export const productDefaultSort: ProductSortFilterItem = {
  title: "Relevance",
  slug: null,
  sortKey: ProductSortKeys.Relevance,
  reverse: false,
};

export const productCollectionSorting: ProductCollectionSortFilterItem[] = [
  productCollectionDefaultSort,
  {
    title: "Trending",
    slug: "trending-desc",
    sortKey: ProductCollectionSortKeys.BestSelling,
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: ProductCollectionSortKeys.Created,
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: ProductCollectionSortKeys.Price,
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: ProductCollectionSortKeys.Price,
    reverse: true,
  },
];

export const productSorting: ProductSortFilterItem[] = [
  productDefaultSort,
  {
    title: "Trending",
    slug: "trending-desc",
    sortKey: ProductSortKeys.BestSelling,
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: ProductSortKeys.CreatedAt,
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: ProductSortKeys.Price,
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: ProductSortKeys.Price,
    reverse: true,
  },
];
