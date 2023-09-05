import { CollectionFragment } from "../codegen/graphql";
import { getFragmentData } from "../codegen/index";
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from "../mutations/cart";
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery,
} from "../queries/collection";
// import { collectionFragment } from "../fragments/collection";
import { camelCase } from "lodash";
import {
  AddToCartMutationVariables,
  CreateCartMutationVariables,
  EditCartItemsMutationVariables,
  GetCartQueryVariables,
  GetCollectionProductsQueryVariables,
  GetCollectionQueryVariables,
  GetCollectionsQueryVariables,
  GetMenuQueryVariables,
  GetPageQueryVariables,
  GetPagesQueryVariables,
  GetProductBasicQueryVariables,
  GetProductDetailsQueryVariables,
  GetProductRecommendationsQueryVariables,
  GetProductsQueryVariables,
  GetProductsWithVariantsQueryVariables,
  RemoveFromCartMutationVariables
} from "../codegen/graphql";
import {
  cartFragment,
  collectionFragment,
  pageFragment,
  productBasicFragment,
  productDetailsFragment
} from "../fragments/index";
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
} from "../queries/index";
import { type PolicyName } from "../types";
import { getMenuItems, getShopifyGraphQL } from "../utilities";

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

export async function getCollections(variables: GetCollectionsQueryVariables) {
  const { collections: shopifyCollectionConnection } =
    await getShopifyGraphQL(getCollectionsQuery, variables);

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

  return { ...menu, items: getMenuItems(menu.items) };
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
  const { shop } = await getShopifyGraphQL(getPoliciesQuery, {});

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
