import { ProductCollectionSortKeys, ProductSortKeys } from "./codegen/graphql";

export type SortItem = {
  title: string;
  slug: string | null;
  reverse: boolean;
};

export type ProductCollectionSortItem = SortItem & {
  sortKey: ProductCollectionSortKeys;
};

export type ProductSortItem = SortItem & {
  sortKey: ProductSortKeys;
};

export const productCollectionDefaultSort: ProductCollectionSortItem = {
  title: "Relevance",
  slug: null,
  sortKey: ProductCollectionSortKeys.Relevance,
  reverse: false,
};

export const productDefaultSort: ProductSortItem = {
  title: "Relevance",
  slug: null,
  sortKey: ProductSortKeys.Relevance,
  reverse: false,
};

export const productCollectionSorting: ProductCollectionSortItem[] = [
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

export const productSorting: ProductSortItem[] = [
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
