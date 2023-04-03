/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

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
  'fragment CollectionBasicInformation on Collection {\n  description\n  handle\n  id\n  image {\n    ...ImageBasicInformation\n  }\n  metafields(\n    identifiers: [{namespace: "custom", key: "is_brand"}, {namespace: "my_fields", key: "collection_box_shadow_colour"}, {namespace: "my_fields", key: "collection_tab_colour"}]\n  ) {\n    description\n    id\n    key\n    namespace\n    type\n    value\n  }\n  title\n}':
    types.CollectionBasicInformationFragmentDoc,
  'fragment CollectionsBasicInformation on CollectionConnection {\n  nodes {\n    handle\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    title\n    updatedAt\n  }\n}':
    types.CollectionsBasicInformationFragmentDoc,
  'fragment ImageBasicInformation on Image {\n  altText\n  height\n  url\n  width\n}':
    types.ImageBasicInformationFragmentDoc,
  'fragment MenuInformation on Menu {\n  handle\n  id\n  items {\n    ...MenuItemInformation\n  }\n  itemsCount\n  title\n}':
    types.MenuInformationFragmentDoc,
  'fragment MenuItemInformation on MenuItem {\n  id\n  items {\n    id\n    items {\n      id\n      resourceId\n      tags\n      title\n      type\n      url\n    }\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  resourceId\n  tags\n  title\n  type\n  url\n}':
    types.MenuItemInformationFragmentDoc,
  'fragment MenusInformation on QueryRoot {\n  clientServiceMenu: menu(handle: "client-service") {\n    ...MenuInformation\n  }\n  legalMenu: menu(handle: "legal") {\n    ...MenuInformation\n  }\n  mainMenu: menu(handle: "main-menu") {\n    ...MenuInformation\n  }\n}':
    types.MenusInformationFragmentDoc,
  'fragment ProductBasicInformation on Product {\n  availableForSale\n  description\n  featuredImage {\n    ...ImageBasicInformation\n  }\n  handle\n  id\n  metafields(\n    identifiers: [{namespace: "custom_fields", key: "style_trick_author"}, {namespace: "custom_fields", key: "style_trick"}, {namespace: "custom_fields", key: "url"}]\n  ) {\n    namespace\n    key\n    type\n    value\n    description\n    id\n    reference {\n      ... on MetafieldReference {\n        ... on Page {\n          body\n          handle\n          onlineStoreUrl\n          title\n        }\n      }\n    }\n  }\n  onlineStoreUrl\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  productType\n  publishedAt\n  tags\n  title\n  vendor\n}':
    types.ProductBasicInformationFragmentDoc,
  'fragment ProductVariantBasicInformation on ProductVariant {\n  availableForSale\n  currentlyNotInStock\n  id\n  metafields(\n    identifiers: [{namespace: "custom", key: "color"}, {namespace: "custom", key: "complementary_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "related_products"}]\n  ) {\n    key\n    namespace\n    type\n    value\n  }\n  price {\n    amount\n    currencyCode\n  }\n  quantityAvailable\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  sku\n  title\n}':
    types.ProductVariantBasicInformationFragmentDoc,
  'fragment QueryRootInformation on QueryRoot {\n  ...MenusInformation\n  collections(first: 192) {\n    ...CollectionsBasicInformation\n  }\n  shop {\n    ...ShopBasicInformation\n  }\n}':
    types.QueryRootInformationFragmentDoc,
  'fragment ShopBasicInformation on Shop {\n  name\n  description\n}':
    types.ShopBasicInformationFragmentDoc,
  'fragment ShopPolicyInformation on ShopPolicy {\n  body\n  handle\n  id\n  title\n  url\n}':
    types.ShopPolicyInformationFragmentDoc,
  'query Account($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n}':
    types.AccountDocument,
  'query CollectionByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  collection(handle: $handle) {\n    description\n    descriptionHtml\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}':
    types.CollectionByHandleDocument,
  'query CollectionProductsByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  collection(handle: $handle) {\n    description\n    descriptionHtml\n    id\n    products(first: 192) {\n      nodes {\n        ...ProductBasicInformation\n      }\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}':
    types.CollectionProductsByHandleDocument,
  'query Collections($country: CountryCode!, $first: Int!) @inContext(country: $country) {\n  collections(first: $first) {\n    edges {\n      node {\n        ...CollectionBasicInformation\n      }\n    }\n    pageInfo {\n      endCursor\n    }\n  }\n}':
    types.CollectionsDocument,
  'query CollectionsPaths($country: CountryCode!, $first: Int = 250) @inContext(country: $country) {\n  collections(first: $first) {\n    nodes {\n      handle\n    }\n  }\n}':
    types.CollectionsPathsDocument,
  'query Consent($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n  shop {\n    name\n  }\n}':
    types.ConsentDocument,
  'query Home($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n}':
    types.HomeDocument,
  'query PageByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  ...QueryRootInformation\n  page(handle: $handle) {\n    body\n    bodySummary\n    handle\n    id\n    metafields(identifiers: [{namespace: "custom", key: "media"}]) {\n      description\n      key\n      namespace\n      references(first: 32) {\n        nodes {\n          ... on MetafieldReference {\n            ... on MediaImage {\n              mediaContentType\n              previewImage {\n                ... on Image {\n                  altText\n                  height\n                  url\n                  width\n                }\n              }\n            }\n          }\n        }\n      }\n      type\n      value\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}':
    types.PageByHandleDocument,
  'query Policies($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n  shop {\n    privacyPolicy {\n      ...ShopPolicyInformation\n    }\n    refundPolicy {\n      ...ShopPolicyInformation\n    }\n    shippingPolicy {\n      ...ShopPolicyInformation\n    }\n    termsOfService {\n      ...ShopPolicyInformation\n    }\n  }\n}':
    types.PoliciesDocument,
  'query ProductByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  product(handle: $handle) {\n    collections(first: 10) {\n      nodes {\n        handle\n        title\n        metafields(\n          identifiers: [{namespace: "custom", key: "is_brand"}, {namespace: "my_fields", key: "collection_box_shadow_colour"}, {namespace: "my_fields", key: "collection_tab_colour"}]\n        ) {\n          description\n          id\n          key\n          namespace\n          type\n          value\n        }\n      }\n    }\n    description\n    descriptionHtml\n    handle\n    id\n    productType\n    publishedAt\n    title\n    vendor\n    images(first: 16) {\n      nodes {\n        ...ImageBasicInformation\n      }\n    }\n    media(first: 16) {\n      nodes {\n        ... on Model3d {\n          alt\n          mediaContentType\n          previewImage {\n            ...ImageBasicInformation\n          }\n          sources {\n            filesize\n            format\n            mimeType\n            url\n          }\n        }\n      }\n    }\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    seo {\n      description\n      title\n    }\n    variants(first: 16) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      nodes {\n        barcode\n        id\n        title\n        sku\n        availableForSale\n        currentlyNotInStock\n        quantityAvailable\n        requiresShipping\n        selectedOptions {\n          name\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        title\n      }\n    }\n    metafields(\n      identifiers: [{namespace: "custom_fields", key: "style_trick_author"}, {namespace: "custom_fields", key: "style_trick"}, {namespace: "custom_fields", key: "url"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}, {namespace: "my_fields", key: "collection_url"}, {namespace: "my_fields", key: "filter_category"}, {namespace: "my_fields", key: "merchant"}, {namespace: "my_fields", key: "primary_category"}, {namespace: "my_fields", key: "product_details"}, {namespace: "my_fields", key: "product_sizing"}]\n    ) {\n      namespace\n      key\n      type\n      value\n      description\n      id\n      reference {\n        ... on MetafieldReference {\n          ... on Page {\n            body\n            handle\n            onlineStoreUrl\n            title\n          }\n        }\n      }\n    }\n  }\n}':
    types.ProductByHandleDocument,
  'query Products($country: CountryCode!) @inContext(country: $country) {\n  shop {\n    name\n  }\n  products(first: 8) {\n    nodes {\n      ...ProductBasicInformation\n    }\n  }\n}':
    types.ProductsDocument,
  'query ProductsByNodeId($country: CountryCode!, $ids: [ID!]!) @inContext(country: $country) {\n  nodes(ids: $ids) {\n    ... on ProductVariant {\n      product {\n        availableForSale\n        description\n        handle\n        id\n        featuredImage {\n          ...ImageBasicInformation\n        }\n        metafields(\n          identifiers: [{namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}, {namespace: "my_fields", key: "collection_url"}, {namespace: "my_fields", key: "filter_category"}, {namespace: "my_fields", key: "merchant"}, {namespace: "my_fields", key: "primary_category"}, {namespace: "my_fields", key: "product_details"}, {namespace: "my_fields", key: "product_sizing"}]\n        ) {\n          namespace\n          key\n          type\n          value\n          description\n          id\n          reference {\n            ... on MetafieldReference {\n              ... on Page {\n                body\n                handle\n                onlineStoreUrl\n                title\n              }\n            }\n          }\n        }\n        onlineStoreUrl\n        priceRange {\n          maxVariantPrice {\n            amount\n            currencyCode\n          }\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        productType\n        publishedAt\n        tags\n        title\n        vendor\n      }\n    }\n  }\n}':
    types.ProductsByNodeIdDocument,
  'query ProductsPaths($country: CountryCode!) @inContext(country: $country) {\n  products(first: 250) {\n    nodes {\n      handle\n    }\n  }\n}':
    types.ProductsPathsDocument,
  'query Vendors($first: Int = 250, $cursor: String) {\n  products(first: $first, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        vendor\n      }\n      cursor\n    }\n  }\n}':
    types.VendorsDocument,
}

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
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment CollectionBasicInformation on Collection {\n  description\n  handle\n  id\n  image {\n    ...ImageBasicInformation\n  }\n  metafields(\n    identifiers: [{namespace: "custom", key: "is_brand"}, {namespace: "my_fields", key: "collection_box_shadow_colour"}, {namespace: "my_fields", key: "collection_tab_colour"}]\n  ) {\n    description\n    id\n    key\n    namespace\n    type\n    value\n  }\n  title\n}'
): (typeof documents)['fragment CollectionBasicInformation on Collection {\n  description\n  handle\n  id\n  image {\n    ...ImageBasicInformation\n  }\n  metafields(\n    identifiers: [{namespace: "custom", key: "is_brand"}, {namespace: "my_fields", key: "collection_box_shadow_colour"}, {namespace: "my_fields", key: "collection_tab_colour"}]\n  ) {\n    description\n    id\n    key\n    namespace\n    type\n    value\n  }\n  title\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment CollectionsBasicInformation on CollectionConnection {\n  nodes {\n    handle\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    title\n    updatedAt\n  }\n}'
): (typeof documents)['fragment CollectionsBasicInformation on CollectionConnection {\n  nodes {\n    handle\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    title\n    updatedAt\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ImageBasicInformation on Image {\n  altText\n  height\n  url\n  width\n}'
): (typeof documents)['fragment ImageBasicInformation on Image {\n  altText\n  height\n  url\n  width\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment MenuInformation on Menu {\n  handle\n  id\n  items {\n    ...MenuItemInformation\n  }\n  itemsCount\n  title\n}'
): (typeof documents)['fragment MenuInformation on Menu {\n  handle\n  id\n  items {\n    ...MenuItemInformation\n  }\n  itemsCount\n  title\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment MenuItemInformation on MenuItem {\n  id\n  items {\n    id\n    items {\n      id\n      resourceId\n      tags\n      title\n      type\n      url\n    }\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  resourceId\n  tags\n  title\n  type\n  url\n}'
): (typeof documents)['fragment MenuItemInformation on MenuItem {\n  id\n  items {\n    id\n    items {\n      id\n      resourceId\n      tags\n      title\n      type\n      url\n    }\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  resourceId\n  tags\n  title\n  type\n  url\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment MenusInformation on QueryRoot {\n  clientServiceMenu: menu(handle: "client-service") {\n    ...MenuInformation\n  }\n  legalMenu: menu(handle: "legal") {\n    ...MenuInformation\n  }\n  mainMenu: menu(handle: "main-menu") {\n    ...MenuInformation\n  }\n}'
): (typeof documents)['fragment MenusInformation on QueryRoot {\n  clientServiceMenu: menu(handle: "client-service") {\n    ...MenuInformation\n  }\n  legalMenu: menu(handle: "legal") {\n    ...MenuInformation\n  }\n  mainMenu: menu(handle: "main-menu") {\n    ...MenuInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ProductBasicInformation on Product {\n  availableForSale\n  description\n  featuredImage {\n    ...ImageBasicInformation\n  }\n  handle\n  id\n  metafields(\n    identifiers: [{namespace: "custom_fields", key: "style_trick_author"}, {namespace: "custom_fields", key: "style_trick"}, {namespace: "custom_fields", key: "url"}]\n  ) {\n    namespace\n    key\n    type\n    value\n    description\n    id\n    reference {\n      ... on MetafieldReference {\n        ... on Page {\n          body\n          handle\n          onlineStoreUrl\n          title\n        }\n      }\n    }\n  }\n  onlineStoreUrl\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  productType\n  publishedAt\n  tags\n  title\n  vendor\n}'
): (typeof documents)['fragment ProductBasicInformation on Product {\n  availableForSale\n  description\n  featuredImage {\n    ...ImageBasicInformation\n  }\n  handle\n  id\n  metafields(\n    identifiers: [{namespace: "custom_fields", key: "style_trick_author"}, {namespace: "custom_fields", key: "style_trick"}, {namespace: "custom_fields", key: "url"}]\n  ) {\n    namespace\n    key\n    type\n    value\n    description\n    id\n    reference {\n      ... on MetafieldReference {\n        ... on Page {\n          body\n          handle\n          onlineStoreUrl\n          title\n        }\n      }\n    }\n  }\n  onlineStoreUrl\n  priceRange {\n    maxVariantPrice {\n      amount\n      currencyCode\n    }\n    minVariantPrice {\n      amount\n      currencyCode\n    }\n  }\n  productType\n  publishedAt\n  tags\n  title\n  vendor\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ProductVariantBasicInformation on ProductVariant {\n  availableForSale\n  currentlyNotInStock\n  id\n  metafields(\n    identifiers: [{namespace: "custom", key: "color"}, {namespace: "custom", key: "complementary_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "related_products"}]\n  ) {\n    key\n    namespace\n    type\n    value\n  }\n  price {\n    amount\n    currencyCode\n  }\n  quantityAvailable\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  sku\n  title\n}'
): (typeof documents)['fragment ProductVariantBasicInformation on ProductVariant {\n  availableForSale\n  currentlyNotInStock\n  id\n  metafields(\n    identifiers: [{namespace: "custom", key: "color"}, {namespace: "custom", key: "complementary_products"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "related_products"}]\n  ) {\n    key\n    namespace\n    type\n    value\n  }\n  price {\n    amount\n    currencyCode\n  }\n  quantityAvailable\n  requiresShipping\n  selectedOptions {\n    name\n    value\n  }\n  sku\n  title\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment QueryRootInformation on QueryRoot {\n  ...MenusInformation\n  collections(first: 192) {\n    ...CollectionsBasicInformation\n  }\n  shop {\n    ...ShopBasicInformation\n  }\n}'
): (typeof documents)['fragment QueryRootInformation on QueryRoot {\n  ...MenusInformation\n  collections(first: 192) {\n    ...CollectionsBasicInformation\n  }\n  shop {\n    ...ShopBasicInformation\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ShopBasicInformation on Shop {\n  name\n  description\n}'
): (typeof documents)['fragment ShopBasicInformation on Shop {\n  name\n  description\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ShopPolicyInformation on ShopPolicy {\n  body\n  handle\n  id\n  title\n  url\n}'
): (typeof documents)['fragment ShopPolicyInformation on ShopPolicy {\n  body\n  handle\n  id\n  title\n  url\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Account($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n}'
): (typeof documents)['query Account($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query CollectionByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  collection(handle: $handle) {\n    description\n    descriptionHtml\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}'
): (typeof documents)['query CollectionByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  collection(handle: $handle) {\n    description\n    descriptionHtml\n    id\n    image {\n      ...ImageBasicInformation\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query CollectionProductsByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  collection(handle: $handle) {\n    description\n    descriptionHtml\n    id\n    products(first: 192) {\n      nodes {\n        ...ProductBasicInformation\n      }\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}'
): (typeof documents)['query CollectionProductsByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  collection(handle: $handle) {\n    description\n    descriptionHtml\n    id\n    products(first: 192) {\n      nodes {\n        ...ProductBasicInformation\n      }\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Collections($country: CountryCode!, $first: Int!) @inContext(country: $country) {\n  collections(first: $first) {\n    edges {\n      node {\n        ...CollectionBasicInformation\n      }\n    }\n    pageInfo {\n      endCursor\n    }\n  }\n}'
): (typeof documents)['query Collections($country: CountryCode!, $first: Int!) @inContext(country: $country) {\n  collections(first: $first) {\n    edges {\n      node {\n        ...CollectionBasicInformation\n      }\n    }\n    pageInfo {\n      endCursor\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query CollectionsPaths($country: CountryCode!, $first: Int = 250) @inContext(country: $country) {\n  collections(first: $first) {\n    nodes {\n      handle\n    }\n  }\n}'
): (typeof documents)['query CollectionsPaths($country: CountryCode!, $first: Int = 250) @inContext(country: $country) {\n  collections(first: $first) {\n    nodes {\n      handle\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Consent($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n  shop {\n    name\n  }\n}'
): (typeof documents)['query Consent($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n  shop {\n    name\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Home($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n}'
): (typeof documents)['query Home($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query PageByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  ...QueryRootInformation\n  page(handle: $handle) {\n    body\n    bodySummary\n    handle\n    id\n    metafields(identifiers: [{namespace: "custom", key: "media"}]) {\n      description\n      key\n      namespace\n      references(first: 32) {\n        nodes {\n          ... on MetafieldReference {\n            ... on MediaImage {\n              mediaContentType\n              previewImage {\n                ... on Image {\n                  altText\n                  height\n                  url\n                  width\n                }\n              }\n            }\n          }\n        }\n      }\n      type\n      value\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}'
): (typeof documents)['query PageByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  ...QueryRootInformation\n  page(handle: $handle) {\n    body\n    bodySummary\n    handle\n    id\n    metafields(identifiers: [{namespace: "custom", key: "media"}]) {\n      description\n      key\n      namespace\n      references(first: 32) {\n        nodes {\n          ... on MetafieldReference {\n            ... on MediaImage {\n              mediaContentType\n              previewImage {\n                ... on Image {\n                  altText\n                  height\n                  url\n                  width\n                }\n              }\n            }\n          }\n        }\n      }\n      type\n      value\n    }\n    seo {\n      description\n      title\n    }\n    title\n    updatedAt\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Policies($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n  shop {\n    privacyPolicy {\n      ...ShopPolicyInformation\n    }\n    refundPolicy {\n      ...ShopPolicyInformation\n    }\n    shippingPolicy {\n      ...ShopPolicyInformation\n    }\n    termsOfService {\n      ...ShopPolicyInformation\n    }\n  }\n}'
): (typeof documents)['query Policies($country: CountryCode!) @inContext(country: $country) {\n  ...QueryRootInformation\n  shop {\n    privacyPolicy {\n      ...ShopPolicyInformation\n    }\n    refundPolicy {\n      ...ShopPolicyInformation\n    }\n    shippingPolicy {\n      ...ShopPolicyInformation\n    }\n    termsOfService {\n      ...ShopPolicyInformation\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ProductByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  product(handle: $handle) {\n    collections(first: 10) {\n      nodes {\n        handle\n        title\n        metafields(\n          identifiers: [{namespace: "custom", key: "is_brand"}, {namespace: "my_fields", key: "collection_box_shadow_colour"}, {namespace: "my_fields", key: "collection_tab_colour"}]\n        ) {\n          description\n          id\n          key\n          namespace\n          type\n          value\n        }\n      }\n    }\n    description\n    descriptionHtml\n    handle\n    id\n    productType\n    publishedAt\n    title\n    vendor\n    images(first: 16) {\n      nodes {\n        ...ImageBasicInformation\n      }\n    }\n    media(first: 16) {\n      nodes {\n        ... on Model3d {\n          alt\n          mediaContentType\n          previewImage {\n            ...ImageBasicInformation\n          }\n          sources {\n            filesize\n            format\n            mimeType\n            url\n          }\n        }\n      }\n    }\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    seo {\n      description\n      title\n    }\n    variants(first: 16) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      nodes {\n        barcode\n        id\n        title\n        sku\n        availableForSale\n        currentlyNotInStock\n        quantityAvailable\n        requiresShipping\n        selectedOptions {\n          name\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        title\n      }\n    }\n    metafields(\n      identifiers: [{namespace: "custom_fields", key: "style_trick_author"}, {namespace: "custom_fields", key: "style_trick"}, {namespace: "custom_fields", key: "url"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}, {namespace: "my_fields", key: "collection_url"}, {namespace: "my_fields", key: "filter_category"}, {namespace: "my_fields", key: "merchant"}, {namespace: "my_fields", key: "primary_category"}, {namespace: "my_fields", key: "product_details"}, {namespace: "my_fields", key: "product_sizing"}]\n    ) {\n      namespace\n      key\n      type\n      value\n      description\n      id\n      reference {\n        ... on MetafieldReference {\n          ... on Page {\n            body\n            handle\n            onlineStoreUrl\n            title\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query ProductByHandle($country: CountryCode!, $handle: String!) @inContext(country: $country) {\n  product(handle: $handle) {\n    collections(first: 10) {\n      nodes {\n        handle\n        title\n        metafields(\n          identifiers: [{namespace: "custom", key: "is_brand"}, {namespace: "my_fields", key: "collection_box_shadow_colour"}, {namespace: "my_fields", key: "collection_tab_colour"}]\n        ) {\n          description\n          id\n          key\n          namespace\n          type\n          value\n        }\n      }\n    }\n    description\n    descriptionHtml\n    handle\n    id\n    productType\n    publishedAt\n    title\n    vendor\n    images(first: 16) {\n      nodes {\n        ...ImageBasicInformation\n      }\n    }\n    media(first: 16) {\n      nodes {\n        ... on Model3d {\n          alt\n          mediaContentType\n          previewImage {\n            ...ImageBasicInformation\n          }\n          sources {\n            filesize\n            format\n            mimeType\n            url\n          }\n        }\n      }\n    }\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    seo {\n      description\n      title\n    }\n    variants(first: 16) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      nodes {\n        barcode\n        id\n        title\n        sku\n        availableForSale\n        currentlyNotInStock\n        quantityAvailable\n        requiresShipping\n        selectedOptions {\n          name\n          value\n        }\n        price {\n          amount\n          currencyCode\n        }\n        title\n      }\n    }\n    metafields(\n      identifiers: [{namespace: "custom_fields", key: "style_trick_author"}, {namespace: "custom_fields", key: "style_trick"}, {namespace: "custom_fields", key: "url"}, {namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}, {namespace: "my_fields", key: "collection_url"}, {namespace: "my_fields", key: "filter_category"}, {namespace: "my_fields", key: "merchant"}, {namespace: "my_fields", key: "primary_category"}, {namespace: "my_fields", key: "product_details"}, {namespace: "my_fields", key: "product_sizing"}]\n    ) {\n      namespace\n      key\n      type\n      value\n      description\n      id\n      reference {\n        ... on MetafieldReference {\n          ... on Page {\n            body\n            handle\n            onlineStoreUrl\n            title\n          }\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Products($country: CountryCode!) @inContext(country: $country) {\n  shop {\n    name\n  }\n  products(first: 8) {\n    nodes {\n      ...ProductBasicInformation\n    }\n  }\n}'
): (typeof documents)['query Products($country: CountryCode!) @inContext(country: $country) {\n  shop {\n    name\n  }\n  products(first: 8) {\n    nodes {\n      ...ProductBasicInformation\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ProductsByNodeId($country: CountryCode!, $ids: [ID!]!) @inContext(country: $country) {\n  nodes(ids: $ids) {\n    ... on ProductVariant {\n      product {\n        availableForSale\n        description\n        handle\n        id\n        featuredImage {\n          ...ImageBasicInformation\n        }\n        metafields(\n          identifiers: [{namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}, {namespace: "my_fields", key: "collection_url"}, {namespace: "my_fields", key: "filter_category"}, {namespace: "my_fields", key: "merchant"}, {namespace: "my_fields", key: "primary_category"}, {namespace: "my_fields", key: "product_details"}, {namespace: "my_fields", key: "product_sizing"}]\n        ) {\n          namespace\n          key\n          type\n          value\n          description\n          id\n          reference {\n            ... on MetafieldReference {\n              ... on Page {\n                body\n                handle\n                onlineStoreUrl\n                title\n              }\n            }\n          }\n        }\n        onlineStoreUrl\n        priceRange {\n          maxVariantPrice {\n            amount\n            currencyCode\n          }\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        productType\n        publishedAt\n        tags\n        title\n        vendor\n      }\n    }\n  }\n}'
): (typeof documents)['query ProductsByNodeId($country: CountryCode!, $ids: [ID!]!) @inContext(country: $country) {\n  nodes(ids: $ids) {\n    ... on ProductVariant {\n      product {\n        availableForSale\n        description\n        handle\n        id\n        featuredImage {\n          ...ImageBasicInformation\n        }\n        metafields(\n          identifiers: [{namespace: "custom", key: "composition"}, {namespace: "custom", key: "returns"}, {namespace: "custom", key: "shipping"}, {namespace: "custom", key: "sizing"}, {namespace: "descriptors", key: "care_guide"}, {namespace: "my_fields", key: "collection_url"}, {namespace: "my_fields", key: "filter_category"}, {namespace: "my_fields", key: "merchant"}, {namespace: "my_fields", key: "primary_category"}, {namespace: "my_fields", key: "product_details"}, {namespace: "my_fields", key: "product_sizing"}]\n        ) {\n          namespace\n          key\n          type\n          value\n          description\n          id\n          reference {\n            ... on MetafieldReference {\n              ... on Page {\n                body\n                handle\n                onlineStoreUrl\n                title\n              }\n            }\n          }\n        }\n        onlineStoreUrl\n        priceRange {\n          maxVariantPrice {\n            amount\n            currencyCode\n          }\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        productType\n        publishedAt\n        tags\n        title\n        vendor\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ProductsPaths($country: CountryCode!) @inContext(country: $country) {\n  products(first: 250) {\n    nodes {\n      handle\n    }\n  }\n}'
): (typeof documents)['query ProductsPaths($country: CountryCode!) @inContext(country: $country) {\n  products(first: 250) {\n    nodes {\n      handle\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Vendors($first: Int = 250, $cursor: String) {\n  products(first: $first, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        vendor\n      }\n      cursor\n    }\n  }\n}'
): (typeof documents)['query Vendors($first: Int = 250, $cursor: String) {\n  products(first: $first, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      node {\n        vendor\n      }\n      cursor\n    }\n  }\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
