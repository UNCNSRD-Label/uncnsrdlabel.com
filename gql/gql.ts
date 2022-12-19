/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  "query Products {\n  shop {\n    name\n  }\n  products(first: 8) {\n    nodes {\n      availableForSale\n      description\n      featuredImage {\n        altText\n        height\n        url\n        width\n      }\n      handle\n      id\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      productType\n      publishedAt\n      title\n      vendor\n    }\n  }\n}":
    types.ProductsDocument,
  'query Product($slug: String!) {\n  product(handle: $slug) {\n    availableForSale\n    descriptionHtml\n    handle\n    id\n    productType\n    publishedAt\n    title\n    vendor\n    images(first: 16) {\n      nodes {\n        altText\n        height\n        url\n        width\n      }\n    }\n    media(first: 16) {\n      nodes {\n        ... on Model3d {\n          alt\n          mediaContentType\n          previewImage {\n            altText\n            height\n            url\n            width\n            id\n          }\n          sources {\n            filesize\n            format\n            mimeType\n            url\n          }\n        }\n      }\n    }\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    seo {\n      description\n      title\n    }\n    variants(first: 16) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      nodes {\n        barcode\n        id\n        title\n        sku\n        availableForSale\n        currentlyNotInStock\n        quantityAvailable\n        requiresShipping\n        selectedOptions {\n          name\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        title\n      }\n    }\n    metafields(\n      identifiers: [{namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}]\n    ) {\n      namespace\n      key\n      type\n      value\n      description\n      id\n      reference {\n        ... on MetafieldReference {\n          ... on Page {\n            body\n            handle\n            onlineStoreUrl\n            title\n          }\n        }\n      }\n    }\n  }\n}':
    types.ProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Products {\n  shop {\n    name\n  }\n  products(first: 8) {\n    nodes {\n      availableForSale\n      description\n      featuredImage {\n        altText\n        height\n        url\n        width\n      }\n      handle\n      id\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      productType\n      publishedAt\n      title\n      vendor\n    }\n  }\n}"
): typeof documents["query Products {\n  shop {\n    name\n  }\n  products(first: 8) {\n    nodes {\n      availableForSale\n      description\n      featuredImage {\n        altText\n        height\n        url\n        width\n      }\n      handle\n      id\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      productType\n      publishedAt\n      title\n      vendor\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Product($slug: String!) {\n  product(handle: $slug) {\n    availableForSale\n    descriptionHtml\n    handle\n    id\n    productType\n    publishedAt\n    title\n    vendor\n    images(first: 16) {\n      nodes {\n        altText\n        height\n        url\n        width\n      }\n    }\n    media(first: 16) {\n      nodes {\n        ... on Model3d {\n          alt\n          mediaContentType\n          previewImage {\n            altText\n            height\n            url\n            width\n            id\n          }\n          sources {\n            filesize\n            format\n            mimeType\n            url\n          }\n        }\n      }\n    }\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    seo {\n      description\n      title\n    }\n    variants(first: 16) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      nodes {\n        barcode\n        id\n        title\n        sku\n        availableForSale\n        currentlyNotInStock\n        quantityAvailable\n        requiresShipping\n        selectedOptions {\n          name\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        title\n      }\n    }\n    metafields(\n      identifiers: [{namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}]\n    ) {\n      namespace\n      key\n      type\n      value\n      description\n      id\n      reference {\n        ... on MetafieldReference {\n          ... on Page {\n            body\n            handle\n            onlineStoreUrl\n            title\n          }\n        }\n      }\n    }\n  }\n}'
): typeof documents['query Product($slug: String!) {\n  product(handle: $slug) {\n    availableForSale\n    descriptionHtml\n    handle\n    id\n    productType\n    publishedAt\n    title\n    vendor\n    images(first: 16) {\n      nodes {\n        altText\n        height\n        url\n        width\n      }\n    }\n    media(first: 16) {\n      nodes {\n        ... on Model3d {\n          alt\n          mediaContentType\n          previewImage {\n            altText\n            height\n            url\n            width\n            id\n          }\n          sources {\n            filesize\n            format\n            mimeType\n            url\n          }\n        }\n      }\n    }\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    seo {\n      description\n      title\n    }\n    variants(first: 16) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      nodes {\n        barcode\n        id\n        title\n        sku\n        availableForSale\n        currentlyNotInStock\n        quantityAvailable\n        requiresShipping\n        selectedOptions {\n          name\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        title\n      }\n    }\n    metafields(\n      identifiers: [{namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}]\n    ) {\n      namespace\n      key\n      type\n      value\n      description\n      id\n      reference {\n        ... on MetafieldReference {\n          ... on Page {\n            body\n            handle\n            onlineStoreUrl\n            title\n          }\n        }\n      }\n    }\n  }\n}'];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 **/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
