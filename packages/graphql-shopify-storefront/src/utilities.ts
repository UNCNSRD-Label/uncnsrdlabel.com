import {
  type StorefrontApiResponse,
  type StorefrontApiResponseError,
} from "@shopify/hydrogen-react";
import {
  Cart,
  Collection,
  Menu,
  Page,
  Product,
  ShopPolicy
} from "@shopify/hydrogen-react/storefront-api-types";
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from "@uncnsrdlabel/graphql-shopify-storefront/mutations/cart";
import { getCartQuery } from "@uncnsrdlabel/graphql-shopify-storefront/queries/cart";
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront/queries/collection";
import { getMenuQuery } from "@uncnsrdlabel/graphql-shopify-storefront/queries/menu";
import { getPageQuery, getPagesQuery } from "@uncnsrdlabel/graphql-shopify-storefront/queries/page";
import { getPoliciesQuery } from "@uncnsrdlabel/graphql-shopify-storefront/queries/policy";
import {
  getProductQuery,
  getProductRecommendationsQuery,
  getProductsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront/queries/product";
import {
  // HIDDEN_PRODUCT_TAG,
  SHOPIFY_GRAPHQL_API_ENDPOINT, revalidate
} from "@uncnsrdlabel/lib/constants";
import { getErrorsMessage } from "@uncnsrdlabel/lib/errors";
import { isShopifyError } from "@uncnsrdlabel/lib/type-guards";
import { camelCase } from "lodash";

const domain = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!}`;
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

export async function shopifyFetch<T>({
  query,
  variables,
  headers,
  cache = "force-cache",
}: {
  query: string;
  variables?: ExtractVariables<T>;
  headers?: HeadersInit;
  cache?: RequestCache;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache: revalidate ? undefined : cache,
      // next: { revalidate: 900 }, // 15 minutes
    });

    const body = (await result.json()) as T;

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        status: e.status || 500,
        message: e.message,
        query,
      };
    }

    throw {
      error: e,
      query,
    };
  }
}

const isStorefrontApiResponseError = <T>(
  response: StorefrontApiResponse<T>,
): response is StorefrontApiResponseError => {
  return typeof response === "object" && response.errors !== undefined;
};

export async function createCart(): Promise<Cart> {
  const res = await shopifyFetch<ShopifyCreateCartOperation>({
    query: createCartMutation,
    cache: "no-store",
  });

  if (isStorefrontApiResponseError(res.body)) {
    throw new Error(getErrorsMessage(res.body));
  }

  const cart = res.body.data?.cartCreate.cart;

  return cart;
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyAddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines,
    },
    cache: "no-store",
  });
  return res.body.data.cartLinesAdd.cart;
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[],
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds,
    },
    cache: "no-store",
  });

  return res.body.data.cartLinesRemove.cart;
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines,
    },
    cache: "no-store",
  });

  return res.body.data.cartLinesUpdate.cart;
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
    cache: "no-store",
  });

  if (!res.body.data.cart) {
    return null;
  }

  return res.body.data.cart;
}

export async function getCollection(
  handle: string,
): Promise<Collection | undefined> {
  const res = await shopifyFetch<CollectionOperation>({
    query: getCollectionQuery,
    variables: {
      handle,
    },
  });

  return res.body.data.collection;
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<CollectionProductsOperation>({
    query: getCollectionProductsQuery,
    variables: {
      handle: collection,
      reverse,
      sortKey,
    },
  });

  if (!res.body.data.collection) {
    console.info(`No collection found for \`${collection}\``);
    return [];
  }

  return res.body.data.collection.products;
}

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<CollectionsOperation>({
    query: getCollectionsQuery,
  });
  const shopifyCollections = res.body?.data?.collections;
  const collections = [
    {
      handle: "",
      title: "All",
      description: "All products",
      seo: {
        title: "All",
        description: "All products",
      },
      path: "/search",
      updatedAt: new Date().toISOString(),
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    // ...reshapeCollections(shopifyCollections).filter(
    //   (collection) => !collection.handle.startsWith("hidden"),
    // ),
    ...shopifyCollections
  ];

  return collections;
}

export async function getMenu(handle: string): Promise<Menu[]> {
  const res = await shopifyFetch<ShopifyMenuOperation>({
    query: getMenuQuery,
    variables: {
      handle,
    },
  });

  return (
    res.body?.data?.menu?.items.map((item: { title: string; url: string }) => ({
      title: item.title,
      path: item.url
        .replace(domain, "")
        .replace("/collections", "/search")
        .replace("/pages", ""),
    })) || []
  );
}

export async function getPage(handle: string): Promise<Page> {
  const res = await shopifyFetch<ShopifyPageOperation>({
    query: getPageQuery,
    variables: { handle },
  });

  if (!res.body.data.pageByHandle) {
    throw {
      status: 404,
      message: `Page not found for handle \`${handle}\``,
    };
  }

  return res.body.data.pageByHandle
}

export async function getPages(): Promise<Page[]> {
  const res = await shopifyFetch<ShopifyPagesOperation>({
    query: getPagesQuery,
  });

  return res.body.data.pages;
}

export async function getShopPolicy(handle: ShopPolicyHandle): Promise<ShopPolicy> {
  const policies = await getShopPolicies();

  const policyName = camelCase(handle) as ShopPolicyName;

  const policy = policies[policyName];

  return policy;
}

export async function getShopPolicies(): Promise<ShopPolicies> {
  const res = await shopifyFetch<ShopifyShopPoliciesOperation>({
    query: getPoliciesQuery,
  });

  return res.body.data.shop;
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<ProductOperation>({
    query: getProductQuery,
    variables: {
      handle,
    },
    cache: "default",
  });

  return res.body.data.product;
}

export async function getProductRecommendations(
  productId: string,
): Promise<Product[]> {
  const res = await shopifyFetch<ProductRecommendationsOperation>({
    query: getProductRecommendationsQuery,
    variables: {
      productId,
    },
  });

  return res.body.data.productRecommendations;
}

export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ProductsOperation>({
    query: getProductsQuery,
    variables: {
      query,
      reverse,
      sortKey,
    },
  });

  return res.body.data.products;
}