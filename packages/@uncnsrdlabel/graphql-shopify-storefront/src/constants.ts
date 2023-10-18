import {
  ProductCollectionSortKeys,
  ProductSortKeys,
} from "./codegen/graphql";

export type SortFilterItem = {
  title: string;
  slug: string | null;
  reverse: boolean;
};

export type ProductCollectionSortFilterItem = SortFilterItem & {
  sortKey: ProductCollectionSortKeys;
};

export type ProductSortFilterItem = SortFilterItem & {
  sortKey: ProductSortKeys;
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

export const domain = `https://${process.env
  .NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!}`;

  export const endpoint = `${domain}/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;