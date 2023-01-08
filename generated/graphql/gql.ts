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
  "fragment CollectionsBasicInformation on CollectionConnection {\n  nodes {\n    handle\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    title\n    updatedAt\n  }\n}":
    types.CollectionsBasicInformationFragmentDoc,
  "fragment ImageBasicInformation on Image {\n  altText\n  height\n  url\n  width\n}":
    types.ImageBasicInformationFragmentDoc,
  "fragment MenuInformation on Menu {\n  handle\n  id\n  items {\n    ...MenuItemInformation\n  }\n  itemsCount\n  title\n}":
    types.MenuInformationFragmentDoc,
  "fragment MenuItemInformation on MenuItem {\n  id\n  items {\n    id\n    items {\n      id\n      resourceId\n      tags\n      title\n      type\n      url\n    }\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  resourceId\n  tags\n  title\n  type\n  url\n}":
    types.MenuItemInformationFragmentDoc,
  'fragment MenusInformation on QueryRoot {\n  clientServiceMenu: menu(handle: "client-service") {\n    ...MenuInformation\n  }\n  legalMenu: menu(handle: "legal") {\n    ...MenuInformation\n  }\n  mainMenu: menu(handle: "main-menu") {\n    ...MenuInformation\n  }\n}':
    types.MenusInformationFragmentDoc,
  "fragment ProductBasicInformation on Product {\n  availableForSale\n  description\n  featuredImage {\n    ...ImageBasicInformation\n  }\n  handle\n  id\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  productType\n  publishedAt\n  title\n  vendor\n}":
    types.ProductBasicInformationFragmentDoc,
  'fragment ProductVariantBasicInformation on ProductVariant {\n  availableForSale\n  currentlyNotInStock\n  id\n  metafields(\n    identifiers: [{namespace: "custom", key: "color"}, {namespace: "custom", key: "complementary_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "related_products"}]\n  ) {\n    key\n    namespace\n    type\n    value\n  }\n  price {\n    amount\n    currencyCode\n  }\n  quantityAvailable\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  sku\n  title\n}':
    types.ProductVariantBasicInformationFragmentDoc,
  "fragment QueryRootInformation on QueryRoot {\n  ...MenusInformation\n  collections(first: 192) {\n    ...CollectionsBasicInformation\n  }\n  shop {\n    ...ShopBasicInformation\n  }\n}":
    types.QueryRootInformationFragmentDoc,
  "fragment ShopBasicInformation on Shop {\n  name\n  description\n}":
    types.ShopBasicInformationFragmentDoc,
  "fragment ShopPolicyInformation on ShopPolicy {\n  body\n  handle\n  id\n  title\n  url\n}":
    types.ShopPolicyInformationFragmentDoc,
  "query About {\n  ...QueryRootInformation\n}": types.AboutDocument,
  "query Account {\n  ...QueryRootInformation\n}": types.AccountDocument,
  "query CampaignProducts {\n  ...QueryRootInformation\n  products(first: 16) {\n    nodes {\n      availableForSale\n      description\n      featuredImage {\n        ...ImageBasicInformation\n      }\n      handle\n      id\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      productType\n      publishedAt\n      title\n      vendor\n    }\n  }\n}":
    types.CampaignProductsDocument,
  "query Collection($slug: String!) {\n  ...QueryRootInformation\n  collection(handle: $slug) {\n    description\n    descriptionHtml\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    products(first: 64) {\n      nodes {\n        ...ProductBasicInformation\n        variants(first: 32) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n          }\n          nodes {\n            ...ProductVariantBasicInformation\n          }\n        }\n      }\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}":
    types.CollectionDocument,
  "query Collections {\n  ...QueryRootInformation\n}":
    types.CollectionsDocument,
  "query Consent {\n  ...QueryRootInformation\n  shop {\n    name\n  }\n}":
    types.ConsentDocument,
  'query Help {\n  ...QueryRootInformation\n  blog(handle: "help-center") {\n    articles(first: 64) {\n      nodes {\n        excerpt\n        excerptHtml\n        handle\n        id\n        image {\n          ...ImageBasicInformation\n        }\n        metafields(\n          identifiers: [{namespace: "custom", key: "category"}, {namespace: "custom", key: "featured"}]\n        ) {\n          description\n          key\n          namespace\n          type\n          value\n        }\n        publishedAt\n        seo {\n          description\n          title\n        }\n        tags\n        title\n      }\n    }\n  }\n}':
    types.HelpDocument,
  "query Home {\n  ...QueryRootInformation\n}": types.HomeDocument,
  'query Page($slug: String!) {\n  ...QueryRootInformation\n  page(handle: $slug) {\n    body\n    bodySummary\n    handle\n    id\n    metafields(identifiers: [{namespace: "custom", key: "media"}]) {\n      description\n      key\n      namespace\n      references(first: 32) {\n        nodes {\n          ... on MetafieldReference {\n            ... on MediaImage {\n              mediaContentType\n              previewImage {\n                ... on Image {\n                  altText\n                  height\n                  url\n                  width\n                }\n              }\n            }\n          }\n        }\n      }\n      type\n      value\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}':
    types.PageDocument,
  "query PrivacyPolicy {\n  ...QueryRootInformation\n  shop {\n    privacyPolicy {\n      ...ShopPolicyInformation\n    }\n    refundPolicy {\n      ...ShopPolicyInformation\n    }\n    shippingPolicy {\n      ...ShopPolicyInformation\n    }\n    termsOfService {\n      ...ShopPolicyInformation\n    }\n  }\n}":
    types.PrivacyPolicyDocument,
  'query Product($slug: String!) {\n  ...QueryRootInformation\n  product(handle: $slug) {\n    availableForSale\n    descriptionHtml\n    handle\n    id\n    productType\n    publishedAt\n    title\n    vendor\n    images(first: 32) {\n      nodes {\n        ... on Image {\n          ...ImageBasicInformation\n        }\n      }\n    }\n    media(first: 32) {\n      nodes {\n        ... on Model3d {\n          alt\n          mediaContentType\n          previewImage {\n            ... on Image {\n              ...ImageBasicInformation\n            }\n          }\n          sources {\n            filesize\n            format\n            mimeType\n            url\n          }\n        }\n      }\n    }\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    seo {\n      description\n      title\n    }\n    variants(first: 32) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      nodes {\n        availableForSale\n        barcode\n        compareAtPrice {\n          amount\n          currencyCode\n        }\n        currentlyNotInStock\n        id\n        metafields(\n          identifiers: [{namespace: "custom", key: "additional_media"}, {namespace: "custom", key: "color"}, {namespace: "custom", key: "complementary_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "material_image"}, {namespace: "custom", key: "related_products"}]\n        ) {\n          description\n          key\n          namespace\n          reference {\n            ... on MetafieldReference {\n              ... on Page {\n                body\n                handle\n                onlineStoreUrl\n                title\n              }\n              ... on MediaImage {\n                mediaContentType\n                previewImage {\n                  ... on Image {\n                    ...ImageBasicInformation\n                  }\n                }\n              }\n            }\n          }\n          references(first: 32) {\n            nodes {\n              ... on MetafieldReference {\n                ... on MediaImage {\n                  mediaContentType\n                  previewImage {\n                    ... on Image {\n                      ...ImageBasicInformation\n                    }\n                  }\n                }\n                ... on Product {\n                  ...ProductBasicInformation\n                }\n                ... on Collection {\n                  title\n                  products {\n                    nodes {\n                      ...ProductBasicInformation\n                    }\n                  }\n                }\n              }\n            }\n          }\n          type\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        quantityAvailable\n        requiresShipping\n        selectedOptions {\n          name\n          value\n        }\n        sku\n        title\n      }\n    }\n    metafields(\n      identifiers: [{namespace: "shopify--discovery--product_recommendation", key: "complementary_products"}, {namespace: "shopify--discovery--product_recommendation", key: "related_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}]\n    ) {\n      namespace\n      key\n      type\n      value\n      description\n      id\n      reference {\n        ... on MetafieldReference {\n          ... on Page {\n            body\n            handle\n            onlineStoreUrl\n            title\n          }\n        }\n      }\n      references(first: 32) {\n        nodes {\n          ... on MetafieldReference {\n            ... on Page {\n              body\n              handle\n              onlineStoreUrl\n              title\n            }\n          }\n        }\n      }\n    }\n  }\n}':
    types.ProductDocument,
  "query Products($query: String) {\n  ...QueryRootInformation\n  products(first: 64, query: $query) {\n    nodes {\n      ...ProductBasicInformation\n      variants(first: 32) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        nodes {\n          ...ProductVariantBasicInformation\n        }\n      }\n    }\n  }\n}":
    types.ProductsDocument,
  "query Types {\n  ...QueryRootInformation\n  productTypes(first: 192) {\n    edges {\n      node\n    }\n  }\n}":
    types.TypesDocument,
};

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

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment CollectionsBasicInformation on CollectionConnection {\n  nodes {\n    handle\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    title\n    updatedAt\n  }\n}"
): typeof documents["fragment CollectionsBasicInformation on CollectionConnection {\n  nodes {\n    handle\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    title\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ImageBasicInformation on Image {\n  altText\n  height\n  url\n  width\n}"
): typeof documents["fragment ImageBasicInformation on Image {\n  altText\n  height\n  url\n  width\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment MenuInformation on Menu {\n  handle\n  id\n  items {\n    ...MenuItemInformation\n  }\n  itemsCount\n  title\n}"
): typeof documents["fragment MenuInformation on Menu {\n  handle\n  id\n  items {\n    ...MenuItemInformation\n  }\n  itemsCount\n  title\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment MenuItemInformation on MenuItem {\n  id\n  items {\n    id\n    items {\n      id\n      resourceId\n      tags\n      title\n      type\n      url\n    }\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  resourceId\n  tags\n  title\n  type\n  url\n}"
): typeof documents["fragment MenuItemInformation on MenuItem {\n  id\n  items {\n    id\n    items {\n      id\n      resourceId\n      tags\n      title\n      type\n      url\n    }\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  resourceId\n  tags\n  title\n  type\n  url\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment MenusInformation on QueryRoot {\n  clientServiceMenu: menu(handle: "client-service") {\n    ...MenuInformation\n  }\n  legalMenu: menu(handle: "legal") {\n    ...MenuInformation\n  }\n  mainMenu: menu(handle: "main-menu") {\n    ...MenuInformation\n  }\n}'
): typeof documents['fragment MenusInformation on QueryRoot {\n  clientServiceMenu: menu(handle: "client-service") {\n    ...MenuInformation\n  }\n  legalMenu: menu(handle: "legal") {\n    ...MenuInformation\n  }\n  mainMenu: menu(handle: "main-menu") {\n    ...MenuInformation\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ProductBasicInformation on Product {\n  availableForSale\n  description\n  featuredImage {\n    ...ImageBasicInformation\n  }\n  handle\n  id\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  productType\n  publishedAt\n  title\n  vendor\n}"
): typeof documents["fragment ProductBasicInformation on Product {\n  availableForSale\n  description\n  featuredImage {\n    ...ImageBasicInformation\n  }\n  handle\n  id\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  productType\n  publishedAt\n  title\n  vendor\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ProductVariantBasicInformation on ProductVariant {\n  availableForSale\n  currentlyNotInStock\n  id\n  metafields(\n    identifiers: [{namespace: "custom", key: "color"}, {namespace: "custom", key: "complementary_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "related_products"}]\n  ) {\n    key\n    namespace\n    type\n    value\n  }\n  price {\n    amount\n    currencyCode\n  }\n  quantityAvailable\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  sku\n  title\n}'
): typeof documents['fragment ProductVariantBasicInformation on ProductVariant {\n  availableForSale\n  currentlyNotInStock\n  id\n  metafields(\n    identifiers: [{namespace: "custom", key: "color"}, {namespace: "custom", key: "complementary_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "related_products"}]\n  ) {\n    key\n    namespace\n    type\n    value\n  }\n  price {\n    amount\n    currencyCode\n  }\n  quantityAvailable\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  sku\n  title\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment QueryRootInformation on QueryRoot {\n  ...MenusInformation\n  collections(first: 192) {\n    ...CollectionsBasicInformation\n  }\n  shop {\n    ...ShopBasicInformation\n  }\n}"
): typeof documents["fragment QueryRootInformation on QueryRoot {\n  ...MenusInformation\n  collections(first: 192) {\n    ...CollectionsBasicInformation\n  }\n  shop {\n    ...ShopBasicInformation\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ShopBasicInformation on Shop {\n  name\n  description\n}"
): typeof documents["fragment ShopBasicInformation on Shop {\n  name\n  description\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ShopPolicyInformation on ShopPolicy {\n  body\n  handle\n  id\n  title\n  url\n}"
): typeof documents["fragment ShopPolicyInformation on ShopPolicy {\n  body\n  handle\n  id\n  title\n  url\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query About {\n  ...QueryRootInformation\n}"
): typeof documents["query About {\n  ...QueryRootInformation\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Account {\n  ...QueryRootInformation\n}"
): typeof documents["query Account {\n  ...QueryRootInformation\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query CampaignProducts {\n  ...QueryRootInformation\n  products(first: 16) {\n    nodes {\n      availableForSale\n      description\n      featuredImage {\n        ...ImageBasicInformation\n      }\n      handle\n      id\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      productType\n      publishedAt\n      title\n      vendor\n    }\n  }\n}"
): typeof documents["query CampaignProducts {\n  ...QueryRootInformation\n  products(first: 16) {\n    nodes {\n      availableForSale\n      description\n      featuredImage {\n        ...ImageBasicInformation\n      }\n      handle\n      id\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      productType\n      publishedAt\n      title\n      vendor\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Collection($slug: String!) {\n  ...QueryRootInformation\n  collection(handle: $slug) {\n    description\n    descriptionHtml\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    products(first: 64) {\n      nodes {\n        ...ProductBasicInformation\n        variants(first: 32) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n          }\n          nodes {\n            ...ProductVariantBasicInformation\n          }\n        }\n      }\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}"
): typeof documents["query Collection($slug: String!) {\n  ...QueryRootInformation\n  collection(handle: $slug) {\n    description\n    descriptionHtml\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    products(first: 64) {\n      nodes {\n        ...ProductBasicInformation\n        variants(first: 32) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n          }\n          nodes {\n            ...ProductVariantBasicInformation\n          }\n        }\n      }\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Collections {\n  ...QueryRootInformation\n}"
): typeof documents["query Collections {\n  ...QueryRootInformation\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Consent {\n  ...QueryRootInformation\n  shop {\n    name\n  }\n}"
): typeof documents["query Consent {\n  ...QueryRootInformation\n  shop {\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Help {\n  ...QueryRootInformation\n  blog(handle: "help-center") {\n    articles(first: 64) {\n      nodes {\n        excerpt\n        excerptHtml\n        handle\n        id\n        image {\n          ...ImageBasicInformation\n        }\n        metafields(\n          identifiers: [{namespace: "custom", key: "category"}, {namespace: "custom", key: "featured"}]\n        ) {\n          description\n          key\n          namespace\n          type\n          value\n        }\n        publishedAt\n        seo {\n          description\n          title\n        }\n        tags\n        title\n      }\n    }\n  }\n}'
): typeof documents['query Help {\n  ...QueryRootInformation\n  blog(handle: "help-center") {\n    articles(first: 64) {\n      nodes {\n        excerpt\n        excerptHtml\n        handle\n        id\n        image {\n          ...ImageBasicInformation\n        }\n        metafields(\n          identifiers: [{namespace: "custom", key: "category"}, {namespace: "custom", key: "featured"}]\n        ) {\n          description\n          key\n          namespace\n          type\n          value\n        }\n        publishedAt\n        seo {\n          description\n          title\n        }\n        tags\n        title\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Home {\n  ...QueryRootInformation\n}"
): typeof documents["query Home {\n  ...QueryRootInformation\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Page($slug: String!) {\n  ...QueryRootInformation\n  page(handle: $slug) {\n    body\n    bodySummary\n    handle\n    id\n    metafields(identifiers: [{namespace: "custom", key: "media"}]) {\n      description\n      key\n      namespace\n      references(first: 32) {\n        nodes {\n          ... on MetafieldReference {\n            ... on MediaImage {\n              mediaContentType\n              previewImage {\n                ... on Image {\n                  altText\n                  height\n                  url\n                  width\n                }\n              }\n            }\n          }\n        }\n      }\n      type\n      value\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}'
): typeof documents['query Page($slug: String!) {\n  ...QueryRootInformation\n  page(handle: $slug) {\n    body\n    bodySummary\n    handle\n    id\n    metafields(identifiers: [{namespace: "custom", key: "media"}]) {\n      description\n      key\n      namespace\n      references(first: 32) {\n        nodes {\n          ... on MetafieldReference {\n            ... on MediaImage {\n              mediaContentType\n              previewImage {\n                ... on Image {\n                  altText\n                  height\n                  url\n                  width\n                }\n              }\n            }\n          }\n        }\n      }\n      type\n      value\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query PrivacyPolicy {\n  ...QueryRootInformation\n  shop {\n    privacyPolicy {\n      ...ShopPolicyInformation\n    }\n    refundPolicy {\n      ...ShopPolicyInformation\n    }\n    shippingPolicy {\n      ...ShopPolicyInformation\n    }\n    termsOfService {\n      ...ShopPolicyInformation\n    }\n  }\n}"
): typeof documents["query PrivacyPolicy {\n  ...QueryRootInformation\n  shop {\n    privacyPolicy {\n      ...ShopPolicyInformation\n    }\n    refundPolicy {\n      ...ShopPolicyInformation\n    }\n    shippingPolicy {\n      ...ShopPolicyInformation\n    }\n    termsOfService {\n      ...ShopPolicyInformation\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Product($slug: String!) {\n  ...QueryRootInformation\n  product(handle: $slug) {\n    availableForSale\n    descriptionHtml\n    handle\n    id\n    productType\n    publishedAt\n    title\n    vendor\n    images(first: 32) {\n      nodes {\n        ... on Image {\n          ...ImageBasicInformation\n        }\n      }\n    }\n    media(first: 32) {\n      nodes {\n        ... on Model3d {\n          alt\n          mediaContentType\n          previewImage {\n            ... on Image {\n              ...ImageBasicInformation\n            }\n          }\n          sources {\n            filesize\n            format\n            mimeType\n            url\n          }\n        }\n      }\n    }\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    seo {\n      description\n      title\n    }\n    variants(first: 32) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      nodes {\n        availableForSale\n        barcode\n        compareAtPrice {\n          amount\n          currencyCode\n        }\n        currentlyNotInStock\n        id\n        metafields(\n          identifiers: [{namespace: "custom", key: "additional_media"}, {namespace: "custom", key: "color"}, {namespace: "custom", key: "complementary_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "material_image"}, {namespace: "custom", key: "related_products"}]\n        ) {\n          description\n          key\n          namespace\n          reference {\n            ... on MetafieldReference {\n              ... on Page {\n                body\n                handle\n                onlineStoreUrl\n                title\n              }\n              ... on MediaImage {\n                mediaContentType\n                previewImage {\n                  ... on Image {\n                    ...ImageBasicInformation\n                  }\n                }\n              }\n            }\n          }\n          references(first: 32) {\n            nodes {\n              ... on MetafieldReference {\n                ... on MediaImage {\n                  mediaContentType\n                  previewImage {\n                    ... on Image {\n                      ...ImageBasicInformation\n                    }\n                  }\n                }\n                ... on Product {\n                  ...ProductBasicInformation\n                }\n                ... on Collection {\n                  title\n                  products {\n                    nodes {\n                      ...ProductBasicInformation\n                    }\n                  }\n                }\n              }\n            }\n          }\n          type\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        quantityAvailable\n        requiresShipping\n        selectedOptions {\n          name\n          value\n        }\n        sku\n        title\n      }\n    }\n    metafields(\n      identifiers: [{namespace: "shopify--discovery--product_recommendation", key: "complementary_products"}, {namespace: "shopify--discovery--product_recommendation", key: "related_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}]\n    ) {\n      namespace\n      key\n      type\n      value\n      description\n      id\n      reference {\n        ... on MetafieldReference {\n          ... on Page {\n            body\n            handle\n            onlineStoreUrl\n            title\n          }\n        }\n      }\n      references(first: 32) {\n        nodes {\n          ... on MetafieldReference {\n            ... on Page {\n              body\n              handle\n              onlineStoreUrl\n              title\n            }\n          }\n        }\n      }\n    }\n  }\n}'
): typeof documents['query Product($slug: String!) {\n  ...QueryRootInformation\n  product(handle: $slug) {\n    availableForSale\n    descriptionHtml\n    handle\n    id\n    productType\n    publishedAt\n    title\n    vendor\n    images(first: 32) {\n      nodes {\n        ... on Image {\n          ...ImageBasicInformation\n        }\n      }\n    }\n    media(first: 32) {\n      nodes {\n        ... on Model3d {\n          alt\n          mediaContentType\n          previewImage {\n            ... on Image {\n              ...ImageBasicInformation\n            }\n          }\n          sources {\n            filesize\n            format\n            mimeType\n            url\n          }\n        }\n      }\n    }\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    seo {\n      description\n      title\n    }\n    variants(first: 32) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      nodes {\n        availableForSale\n        barcode\n        compareAtPrice {\n          amount\n          currencyCode\n        }\n        currentlyNotInStock\n        id\n        metafields(\n          identifiers: [{namespace: "custom", key: "additional_media"}, {namespace: "custom", key: "color"}, {namespace: "custom", key: "complementary_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "material_image"}, {namespace: "custom", key: "related_products"}]\n        ) {\n          description\n          key\n          namespace\n          reference {\n            ... on MetafieldReference {\n              ... on Page {\n                body\n                handle\n                onlineStoreUrl\n                title\n              }\n              ... on MediaImage {\n                mediaContentType\n                previewImage {\n                  ... on Image {\n                    ...ImageBasicInformation\n                  }\n                }\n              }\n            }\n          }\n          references(first: 32) {\n            nodes {\n              ... on MetafieldReference {\n                ... on MediaImage {\n                  mediaContentType\n                  previewImage {\n                    ... on Image {\n                      ...ImageBasicInformation\n                    }\n                  }\n                }\n                ... on Product {\n                  ...ProductBasicInformation\n                }\n                ... on Collection {\n                  title\n                  products {\n                    nodes {\n                      ...ProductBasicInformation\n                    }\n                  }\n                }\n              }\n            }\n          }\n          type\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        quantityAvailable\n        requiresShipping\n        selectedOptions {\n          name\n          value\n        }\n        sku\n        title\n      }\n    }\n    metafields(\n      identifiers: [{namespace: "shopify--discovery--product_recommendation", key: "complementary_products"}, {namespace: "shopify--discovery--product_recommendation", key: "related_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}]\n    ) {\n      namespace\n      key\n      type\n      value\n      description\n      id\n      reference {\n        ... on MetafieldReference {\n          ... on Page {\n            body\n            handle\n            onlineStoreUrl\n            title\n          }\n        }\n      }\n      references(first: 32) {\n        nodes {\n          ... on MetafieldReference {\n            ... on Page {\n              body\n              handle\n              onlineStoreUrl\n              title\n            }\n          }\n        }\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Products($query: String) {\n  ...QueryRootInformation\n  products(first: 64, query: $query) {\n    nodes {\n      ...ProductBasicInformation\n      variants(first: 32) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        nodes {\n          ...ProductVariantBasicInformation\n        }\n      }\n    }\n  }\n}"
): typeof documents["query Products($query: String) {\n  ...QueryRootInformation\n  products(first: 64, query: $query) {\n    nodes {\n      ...ProductBasicInformation\n      variants(first: 32) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        nodes {\n          ...ProductVariantBasicInformation\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Types {\n  ...QueryRootInformation\n  productTypes(first: 192) {\n    edges {\n      node\n    }\n  }\n}"
): typeof documents["query Types {\n  ...QueryRootInformation\n  productTypes(first: 192) {\n    edges {\n      node\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
