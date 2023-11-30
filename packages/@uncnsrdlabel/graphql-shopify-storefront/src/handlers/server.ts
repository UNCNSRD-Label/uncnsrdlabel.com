"use server";

import { getInContextVariables } from "@uncnsrdlabel/lib/server";
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
  GetLocalizationQueryVariables,
  GetMenuQueryVariables,
  GetPageQueryVariables,
  GetPagesQueryVariables,
  GetProductBasicQueryVariables,
  GetProductDetailsByHandleQueryVariables,
  GetProductDetailsByIdQueryVariables,
  GetProductRecommendationsQueryVariables,
  GetProductsQueryVariables,
  GetProductsWithVariantsQueryVariables,
  GetRouteMetaObjectQueryVariables,
  GetShopPoliciesQueryVariables,
  RemoveFromCartMutationVariables
} from "../codegen/graphql";
import { collectionFragment } from "../fragments/index";
import {
  getCartQuery,
  getLocalizationQuery,
  getMenuQuery,
  getPageQuery,
  getPagesQuery,
  getProductBasicQuery,
  getProductDetailsByHandleQuery,
  getProductDetailsByIdQuery,
  getProductRecommendationsQuery,
  getProductsQuery,
  getProductsWithVariantsQuery,
  getRouteMetaObjectQuery,
  getShopDetailsQuery,
  getShopPoliciesQuery,
} from "../queries/index";
import { type PolicyName } from "../types";
import { getMenuItems, getShopifyGraphQL } from "../utilities/server";

export async function createCartHandler({ variables, lang }: {
  variables?: Pick<CreateCartMutationVariables, "lineItems">,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang) as Pick<CreateCartMutationVariables, "country" | "language">;

  const { cartCreate } = await getShopifyGraphQL(
    createCartMutation,
    { ...inContextVariables, ...variables, },
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

  // const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cartFragmentRef;
}

export async function addToCartHandler({ variables, lang }: {
  variables: AddToCartMutationVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { cartLinesAdd } = await getShopifyGraphQL(addToCartMutation, {
    ...inContextVariables,
    ...variables,
  });

  if (!cartLinesAdd) {
    return null;
  }

  // console.log({ cartLinesAdd });

  const { cart: cartFragmentRef } = cartLinesAdd;

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  // const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cartFragmentRef;
}

export async function removeFromCartHandler({ variables, lang }: {
  variables: RemoveFromCartMutationVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { cartLinesRemove } = await getShopifyGraphQL(removeFromCartMutation, {
    ...inContextVariables,
    ...variables,
  });

  if (!cartLinesRemove) {
    return null;
  }

  // console.log({ cartLinesRemove });

  const { cart: cartFragmentRef } = cartLinesRemove;

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  // const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cartFragmentRef;
}

export async function updateCartHandler({ variables, lang }: {
  variables: EditCartItemsMutationVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { cartLinesUpdate } = await getShopifyGraphQL(editCartItemsMutation, {
    ...inContextVariables,
    ...variables,
  });

  if (!cartLinesUpdate) {
    return null;
  }

  // console.log({ cartLinesUpdate });

  const { cart: cartFragmentRef } = cartLinesUpdate;

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  // const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cartFragmentRef;
}

export async function getCartHandler({ variables, lang }: {
  variables: GetCartQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  // @ts-expect-error Types of property 'country' are incompatible.
  const { cart: cartFragmentRef } = await getShopifyGraphQL(getCartQuery, {
    ...inContextVariables,
    ...variables,
  });

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  // const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cartFragmentRef;
}

export async function getCollectionHandler({ variables, lang }: {
  variables: GetCollectionQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { collection: collectionFragmentRef } = await getShopifyGraphQL(
    getCollectionQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!collectionFragmentRef) {
    throw {
      status: 404,
      message: `Collection not found for handle \`${variables.handle}\``,
    };
  }

  // console.log({ collectionFragmentRef });

  // const collection = getFragmentData(
  //   collectionFragment,
  //   collectionFragmentRef,
  // );

  return collectionFragmentRef;
}

export async function getCollectionProductsHandler({ variables, lang }: {
  variables: GetCollectionProductsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  // @ts-expect-error Types of property 'country' are incompatible.
  const { collection } = await getShopifyGraphQL(getCollectionProductsQuery, {
    ...inContextVariables,
    ...variables,
  });

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

export async function getCollectionRefsHandler({ variables, lang }: {
  variables: GetCollectionsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { collections: shopifyCollectionConnection } =
    // @ts-expect-error Types of property 'country' are incompatible.
    await getShopifyGraphQL(getCollectionsQuery, {
      ...inContextVariables,
      ...variables,
    });

  if (!shopifyCollectionConnection) {
    throw {
      status: 404,
      message: `Collections not found`,
    };
  }

  // console.log({ shopifyCollectionConnection });

  const collectionsRefs = shopifyCollectionConnection.edges.map(
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
    ...collectionsRefs
      .map((collectionFragmentRef) =>
        getFragmentData(collectionFragment, collectionFragmentRef),
      )
      .filter((collection) => !collection.handle.startsWith("hidden")),
  ];

  return collections;
}

export async function getRouteMetaObjectHandler({ variables, lang }: {
  variables: GetRouteMetaObjectQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { metaobject } = await getShopifyGraphQL(
    getRouteMetaObjectQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables }
  );

  if (!metaobject) {
    throw {
      status: 404,
      message: `Metaobject not found for handle \`${variables.handle}\``,
    };
  }

  // console.log({ metaobject });

  return metaobject;
}

export async function getMenuHandler({ variables, lang }: {
  variables: GetMenuQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  // @ts-expect-error Types of property 'country' are incompatible.
  const { menu } = await getShopifyGraphQL(getMenuQuery, {
    ...inContextVariables,
    ...variables,
  });

  if (!menu) {
    throw {
      status: 404,
      message: `Menu not found for handle \`${variables.handle}\``,
    };
  }

  // console.log({ menu });

  return { ...menu, items: await getMenuItems(menu.items) };
}

export async function getPageHandler({ variables, lang }: {
  variables: GetPageQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { page: pageFragmentRef } = await getShopifyGraphQL(
    getPageQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!pageFragmentRef) {
    throw {
      status: 404,
      message: `Page not found for handle \`${variables.handle}\``,
    };
  }

  // const page = getFragmentData(pageFragment, pageFragmentRef);

  // console.log({ page });

  return pageFragmentRef;
}

export async function getPagesHandler({ variables, lang }: {
  variables: GetPagesQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  // @ts-expect-error Types of property 'country' are incompatible.
  const { pages } = await getShopifyGraphQL(getPagesQuery, {
    ...inContextVariables,
    ...variables,
  });

  if (!pages) {
    throw {
      status: 404,
      message: `Pages not found`,
    };
  }

  return pages;
}

export async function getShopDetailsHandler({ lang }: {
  lang?: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { shop } = await getShopifyGraphQL(
    getShopDetailsQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    inContextVariables,
  );

  if (!shop) {
    throw {
      status: 404,
      message: `Shop not found`,
    };
  }

  // console.log({ shop });

  return shop;
}

export async function getLocalizationHandler({ variables, lang }: {
  variables?: GetLocalizationQueryVariables,
  lang?: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { localization } = await getShopifyGraphQL(
    getLocalizationQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...variables, ...inContextVariables, }
  );

  if (!localization) {
    throw {
      status: 404,
      message: `Localization not found`,
    };
  }

  // console.log({ localization });

  return localization;
}

export async function getPolicyHandler({ variables, lang }: {
  variables: GetShopPoliciesQueryVariables & {
    handle: PolicyName;
  },
  lang: Intl.BCP47LanguageTag,
}) {
  const policies = await getShopPoliciesHandler({ lang });

  const { handle } = variables;

  const policyName = camelCase(handle) as PolicyName;

  const policy = policies[policyName];

  return policy;
}

export async function getShopPoliciesHandler({ lang }: {
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { shop } = await getShopifyGraphQL(
    getShopPoliciesQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    inContextVariables,
  );

  if (!shop) {
    throw {
      status: 404,
      message: `Shop not found`,
    };
  }

  // console.log({ shop });

  return shop;
}

export async function getProductBasicHandler({ variables, lang }: {
  variables: GetProductBasicQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { product: productBasicFragmentRef } = await getShopifyGraphQL(
    getProductBasicQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!productBasicFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for handle \`${variables.handle}\``,
    };
  }

  // console.log({ productBasicFragmentRef });

  // const product = getFragmentData(
  //   productBasicFragment,
  //   productBasicFragmentRef,
  // );

  // console.log({ product });

  return productBasicFragmentRef;
}

export async function getProductDetailsByHandleHandler({ variables, lang }: {
  variables: GetProductDetailsByHandleQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { product: productDetailsFragmentRef } = await getShopifyGraphQL(
    getProductDetailsByHandleQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!productDetailsFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for handle \`${variables.handle}\``,
    };
  }

  // console.log({ productDetailsFragmentRef });

  // const product = getFragmentData(
  //   productDetailsFragment,
  //   productDetailsFragmentRef,
  // );

  // console.log({ product });

  return productDetailsFragmentRef;
}

export async function getProductDetailsByIdHandler({ variables, lang }: {
  variables: GetProductDetailsByIdQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { product: productDetailsFragmentRef } = await getShopifyGraphQL(
    getProductDetailsByIdQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!productDetailsFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for id \`${variables.id}\``,
    };
  }

  // console.log({ productDetailsFragmentRef });

  // const product = getFragmentData(
  //   productDetailsFragment,
  //   productDetailsFragmentRef,
  // );

  // console.log({ product });

  return productDetailsFragmentRef;
}

export async function getProductRecommendationsHandler({ variables, lang }: {
  variables: GetProductRecommendationsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { productRecommendations: productRecommendationRefs } =
    await getShopifyGraphQL(
      getProductRecommendationsQuery,
      // @ts-expect-error Types of property 'country' are incompatible.
      { ...inContextVariables, ...variables },
    );

  if (!productRecommendationRefs) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  return productRecommendationRefs;
}

export async function getProductsHandler({ variables, lang }: {
  variables: GetProductsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { products } = await getShopifyGraphQL(
    getProductsQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables }
  );

  if (!products) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  return products;
}

export async function getProductsWithVariantsHandler({ variables, lang }: {
  variables: GetProductsWithVariantsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { products } = await getShopifyGraphQL(
    getProductsWithVariantsQuery,
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables }
  );

  if (!products) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  return products;
}
