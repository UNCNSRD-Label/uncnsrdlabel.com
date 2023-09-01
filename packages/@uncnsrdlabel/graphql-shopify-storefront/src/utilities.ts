import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { CollectionFragment } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/graphql.js";
import { getFragmentData } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index.js";
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from "@uncnsrdlabel/graphql-shopify-storefront/mutations/cart.js";
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront/queries/collection.js";
// import { collectionFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/collection.js";
import {
  AddToCartMutationVariables,
  CreateCartMutationVariables,
  EditCartItemsMutationVariables,
  GetCartQueryVariables,
  GetCollectionProductsQueryVariables,
  GetCollectionQueryVariables,
  GetMenuQueryVariables,
  GetPageQueryVariables,
  GetPagesQueryVariables,
  GetProductBasicQueryVariables,
  GetProductDetailsQueryVariables,
  GetProductRecommendationsQueryVariables,
  GetProductsQueryVariables,
  GetProductsWithVariantsQueryVariables,
  PageFragment,
  RemoveFromCartMutationVariables,
  type ImageFragment,
  type MediaImage,
} from "@uncnsrdlabel/graphql-shopify-storefront/codegen/graphql.js";
import {
  cartFragment,
  collectionFragment,
  imageFragment,
  pageFragment,
  productBasicFragment,
  productDetailsFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/fragments/index.js";
import {
  getCartQuery,
  getMenuQuery,
  getPageQuery,
  getPagesQuery,
  getPoliciesQuery,
  getProductBasicQuery,
  getProductDetailsQuery,
  getProductRecommendationsQuery,
  getProductsQuery,
  getProductsWithVariantsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront/queries/index.js";
import { type PolicyName } from "@uncnsrdlabel/graphql-shopify-storefront/types.js";
import { GraphQLClient } from "graphql-request";
import { camelCase } from "lodash";

export { graphql } from "@uncnsrdlabel/graphql-shopify-storefront/codegen/index.js";

export const domain = `https://${process.env
  .NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!}`;
export const endpoint = `${domain}/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

const headers = new Headers({
  // "Content-Type": "application/json",
  "X-Shopify-Storefront-Access-Token":
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export const graphQLClient = new GraphQLClient(endpoint, {
  // errorPolicy: 'all',
  fetch,
  headers,
});

export function getShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  try {
    const request = graphQLClient.request(document, variables ?? undefined);

    return request;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useGetShopifyGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  try {
    const name = (document.definitions[0] as any).name.value;

    const query = useQuery([name, variables], async ({ queryKey }) =>
      graphQLClient.request(document, queryKey[1] ? queryKey[1] : undefined),
    );

    return query;
  } catch (error) {
    console.error(error);
    throw error;
  }
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

export async function createCart(variables: CreateCartMutationVariables) {
  const { cartCreate } = await getShopifyGraphQL(
    createCartMutation,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!cartCreate) {
    return null;
  }

  // console.log({ cartCreate });

  const { cart: cartFragmentRef } = cartCreate;

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cart;
}

export async function addToCart(variables: AddToCartMutationVariables) {
  const { cartLinesAdd } = await getShopifyGraphQL(
    addToCartMutation,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!cartLinesAdd) {
    return null;
  }

  // console.log({ cartLinesAdd });

  const { cart: cartFragmentRef } = cartLinesAdd;

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cart;
}

export async function removeFromCart(
  variables: RemoveFromCartMutationVariables,
) {
  const { cartLinesRemove } = await getShopifyGraphQL(
    removeFromCartMutation,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!cartLinesRemove) {
    return null;
  }

  // console.log({ cartLinesRemove });

  const { cart: cartFragmentRef } = cartLinesRemove;

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cart;
}

export async function updateCart(variables: EditCartItemsMutationVariables) {
  const { cartLinesUpdate } = await getShopifyGraphQL(
    editCartItemsMutation,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!cartLinesUpdate) {
    return null;
  }

  // console.log({ cartLinesUpdate });

  const { cart: cartFragmentRef } = cartLinesUpdate;

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cart;
}

export async function getCart(variables: GetCartQueryVariables) {
  const { cart: cartFragmentRef } = await getShopifyGraphQL(
    getCartQuery,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cart;
}

export async function getCollection(variables: GetCollectionQueryVariables) {
  const { collection: collectionFragmentRef } = await getShopifyGraphQL(
    getCollectionQuery,
    variables,
  );

  if (!collectionFragmentRef) {
    throw {
      status: 404,
      message: `Collection not found for handle \`${variables.handle}\``,
    };
  }

  // console.log({ collectionFragmentRef });

  const collection = getFragmentData(collectionFragment, collectionFragmentRef);

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

  // console.log({ collection });

  const { products } = collection;

  return products;
}

export async function getCollections() {
  const { collections: shopifyCollectionConnection } =
    await getShopifyGraphQL(getCollectionsQuery);

  if (!shopifyCollectionConnection) {
    throw {
      status: 404,
      message: `Collections not found`,
    };
  }

  // console.log({ shopifyCollectionConnection });

  const shopifyCollections = shopifyCollectionConnection.edges.map(
    (edge) => edge?.node,
  );

  const collections: CollectionFragment[] = [
    {
      __typename: "Collection",
      handle: "",
      title: "All",
      description: "All products",
      seo: {
        //   title: "All",
        //   description: "All products",
      },
      // path: "/search",
      updatedAt: new Date().toISOString(),
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...shopifyCollections
      .map((collectionFragmentRef) =>
        getFragmentData(collectionFragment, collectionFragmentRef),
      )
      .filter((collection) => !collection.handle.startsWith("hidden")),
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

  // console.log({ menu });

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

  // console.log({ page });

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

  // console.log({ shop });

  return shop;
}

export async function getProductBasic(
  variables: GetProductBasicQueryVariables,
) {
  const { product: productBasicFragmentRef } = await getShopifyGraphQL(
    getProductBasicQuery,
    variables,
  );

  if (!productBasicFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for handle \`${variables.handle}\``,
    };
  }

  // console.log({ productBasicFragmentRef });

  const product = getFragmentData(
    productBasicFragment,
    productBasicFragmentRef,
  );

  // console.log({ product });

  return product;
}

export async function getProductDetails(
  variables: GetProductDetailsQueryVariables,
) {
  const { product: productDetailsFragmentRef } = await getShopifyGraphQL(
    getProductDetailsQuery,
    variables,
  );

  if (!productDetailsFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for handle \`${variables.handle}\``,
    };
  }

  // console.log({ productDetailsFragmentRef });

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  // console.log({ product });

  return product;
}

export async function getProductRecommendations(
  variables: GetProductRecommendationsQueryVariables,
) {
  const { productRecommendations: productRecommendationRefs } =
    await getShopifyGraphQL(getProductRecommendationsQuery, variables);

  if (!productRecommendationRefs) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  const productRecommendations = productRecommendationRefs.map(
    (productRecommendationRef) =>
      getFragmentData(productBasicFragment, productRecommendationRef),
  );

  return productRecommendations;
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

export async function getProductsWithVariants(
  variables: GetProductsWithVariantsQueryVariables,
) {
  const { products } = await getShopifyGraphQL(
    getProductsWithVariantsQuery,
    variables,
  );

  if (!products) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  return products;
}
