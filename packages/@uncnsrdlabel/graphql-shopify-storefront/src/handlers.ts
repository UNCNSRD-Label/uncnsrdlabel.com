import {
    CartBuyerIdentityUpdateMutationVariables,
    CollectionFragment,
    CollectionQueryVariables,
    CollectionWithProductsQueryVariables,
    CollectionsQueryVariables,
    CustomerAccessTokenCreateMutationVariables,
    CustomerCreateMutationVariables,
    CustomerRecoverMutationVariables,
    CustomerResetPasswordMutationVariables,
    CustomerUpdateMutationVariables,
    EditCartItemsMutationVariables,
    MenuQueryVariables,
    PageQueryVariables,
    PagesQueryVariables,
    ProductBasicQueryVariables,
    ProductDetailsByHandleQueryVariables,
    ProductDetailsByIdQueryVariables,
    ProductRecommendationsQueryVariables,
    ProductsQueryVariables,
    ProductsWithVariantsQueryVariables,
    RouteMetaObjectQueryVariables
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
    collectionQuery,
    collectionWithProductsQuery,
    collectionsQuery
} from "./queries/collection";
import {
    localizationDetailsQuery,
    menuQuery,
    pageQuery,
    pagesQuery,
    productBasicQuery,
    productDetailsByHandleQuery,
    productDetailsByIdQuery,
    productRecommendationsQuery,
    productsQuery,
    productsWithVariantsQuery,
    routeMetaObjectQuery,
    shopDetailsQuery,
    shopPoliciesQuery
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
  variables: CollectionQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getCollectionHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { collection: collectionFragmentRef } = await getShopifyGraphQL(
    collectionQuery,
    { ...inContextVariables, ...variables },
  );

  return collectionFragmentRef;
}

export async function getCollectionWithProductsHandler({ variables, lang }: {
  variables: CollectionWithProductsQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getCollectionWithProductsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { collection } = await getShopifyGraphQL(collectionWithProductsQuery, {
    ...inContextVariables,
    ...variables,
  });

  return collection;
}

export async function getCollectionRefsHandler({ variables, lang }: {
  variables: CollectionsQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getCollectionRefsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { collections: shopifyCollectionConnection } =
    await getShopifyGraphQL(collectionsQuery, {
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
  variables: RouteMetaObjectQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getRouteMetaObjectHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { metaobject } = await getShopifyGraphQL(
    routeMetaObjectQuery,
    { ...inContextVariables, ...variables }
  );

  return metaobject;
}

export async function getMenuHandler({ variables, lang }: {
  variables: MenuQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getMenuHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { menu } = await getShopifyGraphQL(menuQuery, {
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
  variables: PageQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getPageHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { page: pageFragmentRef } = await getShopifyGraphQL(
    pageQuery,
    { ...inContextVariables, ...variables },
  );

  return pageFragmentRef;
}

export async function getPagesHandler({ variables, lang }: {
  variables: PagesQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getPagesHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { pages } = await getShopifyGraphQL(pagesQuery, {
    ...inContextVariables,
    ...variables,
  });

  return pages;
}

export async function getShopDetailsHandler({ lang }: {
  lang: Navigator['language'],
}) {
  const inContextVariables = getInContextVariables(lang);

  const { shop } = await getShopifyGraphQL(
    shopDetailsQuery,
    inContextVariables,
  );

  return shop;
}

export async function getLocalizationDetailsHandler({ lang }: {
  lang: Navigator['language'];
}) {
  if (!lang) {
    console.error("No lang in getLocalizationDetailsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { localization } = await getShopifyGraphQL(
    localizationDetailsQuery,
    inContextVariables,
  );

  return localization;
}

export async function getShopPoliciesHandler({ lang }: {
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getShopPoliciesHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { shop } = await getShopifyGraphQL(
    shopPoliciesQuery,
    inContextVariables,
  );

  return shop;
}

export async function getProductBasicHandler({ variables, lang }: {
  variables: ProductBasicQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getProductBasicHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { product: productBasicFragmentRef } = await getShopifyGraphQL(
    productBasicQuery,
    { ...inContextVariables, ...variables },
  );

  return productBasicFragmentRef;
}

export async function getProductDetailsByHandleHandler({ variables, lang }: {
  variables: Omit<ProductDetailsByHandleQueryVariables, "country" | "language">,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getProductDetailsByHandleHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { product: productDetailsFragmentRef } = await getShopifyGraphQL(
    productDetailsByHandleQuery,
    { ...inContextVariables, ...variables },
  );

  return productDetailsFragmentRef;
}

export async function getProductDetailsByIdHandler({ variables, lang }: {
  variables: ProductDetailsByIdQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getProductDetailsByIdHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { product: productDetailsFragmentRef } = await getShopifyGraphQL(
    productDetailsByIdQuery,
    { ...inContextVariables, ...variables },
  );

  return productDetailsFragmentRef;
}

export async function getProductRecommendationsHandler({ variables, lang }: {
  variables: ProductRecommendationsQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getProductRecommendationsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { productRecommendations: productRecommendationRefs } =
    await getShopifyGraphQL(
      productRecommendationsQuery,
      { ...inContextVariables, ...variables },
    );

  return productRecommendationRefs;
}

export async function getProductsHandler({ variables, lang }: {
  variables: ProductsQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getProductsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { products } = await getShopifyGraphQL(
    productsQuery,
    { ...inContextVariables, ...variables }
  );

  return products;
}

export async function getProductsWithVariantsHandler({ variables, lang }: {
  variables: ProductsWithVariantsQueryVariables,
  lang: Navigator['language'],
}) {
  if (!lang) {
    console.error("No lang in getProductsWithVariantsHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { products } = await getShopifyGraphQL(
    productsWithVariantsQuery,
    { ...inContextVariables, ...variables }
  );

  return products;
}
