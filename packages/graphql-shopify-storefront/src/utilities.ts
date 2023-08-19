// import {
//   type StorefrontApiResponse,
//   type StorefrontApiResponseError,
// } from "@shopify/hydrogen-react";
// import {
//   addToCartMutation,
//   createCartMutation,
//   editCartItemsMutation,
//   removeFromCartMutation,
// } from "@uncnsrdlabel/graphql-shopify-storefront/mutations/cart";
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront/queries/collection";
// import { getErrorsMessage } from "@uncnsrdlabel/lib/errors";
// import { isShopifyError } from "@uncnsrdlabel/lib/type-guards";
import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getFragmentData } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";
// import { collectionFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/collection";
import { GetCartQueryVariables, GetCollectionProductsQueryVariables, GetCollectionQueryVariables, GetMenuQueryVariables, GetPageQueryVariables, GetPagesQueryVariables, GetProductQueryVariables, GetProductRecommendationsQueryVariables, GetProductsQueryVariables } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/graphql";
import { productFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/product";
import { getCartQuery } from "@uncnsrdlabel/graphql-shopify-storefront/queries/cart";
import { getMenuQuery } from "@uncnsrdlabel/graphql-shopify-storefront/queries/menu";
import { getPageQuery, getPagesQuery } from "@uncnsrdlabel/graphql-shopify-storefront/queries/page";
import { getPoliciesQuery } from "@uncnsrdlabel/graphql-shopify-storefront/queries/policy";
import { getProductQuery, getProductRecommendationsQuery, getProductsQuery } from "@uncnsrdlabel/graphql-shopify-storefront/queries/product";
import { GraphQLClient } from "graphql-request";
import { camelCase } from "lodash";

export { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";

type PolicyName = 'privacyPolicy' | 'refundPolicy' | 'shippingPolicy' | 'termsOfService'

const domain = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!}`;
const endpoint = `${domain}/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN}`,
  },
})

export function get<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  return graphQLClient.request(
    document,
    variables ?? undefined,
  );
}

export function useShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery(
    [(document.definitions[0] as any).name.value, variables],
    async ({ queryKey }) =>
      graphQLClient.request(
        document,
        queryKey[1] ? queryKey[1] : undefined,
      ),
  );
}

// const isStorefrontApiResponseError = <T>(
//   response: StorefrontApiResponse<T>,
// ): response is StorefrontApiResponseError => {
//   return typeof response === "object" && response.errors !== undefined;
// };

// export async function createCart(): Promise<Cart> {
//   const res = await shopifyFetch<ShopifyCreateCartOperation>({
//     query: createCartMutation,
//     cache: "no-store",
//   });

//   if (isStorefrontApiResponseError(res.body)) {
//     throw new Error(getErrorsMessage(res.body));
//   }

//   const cart = res.body.data?.cartCreate.cart;

//   return cart;
// }

// export async function addToCart(
//   cartId: string,
//   lines: { merchandiseId: string; quantity: number }[],
// ): Promise<Cart> {
//   const res = await shopifyFetch<ShopifyAddToCartOperation>({
//     query: addToCartMutation,
//     variables: {
//       cartId,
//       lines,
//     },
//     cache: "no-store",
//   });
//   return res.body.data.cartLinesAdd.cart;
// }

// export async function removeFromCart(
//   cartId: string,
//   lineIds: string[],
// ): Promise<Cart> {
//   const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
//     query: removeFromCartMutation,
//     variables: {
//       cartId,
//       lineIds,
//     },
//     cache: "no-store",
//   });

//   return res.body.data.cartLinesRemove.cart;
// }

// export async function updateCart(
//   cartId: string,
//   lines: { id: string; merchandiseId: string; quantity: number }[],
// ): Promise<Cart> {
//   const res = await shopifyFetch<ShopifyUpdateCartOperation>({
//     query: editCartItemsMutation,
//     variables: {
//       cartId,
//       lines,
//     },
//     cache: "no-store",
//   });

//   return res.body.data.cartLinesUpdate.cart;
// }

export function useGetCart(variables: GetCartQueryVariables) {
  const { data = {} } = useShopifyGraphQL(
    getCartQuery,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  const { cart } = data;

  if (!cart) {
    return null;
  }

  console.log({cart})

  return cart
}

export function useGetCollection(
  variables: GetCollectionQueryVariables,
) {
  const { data = {} } = useShopifyGraphQL(
    getCollectionQuery,
    variables,
  );

  const { collection } = data;

  if (!collection) {
    throw {
      status: 404,
      message: `Collection not found for handle \`${variables.handle}\``,
    };
  }

  console.log({collection})

  return collection
}

export function useGetCollectionProducts(variables: GetCollectionProductsQueryVariables) {
  const { data = {} } = useShopifyGraphQL(
    getCollectionProductsQuery,
    variables,
  );

  const { collection } = data;

  if (!collection) {
    throw {
      status: 404,
      message: `Collection not found for handle \`${variables.handle}\``,
    };
  }

  console.log({collection})

  const { products } = collection;

  return products;
}

export function useGetCollections() {
  const { data = {
    collections: []
  } } = useShopifyGraphQL(
    getCollectionsQuery,
  );

  const { collections: shopifyCollections } = data;

  if (!shopifyCollections) {
    throw {
      status: 404,
      message: `Collections not found`,
    };
  }

  console.log({shopifyCollections})

  // const shopifyCollections = getFragmentData(collectionFragment, collectionsFragmentRef);

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
    // ...shopifyCollections?.edges.map(({ node }) => getFragmentData(collectionFragment, node))
  ];

  return collections;
}

export function useGetMenu(variables: GetMenuQueryVariables) {
  const { data = {} } = useShopifyGraphQL(
    getMenuQuery,
    variables,
  );

  const { menu } = data;

  if (!menu) {
    throw {
      status: 404,
      message: `Menu not found for handle \`${variables.handle}\``,
    };
  }

  console.log({menu})

  return menu

  // return (
  //   menu?.items.map((item: { title: string; url: string }) => ({
  //     title: item.title,
  //     path: item.url
  //       .replace(domain, "")
  //       .replace("/collections", "/search")
  //       .replace("/pages", ""),
  //   })) || []
  // );
}

export function useGetPage(variables: GetPageQueryVariables) {
  const { data = {} } = useShopifyGraphQL(
    getPageQuery,
    variables,
  );

  const { pageByHandle: page } = data;

  if (!page) {
    throw {
      status: 404,
      message: `Page not found for handle \`${variables.handle}\``,
    };
  }

  console.log({page})

  return page
}

export function useGetPages(variables: GetPagesQueryVariables) {
  const { data = {
    pages: []
  } } = useShopifyGraphQL(
    getPagesQuery,
    variables
  );

  const { pages } = data;

  if (!pages) {
    throw {
      status: 404,
      message: `Pages not found`,
    };
  }

  return pages;
}

export function useGetPolicy(handle: PolicyName) {
  const policies = useGetPolicies();

  const policyName = camelCase(handle) as PolicyName;

  const policy = policies[policyName];

  return policy;
}

export function useGetPolicies() {
  const { data = {
    shop: {}
  } } = useShopifyGraphQL(
    getPoliciesQuery,
  );

  const { shop } = data;

  if (!shop) {
    throw {
      status: 404,
      message: `Shop not found`,
    };
  }

  console.log({shop})

  return shop;
}

export function useGetProduct(variables: GetProductQueryVariables) {
  const { data = {} } = useShopifyGraphQL(
    getProductQuery,
    variables,
  );

  const { product: productFragmentRef } = data;

  if (!productFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for handle \`${variables.handle}\``,
    };
  }

  console.log({productFragmentRef})
  
  const product = getFragmentData(productFragment, productFragmentRef);

  console.log({product})

  return product
}

export function useGetProductRecommendations(variables: GetProductRecommendationsQueryVariables) {
  const { data = {} } = useShopifyGraphQL(
    getProductRecommendationsQuery,
    variables
  );

  const { productRecommendations } = data;

  if (!productRecommendations) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  const products = getFragmentData(productFragment, productRecommendations);

  return products;
}

export function useGetProducts(variables: GetProductsQueryVariables) {
  const { data = {
    products: []
  } } = useShopifyGraphQL(
    getProductsQuery,
    variables
  );

  const { products } = data;

  if (!products) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  return products;
}