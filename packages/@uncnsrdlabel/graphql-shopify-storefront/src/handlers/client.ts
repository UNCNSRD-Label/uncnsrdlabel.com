'use client'

import {
  GetProductRecommendationsQueryVariables,
  GetProductsQueryVariables,
  GetProductsWithVariantsQueryVariables
} from "../codegen/graphql";
import { getFragmentData } from "../codegen/index";
import {
  productBasicFragment
} from "../fragments/index";
import {
  getProductRecommendationsQuery,
  getProductsQuery,
  getProductsWithVariantsQuery
} from "../queries/index";
import { useGetShopifyGraphQL } from "../utilities/client";


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
