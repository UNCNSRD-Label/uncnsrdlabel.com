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
  GetProductDetailsByHandleQueryVariables,
  GetProductDetailsByIdQueryVariables,
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
  getProductBasicQuery,
  getProductDetailsByHandleQuery,
  getProductDetailsByIdQuery,
  getProductRecommendationsQuery,
  getProductsQuery,
  getProductsWithVariantsQuery,
  getShopPoliciesQuery,
} from "../queries/index";
import { type PolicyName } from "../types";
import { useGetShopifyGraphQL } from "../utilities/client";
import { getMenuItems } from "../utilities/server";

export function useCreateCart(variables: CreateCartMutationVariables) {
  const { data } = useGetShopifyGraphQL(
    createCartMutation,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!data) {
    return null;
  }

  const { cartCreate } = data;

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

export function useAddToCart(variables: AddToCartMutationVariables) {
  const { data } = useGetShopifyGraphQL(
    addToCartMutation,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!data) {
    return null;
  }

  const { cartLinesAdd } = data;

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

export function useRemoveFromCart(
  variables: RemoveFromCartMutationVariables,
) {
  const { data } = useGetShopifyGraphQL(
    removeFromCartMutation,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!data) {
    return null;
  }

  const { cartLinesRemove } = data;

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

export function useUpdateCart(variables: EditCartItemsMutationVariables) {
  const { data } = useGetShopifyGraphQL(
    editCartItemsMutation,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!data) {
    return null;
  }

  const { cartLinesUpdate } = data;

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

export function useGetCart(variables: GetCartQueryVariables) {
  const { data } = useGetShopifyGraphQL(
    getCartQuery,
    variables,
    // TODO: figure out how to use this
    // cache: "no-store",
  );

  if (!data) {
    return null;
  }

  const { cart: cartFragmentRef } = data;

  if (!cartFragmentRef) {
    return null;
  }

  // console.log({ cartFragmentRef });

  const cart = getFragmentData(cartFragment, cartFragmentRef);

  return cart;
}

export function useGetCollection(variables: GetCollectionQueryVariables) {
  const { data } = useGetShopifyGraphQL(
    getCollectionQuery,
    variables,
  );

  if (!data) {
    return null;
  }

  const { collection: collectionFragmentRef } = data;

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

export function useGetCollectionProducts(
  variables: GetCollectionProductsQueryVariables,
) {
  const { data } = useGetShopifyGraphQL(
    getCollectionProductsQuery,
    variables,
  );

  if (!data) {
    return null;
  }

  const { collection } = data;

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

export function useGetCollections(
  variables: GetCollectionsQueryVariables,
) {
  const { data } = useGetShopifyGraphQL(
    getCollectionsQuery,
    variables,
  );

  if (!data) {
    return null;
  }

  const { collections: shopifyCollectionConnection } = data;

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

export function useGetMenu(variables: GetMenuQueryVariables) {
  const { data } = useGetShopifyGraphQL(getMenuQuery, variables);

  if (!data) {
    return null;
  }

  const { menu } = data;

  if (!menu) {
    throw {
      status: 404,
      message: `Menu not found for handle \`${variables.handle}\``,
    };
  }

  // console.log({ menu });

  return { ...menu, items: getMenuItems(menu.items) };
}

export function useGetPage(variables: GetPageQueryVariables) {
  const { data } = useGetShopifyGraphQL(
    getPageQuery,
    variables,
  );

  if (!data) {
    return null;
  }

  const { pageByHandle: pageFragmentRef } = data;

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

export function useGetPages(variables: GetPagesQueryVariables) {
  const { data } = useGetShopifyGraphQL(getPagesQuery, variables);

  if (!data) {
    return null;
  }

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
  const policies = useGetShopPolicies();

  if (!policies) {
    return null;
  }

  const policyName = camelCase(handle) as PolicyName;

  const policy = policies[policyName];

  return policy;
}

export function useGetShopPolicies() {
  const { data } = useGetShopifyGraphQL(getShopPoliciesQuery, {});

  if (!data) {
    return null;
  }

  const { shop } = data;

  if (!shop) {
    throw {
      status: 404,
      message: `Shop not found`,
    };
  }

  // console.log({ shop });

  return shop;
}

export function useGetProductBasic(
  variables: GetProductBasicQueryVariables,
) {
  const { data } = useGetShopifyGraphQL(
    getProductBasicQuery,
    variables,
  );

  if (!data) {
    return null;
  }

  const { product: productBasicFragmentRef } = data;

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

export function usegetProductDetailsByHandle(
  variables: GetProductDetailsByHandleQueryVariables,
) {
  const { data } = useGetShopifyGraphQL(
    getProductDetailsByHandleQuery,
    variables,
  );

  if (!data) {
    return null;
  }

  const { product: productDetailsFragmentRef } = data;

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

export function usegetProductDetailsById(
  variables: GetProductDetailsByIdQueryVariables,
) {
  const { data } = useGetShopifyGraphQL(
    getProductDetailsByIdQuery,
    variables,
  );

  if (!data) {
    return null;
  }

  const { product: productDetailsFragmentRef } = data;

  if (!productDetailsFragmentRef) {
    throw {
      status: 404,
      message: `Product not found for id \`${variables.id}\``,
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

export function useGetProductRecommendations(
  variables: GetProductRecommendationsQueryVariables,
) {
  const { data } =
    useGetShopifyGraphQL(getProductRecommendationsQuery, variables);

  if (!data) {
    return null;
  }

  const { productRecommendations: productRecommendationRefs } = data;

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

export function useGetProducts(variables: GetProductsQueryVariables) {
  const { data } = useGetShopifyGraphQL(getProductsQuery, variables);

  if (!data) {
    return null;
  }

  const { products } = data;

  if (!products) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  return products;
}

export function useGetProductsWithVariants(
  variables: GetProductsWithVariantsQueryVariables,
) {
  const { data } = useGetShopifyGraphQL(
    getProductsWithVariantsQuery,
    variables,
  );

  if (!data) {
    return null;
  }

  const { products } = data;

  if (!products) {
    throw {
      status: 404,
      message: `Products not found`,
    };
  }

  return products;
}
