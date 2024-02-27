import {
  CartBuyerIdentityUpdateMutationVariables,
  CollectionFragment,
  CustomerAccessTokenCreateMutationVariables,
  CustomerCreateMutationVariables,
  CustomerRecoverMutationVariables,
  CustomerResetPasswordMutationVariables,
  CustomerUpdateMutationVariables,
  EditCartItemsMutationVariables,
  GetCollectionQueryVariables,
  GetCollectionWithProductsQueryVariables,
  GetCollectionsQueryVariables,
  GetMenuQueryVariables,
  GetPageQueryVariables,
  GetPagesQueryVariables,
  GetProductBasicQueryVariables,
  GetProductDetailsByHandleQueryVariables,
  GetProductDetailsByIdQueryVariables,
  GetProductRecommendationsQueryVariables,
  GetProductsQueryVariables,
  GetProductsWithVariantsQueryVariables,
  GetRouteMetaObjectQueryVariables
} from "./codegen/graphql";
import { getFragmentData } from "./codegen/index";
import { domain } from "./constants";
import { collectionFragment } from "./fragments/index";
import {
  cartBuyerIdentityUpdateMutation,
  editCartItemsMutation
} from "./mutations/cart";
import {
  customerAccessTokenCreateMutation,
  customerCreateMutation,
  customerRecoverMutation,
  customerResetMutation,
  customerUpdateMutation,
} from "./mutations/customer";
import {
  getCollectionQuery,
  getCollectionWithProductsQuery,
  getCollectionsQuery,
} from "./queries/collection";
import {
  getLocalizationDetailsQuery,
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
  getShopPoliciesQuery
} from "./queries/index";
import { getInContextVariables, getShopifyGraphQL } from "./utilities";

export async function cartBuyerIdentityUpdateHandler({ variables }: {
  variables: CartBuyerIdentityUpdateMutationVariables,
}) {
  const { cartBuyerIdentityUpdate } = await getShopifyGraphQL(cartBuyerIdentityUpdateMutation, variables);

  if (!cartBuyerIdentityUpdate) {
    return null;
  }

  const { cart: cartFragmentRef, userErrors } = cartBuyerIdentityUpdate;

  if (!cartFragmentRef) {
    return null;
  }

  // TODO: Handle userErrors
  console.error({ userErrors })

  return cartFragmentRef;
}

export async function recoverAccountHandler({ variables }: {
  variables: CustomerRecoverMutationVariables,
}) {
  const customerRecoverPayload = await getShopifyGraphQL(customerRecoverMutation, variables);

  return customerRecoverPayload;
}

export async function resetAccountHandler({ variables }: {
  variables: CustomerResetPasswordMutationVariables,
}) {
  const customerResetPayload = await getShopifyGraphQL(customerResetMutation, variables);

  return customerResetPayload;
}

export async function signInToAccountHandler({ variables }: {
  variables: CustomerAccessTokenCreateMutationVariables,
}) {
  const customerAccessTokenCreatePayload = await getShopifyGraphQL(customerAccessTokenCreateMutation, variables);

  return customerAccessTokenCreatePayload;
}

export async function signUpForAccountHandler({ variables }: {
  variables: CustomerCreateMutationVariables,
}) {
  const customerCreatePayload = await getShopifyGraphQL(customerCreateMutation, variables);

  return customerCreatePayload;
}

export async function updateAccountHandler({ variables }: {
  variables: CustomerUpdateMutationVariables,
}) {
  const updateAccountPayload = await getShopifyGraphQL(customerUpdateMutation, variables);

  return updateAccountPayload;
}

export async function updateCartHandler({ variables }: {
  variables: EditCartItemsMutationVariables,
}) {
  const { cartLinesUpdate } = await getShopifyGraphQL(editCartItemsMutation, variables);

  if (!cartLinesUpdate) {
    return null;
  }

  const { cart: cartFragmentRef } = cartLinesUpdate;

  if (!cartFragmentRef) {
    return null;
  }

  return cartFragmentRef;
}

export async function getCollectionHandler({ variables, lang }: {
  variables: GetCollectionQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getCollectionHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { collection: collectionFragmentRef } = await getShopifyGraphQL(
    getCollectionQuery,
    { ...inContextVariables, ...variables },
  );

  return collectionFragmentRef;
}

export async function getCollectionWithProductsHandler({ variables, lang }: {
  variables: GetCollectionWithProductsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getCollectionWithProductsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { collection } = await getShopifyGraphQL(getCollectionWithProductsQuery, {
    ...inContextVariables,
    ...variables,
  });

  return collection;
}

export async function getCollectionRefsHandler({ variables, lang }: {
  variables: GetCollectionsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getCollectionRefsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { collections: shopifyCollectionConnection } =
    await getShopifyGraphQL(getCollectionsQuery, {
      ...inContextVariables,
      ...variables,
    });

  const collectionsRefs = shopifyCollectionConnection.edges.map(
    (edge) => edge?.node,
  );

  const collections: CollectionFragment[] = [
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
  if (!lang) {
    console.error("No lang in getRouteMetaObjectHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { metaobject } = await getShopifyGraphQL(
    getRouteMetaObjectQuery,
    { ...inContextVariables, ...variables }
  );

  return metaobject;
}

export async function getMenuHandler({ variables, lang }: {
  variables: GetMenuQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getMenuHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { menu } = await getShopifyGraphQL(getMenuQuery, {
    ...inContextVariables,
    ...variables,
  });

  const items = menu?.items.map((item) => ({
    ...item,
    url: item.url
      ?.replace(domain, "")
      .replace("/collections/", "/search/")
      .replace("/pages/", "/"),
  }));


  return { ...menu, items };
}

export async function getPageHandler({ variables, lang }: {
  variables: GetPageQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getPageHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { page: pageFragmentRef } = await getShopifyGraphQL(
    getPageQuery,
    { ...inContextVariables, ...variables },
  );

  return pageFragmentRef;
}

export async function getPagesHandler({ variables, lang }: {
  variables: GetPagesQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getPagesHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { pages } = await getShopifyGraphQL(getPagesQuery, {
    ...inContextVariables,
    ...variables,
  });

  return pages;
}

export async function getShopDetailsHandler({ lang }: {
  lang: Intl.BCP47LanguageTag,
}) {
  const inContextVariables = getInContextVariables(lang);

  const { shop } = await getShopifyGraphQL(
    getShopDetailsQuery,
    inContextVariables,
  );

  return shop;
}

export async function getLocalizationDetailsHandler({ lang }: {
  lang: Intl.BCP47LanguageTag;
}) {
  if (!lang) {
    console.error("No lang in getLocalizationDetailsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { localization } = await getShopifyGraphQL(
    getLocalizationDetailsQuery,
    inContextVariables,
  );

  return localization;
}

export async function getShopPoliciesHandler({ lang }: {
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getShopPoliciesHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { shop } = await getShopifyGraphQL(
    getShopPoliciesQuery,
    inContextVariables,
  );

  return shop;
}

export async function getProductBasicHandler({ variables, lang }: {
  variables: GetProductBasicQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getProductBasicHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { product: productBasicFragmentRef } = await getShopifyGraphQL(
    getProductBasicQuery,
    { ...inContextVariables, ...variables },
  );

  return productBasicFragmentRef;
}

export async function getProductDetailsByHandleHandler({ variables, lang }: {
  variables: Omit<GetProductDetailsByHandleQueryVariables, "country" | "language">,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getProductDetailsByHandleHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { product: productDetailsFragmentRef } = await getShopifyGraphQL(
    getProductDetailsByHandleQuery,
    { ...inContextVariables, ...variables },
  );

  return productDetailsFragmentRef;
}

export async function getProductDetailsByIdHandler({ variables, lang }: {
  variables: GetProductDetailsByIdQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getProductDetailsByIdHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { product: productDetailsFragmentRef } = await getShopifyGraphQL(
    getProductDetailsByIdQuery,
    { ...inContextVariables, ...variables },
  );

  return productDetailsFragmentRef;
}

export async function getProductRecommendationsHandler({ variables, lang }: {
  variables: GetProductRecommendationsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getProductRecommendationsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { productRecommendations: productRecommendationRefs } =
    await getShopifyGraphQL(
      getProductRecommendationsQuery,
      { ...inContextVariables, ...variables },
    );

  return productRecommendationRefs;
}

export async function getProductsHandler({ variables, lang }: {
  variables: GetProductsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getProductsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { products } = await getShopifyGraphQL(
    getProductsQuery,
    { ...inContextVariables, ...variables }
  );

  return products;
}

export async function getProductsWithVariantsHandler({ variables, lang }: {
  variables: GetProductsWithVariantsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getProductsWithVariantsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { products } = await getShopifyGraphQL(
    getProductsWithVariantsQuery,
    { ...inContextVariables, ...variables }
  );

  return products;
}
