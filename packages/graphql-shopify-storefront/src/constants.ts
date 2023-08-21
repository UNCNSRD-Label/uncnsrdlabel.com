import { ProductSortKeys } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/graphql";

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: ProductSortKeys;
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: "Relevance",
  slug: null,
  sortKey: ProductSortKeys.Relevance,
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
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