import { getInContextVariables } from "@uncnsrdlabel/lib";
import { CollectionFragment } from "./codegen/graphql";
import { getFragmentData } from "./codegen/index";
import { domain } from "./constants";
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from "./mutations/cart";
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery,
} from "./queries/collection";
// import { collectionFragment } from "./fragments/collection";
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
  GetProductDetailsByHandleQueryVariables,
  GetProductDetailsByIdQueryVariables,
  GetProductRecommendationsQueryVariables,
  GetProductsQueryVariables,
  GetProductsWithVariantsQueryVariables,
  GetRouteMetaObjectQueryVariables,
  RemoveFromCartMutationVariables
} from "./codegen/graphql";
import { collectionFragment } from "./fragments/index";
import {
  getCartQuery,
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
import { getShopifyGraphQL } from "./utilities";

export async function createCartHandler({ variables }: {
  variables: CreateCartMutationVariables,
}) {
  const { cartCreate } = await getShopifyGraphQL(
    createCartMutation,
    variables,
  );

  if (!cartCreate) {
    return null;
  }

  const { cart: cartFragmentRef } = cartCreate;

  if (!cartFragmentRef) {
    return null;
  }

  return cartFragmentRef;
}

export async function addToCartHandler({ variables }: {
  variables: AddToCartMutationVariables,
}) {
  const { cartLinesAdd } = await getShopifyGraphQL(addToCartMutation, variables);

  if (!cartLinesAdd) {
    return null;
  }

  const { cart: cartFragmentRef } = cartLinesAdd;

  if (!cartFragmentRef) {
    return null;
  }

  return cartFragmentRef;
}

export async function removeFromCartHandler({ variables }: {
  variables: RemoveFromCartMutationVariables,
}) {
  const { cartLinesRemove } = await getShopifyGraphQL(removeFromCartMutation, variables);

  if (!cartLinesRemove) {
    return null;
  }

  const { cart: cartFragmentRef } = cartLinesRemove;

  if (!cartFragmentRef) {
    return null;
  }

  return cartFragmentRef;
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

export async function getCartHandler({ variables, lang }: {
  variables: GetCartQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getCartHandler")
  }

  const inContextVariables = getInContextVariables(lang);

  const { cart: cartFragmentRef } = await getShopifyGraphQL(getCartQuery, {
    ...inContextVariables,
    ...variables,
  });

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
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!collectionFragmentRef) {
    throw {
      status: 404,
      message: `Collection not found for handle \`${variables.handle}\``,
    };
  }

  return collectionFragmentRef;
}

export async function getCollectionProductsHandler({ variables, lang }: {
  variables: GetCollectionProductsQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getCollectionProductsHandler")
  }

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

  const { products } = collection;

  return products;
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
  if (!lang) {
    console.error("No lang in getRouteMetaObjectHandler")
  }

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

  const items = menu.items.map((item) => ({
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
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!pageFragmentRef) {
    throw {
      status: 404,
      message: `Page not found for handle \`${variables.handle}\``,
    };
  }

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
  lang: Intl.BCP47LanguageTag,
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
    // @ts-expect-error Types of property 'country' are incompatible.
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
    // @ts-expect-error Types of property 'country' are incompatible.
    inContextVariables,
  );

  if (!shop) {
    throw {
      status: 404,
      message: `Shop not found`,
    };
  }

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
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!productBasicFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for handle \`${variables.handle}\``,
    };
  }

  return productBasicFragmentRef;
}

export async function getProductDetailsByHandleHandler({ variables, lang }: {
  variables: GetProductDetailsByHandleQueryVariables,
  lang: Intl.BCP47LanguageTag,
}) {
  if (!lang) {
    console.error("No lang in getProductDetailsByHandleHandler")
  }

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
    // @ts-expect-error Types of property 'country' are incompatible.
    { ...inContextVariables, ...variables },
  );

  if (!productDetailsFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for id \`${variables.id}\``,
    };
  }

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
  if (!lang) {
    console.error("No lang in getProductsHandler")
  }

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
  if (!lang) {
    console.error("No lang in getProductsWithVariantsHandler")
  }

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