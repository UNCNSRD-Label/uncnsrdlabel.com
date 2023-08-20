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
import {
  GetCartQueryVariables,
  GetCollectionProductsQueryVariables,
  GetCollectionQueryVariables,
  GetMenuQueryVariables,
  GetPageQueryVariables,
  GetPagesQueryVariables,
  GetProductQueryVariables,
  GetProductRecommendationsQueryVariables,
  GetProductsQueryVariables,
  PageFragment,
  type ImageFragment,
  type MediaImage,
} from "@uncnsrdlabel/graphql-shopify-storefront/codegen/graphql";
import {
  imageFragment,
  pageFragment,
  productFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/fragments";
import {
  getCartQuery,
  getMenuQuery,
  getPageQuery,
  getPagesQuery,
  getPoliciesQuery,
  getProductQuery,
  getProductRecommendationsQuery,
  getProductsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront/queries";
import { GraphQLClient } from "graphql-request";
import { camelCase } from "lodash";

export { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";

type PolicyName =
  | "privacyPolicy"
  | "refundPolicy"
  | "shippingPolicy"
  | "termsOfService";

export const authorization = `Bearer ${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`;
export const domain = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!}`;
export const endpoint = `${domain}/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

console.log({ authorization, endpoint });
export const graphQLClient = new GraphQLClient(endpoint, {
  fetch,
  headers: {
    authorization
  },
});

export function getShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  console.log({ variables });
  return graphQLClient.request(document, variables ?? undefined);
}

export function useGetShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery(
    [(document.definitions[0] as any).name.value, variables],
    async ({ queryKey }) =>
      graphQLClient.request(document, queryKey[1] ? queryKey[1] : undefined),
  );
}

export function getPageImages(mediaImages: PageFragment["mediaImages"]) {
  const images = mediaImages?.references?.edges
    .map(
      ({ node }) =>
        node as Omit<MediaImage, "image"> & {
          image: { __typename?: "Image" } & {
            " $fragmentRefs"?: { ImageFragment: ImageFragment };
          };
        },
    )
    .filter((node) => node.__typename === "MediaImage")
    .map((mediaImage) => getFragmentData(imageFragment, mediaImage.image));

  return images;
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

export async function getCart(variables: GetCartQueryVariables) {
  const { cart } = await getShopifyGraphQL(
    getCartQuery,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!cart) {
    return null;
  }

  console.log({ cart });

  return cart;
}

export async function getCollection(variables: GetCollectionQueryVariables) {
  const { collection } = await getShopifyGraphQL(getCollectionQuery, variables);

  if (!collection) {
    throw {
      status: 404,
      message: `Collection not found for handle \`${variables.handle}\``,
    };
  }

  console.log({ collection });

  return collection;
}

export async function getCollectionProducts(
  variables: GetCollectionProductsQueryVariables,
) {
  const { collection } = await getShopifyGraphQL(
    getCollectionProductsQuery,
    variables,
  );

  if (!collection) {
    throw {
      status: 404,
      message: `Collection not found for handle \`${variables.handle}\``,
    };
  }

  console.log({ collection });

  const { products } = collection;

  return products;
}

export async function getCollections() {
  const { collections: shopifyCollections } =
    await getShopifyGraphQL(getCollectionsQuery);

  if (!shopifyCollections) {
    throw {
      status: 404,
      message: `Collections not found`,
    };
  }

  console.log({ shopifyCollections });

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

export async function getMenu(variables: GetMenuQueryVariables) {
  const { menu } = await getShopifyGraphQL(getMenuQuery, variables);

  if (!menu) {
    throw {
      status: 404,
      message: `Menu not found for handle \`${variables.handle}\``,
    };
  }

  console.log({ menu });

  return menu;

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

export async function getPage(variables: GetPageQueryVariables) {
  const { pageByHandle: pageFragmentRef } = await getShopifyGraphQL(
    getPageQuery,
    variables,
  );

  if (!pageFragmentRef) {
    throw {
      status: 404,
      message: `Page not found for handle \`${variables.handle}\``,
    };
  }

  const page = getFragmentData(pageFragment, pageFragmentRef);

  console.log({ page });

  return page;
}

export async function getPages(variables: GetPagesQueryVariables) {
  const { pages } = await getShopifyGraphQL(getPagesQuery, variables);

  if (!pages) {
    throw {
      status: 404,
      message: `Pages not found`,
    };
  }

  return pages;
}

export async function getPolicy(handle: PolicyName) {
  const policies = await getPolicies();

  const policyName = camelCase(handle) as PolicyName;

  const policy = policies[policyName];

  return policy;
}

export async function getPolicies() {
  const { shop } = await getShopifyGraphQL(getPoliciesQuery);

  if (!shop) {
    throw {
      status: 404,
      message: `Shop not found`,
    };
  }

  console.log({ shop });

  return shop;
}

export async function getProduct(variables: GetProductQueryVariables) {
  const { product: productFragmentRef } = await getShopifyGraphQL(
    getProductQuery,
    variables,
  );

  if (!productFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for handle \`${variables.handle}\``,
    };
  }

  console.log({ productFragmentRef });

  const product = getFragmentData(productFragment, productFragmentRef);

  console.log({ product });

  return product;
}

export async function getProductRecommendations(
  variables: GetProductRecommendationsQueryVariables,
) {
  const { productRecommendations } = await getShopifyGraphQL(
    getProductRecommendationsQuery,
    variables,
  );

  if (!productRecommendations) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  const products = getFragmentData(productFragment, productRecommendations);

  return products;
}

export async function getProducts(variables: GetProductsQueryVariables) {
  const { products } = await getShopifyGraphQL(getProductsQuery, variables);

  if (!products) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  return products;
}
