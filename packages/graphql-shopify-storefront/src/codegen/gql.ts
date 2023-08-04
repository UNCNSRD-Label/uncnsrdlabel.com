/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as types from '@uncnsrdlabel/graphql-shopify-storefront/codegen/graphql.js';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  \n": types.CartFragmentDoc,
    "\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n": types.ImageFragmentDoc,
    "\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    collections(first: 250) {\n      edges {\n        node {\n          id\n          handle\n          title\n        }\n      }\n    }\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n    vendor\n  }\n  \n  \n": types.ProductFragmentDoc,
    "\n  fragment seo on SEO {\n    description\n    title\n  }\n": types.SeoFragmentDoc,
    "\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n": types.AddToCartDocument,
    "\n  mutation createCart($lineItems: [CartLineInput!]) {\n    cartCreate(input: { lines: $lineItems }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n": types.CreateCartDocument,
    "\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n": types.EditCartItemsDocument,
    "\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n": types.RemoveFromCartDocument,
    "\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n  \n": types.GetCartDocument,
    "\n  fragment collection on Collection {\n    handle\n    title\n    description\n    seo {\n      ...seo\n    }\n    updatedAt\n  }\n  \n": types.CollectionFragmentDoc,
    "\n  query getCollection($handle: String!) {\n    collection(handle: $handle) {\n      ...collection\n    }\n  }\n  \n": types.GetCollectionDocument,
    "\n  query getCollections {\n    collections(first: 100, sortKey: TITLE) {\n      edges {\n        node {\n          ...collection\n        }\n      }\n    }\n  }\n  \n": types.GetCollectionsDocument,
    "\n  query getCollectionProducts(\n    $handle: String!\n    $sortKey: ProductCollectionSortKeys\n    $reverse: Boolean\n  ) {\n    collection(handle: $handle) {\n      products(sortKey: $sortKey, reverse: $reverse, first: 100) {\n        edges {\n          node {\n            ...product\n          }\n        }\n      }\n    }\n  }\n  \n": types.GetCollectionProductsDocument,
    "\n  query getMenu($handle: String!) {\n    menu(handle: $handle) {\n      items {\n        title\n        url\n      }\n    }\n  }\n": types.GetMenuDocument,
    "\n  fragment page on Page {\n    ... on Page {\n      id\n      title\n      handle\n      body\n      bodySummary\n      seo {\n        ...seo\n      }\n      createdAt\n      updatedAt\n      mediaImages: metafield(namespace: \"custom\", key: \"images\") {\n        value\n        references(first: 10) {\n          edges {\n            node {\n              ... on MediaImage {\n                __typename\n                id\n                image {\n                  ...image\n                }\n                mediaContentType\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n": types.PageFragmentDoc,
    "\n  query getPage($handle: String!) {\n    pageByHandle(handle: $handle) {\n      ...page\n    }\n  }\n  \n": types.GetPageDocument,
    "\n  query getPages {\n    pages(first: 100) {\n      edges {\n        node {\n          ...page\n        }\n      }\n    }\n  }\n  \n": types.GetPagesDocument,
    "\n  fragment shopPolicy on ShopPolicy {\n    ... on ShopPolicy {\n      body\n      handle\n      id\n      title\n      url\n    }\n  }\n": types.ShopPolicyFragmentDoc,
    "\n  query getPolicies {\n    shop {\n      privacyPolicy {\n        ...shopPolicy\n      }\n      refundPolicy {\n        ...shopPolicy\n      }\n      shippingPolicy {\n        ...shopPolicy\n      }\n      termsOfService {\n        ...shopPolicy\n      }\n    }\n  }\n  \n": types.GetPoliciesDocument,
    "\n  query getProduct($handle: String!) {\n    product(handle: $handle) {\n      ...product\n      metafields(\n        identifiers: [\n          { namespace: \"custom\", key: \"line\" }\n          { namespace: \"custom\", key: \"shape\" }\n          { namespace: \"custom\", key: \"component\" }\n          { namespace: \"custom\", key: \"returns\" }\n          { namespace: \"custom\", key: \"shipping\" }\n          { namespace: \"custom\", key: \"sizing\" }\n          { namespace: \"custom\", key: \"model\" }\n          { namespace: \"descriptors\", key: \"care_guide\" }\n          {\n            namespace: \"shopify--discovery--product_recommendation\"\n            key: \"complementary_products\"\n          }\n          {\n            namespace: \"shopify--discovery--product_recommendation\"\n            key: \"related_products\"\n          }\n        ]\n      ) {\n        namespace\n        key\n        type\n        value\n        description\n        id\n        reference {\n          ... on MetafieldReference {\n            ... on Page {\n              body\n              handle\n              onlineStoreUrl\n              title\n            }\n            ... on Metaobject {\n              id\n              type\n              fields {\n                key\n                type\n                value\n              }\n            }\n          }\n        }\n        references(first: 16) {\n          nodes {\n            ... on MetafieldReference {\n              ... on Page {\n                body\n                handle\n                onlineStoreUrl\n                title\n              }\n              ... on Metaobject {\n                id\n                type\n                fields {\n                  key\n                  type\n                  value\n                  references(first: 8) {\n                    # edges {\n                    nodes {\n                      ... on Metaobject {\n                        fields {\n                          key\n                          type\n                          value\n                          references(first: 8) {\n                            # edges {\n                            nodes {\n                              ... on Metaobject {\n                                fields {\n                                  key\n                                  type\n                                  value\n                                  references(first: 8) {\n                                    # edges {\n                                    nodes {\n                                      ... on Metaobject {\n                                        fields {\n                                          key\n                                          type\n                                          value\n                                        }\n                                      }\n                                    }\n                                    # }\n                                  }\n                                }\n                              }\n                            }\n                            # }\n                          }\n                        }\n                      }\n                    }\n                    # }\n                  }\n                }\n              }\n            }\n          }\n        }\n        type\n      }\n    }\n  }\n  \n": types.GetProductDocument,
    "\n  query getProducts(\n    $sortKey: ProductSortKeys\n    $reverse: Boolean\n    $query: String\n  ) {\n    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n  \n": types.GetProductsDocument,
    "\n  query getProductRecommendations($productId: ID!) {\n    productRecommendations(productId: $productId) {\n      ...product\n    }\n  }\n  \n": types.GetProductRecommendationsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  \n"): (typeof documents)["\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n"): (typeof documents)["\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    collections(first: 250) {\n      edges {\n        node {\n          id\n          handle\n          title\n        }\n      }\n    }\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n    vendor\n  }\n  \n  \n"): (typeof documents)["\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    collections(first: 250) {\n      edges {\n        node {\n          id\n          handle\n          title\n        }\n      }\n    }\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    compareAtPriceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n    vendor\n  }\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment seo on SEO {\n    description\n    title\n  }\n"): (typeof documents)["\n  fragment seo on SEO {\n    description\n    title\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createCart($lineItems: [CartLineInput!]) {\n    cartCreate(input: { lines: $lineItems }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  mutation createCart($lineItems: [CartLineInput!]) {\n    cartCreate(input: { lines: $lineItems }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n  \n"): (typeof documents)["\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment collection on Collection {\n    handle\n    title\n    description\n    seo {\n      ...seo\n    }\n    updatedAt\n  }\n  \n"): (typeof documents)["\n  fragment collection on Collection {\n    handle\n    title\n    description\n    seo {\n      ...seo\n    }\n    updatedAt\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCollection($handle: String!) {\n    collection(handle: $handle) {\n      ...collection\n    }\n  }\n  \n"): (typeof documents)["\n  query getCollection($handle: String!) {\n    collection(handle: $handle) {\n      ...collection\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCollections {\n    collections(first: 100, sortKey: TITLE) {\n      edges {\n        node {\n          ...collection\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getCollections {\n    collections(first: 100, sortKey: TITLE) {\n      edges {\n        node {\n          ...collection\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCollectionProducts(\n    $handle: String!\n    $sortKey: ProductCollectionSortKeys\n    $reverse: Boolean\n  ) {\n    collection(handle: $handle) {\n      products(sortKey: $sortKey, reverse: $reverse, first: 100) {\n        edges {\n          node {\n            ...product\n          }\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getCollectionProducts(\n    $handle: String!\n    $sortKey: ProductCollectionSortKeys\n    $reverse: Boolean\n  ) {\n    collection(handle: $handle) {\n      products(sortKey: $sortKey, reverse: $reverse, first: 100) {\n        edges {\n          node {\n            ...product\n          }\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMenu($handle: String!) {\n    menu(handle: $handle) {\n      items {\n        title\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMenu($handle: String!) {\n    menu(handle: $handle) {\n      items {\n        title\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment page on Page {\n    ... on Page {\n      id\n      title\n      handle\n      body\n      bodySummary\n      seo {\n        ...seo\n      }\n      createdAt\n      updatedAt\n      mediaImages: metafield(namespace: \"custom\", key: \"images\") {\n        value\n        references(first: 10) {\n          edges {\n            node {\n              ... on MediaImage {\n                __typename\n                id\n                image {\n                  ...image\n                }\n                mediaContentType\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n"): (typeof documents)["\n  fragment page on Page {\n    ... on Page {\n      id\n      title\n      handle\n      body\n      bodySummary\n      seo {\n        ...seo\n      }\n      createdAt\n      updatedAt\n      mediaImages: metafield(namespace: \"custom\", key: \"images\") {\n        value\n        references(first: 10) {\n          edges {\n            node {\n              ... on MediaImage {\n                __typename\n                id\n                image {\n                  ...image\n                }\n                mediaContentType\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPage($handle: String!) {\n    pageByHandle(handle: $handle) {\n      ...page\n    }\n  }\n  \n"): (typeof documents)["\n  query getPage($handle: String!) {\n    pageByHandle(handle: $handle) {\n      ...page\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPages {\n    pages(first: 100) {\n      edges {\n        node {\n          ...page\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getPages {\n    pages(first: 100) {\n      edges {\n        node {\n          ...page\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment shopPolicy on ShopPolicy {\n    ... on ShopPolicy {\n      body\n      handle\n      id\n      title\n      url\n    }\n  }\n"): (typeof documents)["\n  fragment shopPolicy on ShopPolicy {\n    ... on ShopPolicy {\n      body\n      handle\n      id\n      title\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPolicies {\n    shop {\n      privacyPolicy {\n        ...shopPolicy\n      }\n      refundPolicy {\n        ...shopPolicy\n      }\n      shippingPolicy {\n        ...shopPolicy\n      }\n      termsOfService {\n        ...shopPolicy\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getPolicies {\n    shop {\n      privacyPolicy {\n        ...shopPolicy\n      }\n      refundPolicy {\n        ...shopPolicy\n      }\n      shippingPolicy {\n        ...shopPolicy\n      }\n      termsOfService {\n        ...shopPolicy\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProduct($handle: String!) {\n    product(handle: $handle) {\n      ...product\n      metafields(\n        identifiers: [\n          { namespace: \"custom\", key: \"line\" }\n          { namespace: \"custom\", key: \"shape\" }\n          { namespace: \"custom\", key: \"component\" }\n          { namespace: \"custom\", key: \"returns\" }\n          { namespace: \"custom\", key: \"shipping\" }\n          { namespace: \"custom\", key: \"sizing\" }\n          { namespace: \"custom\", key: \"model\" }\n          { namespace: \"descriptors\", key: \"care_guide\" }\n          {\n            namespace: \"shopify--discovery--product_recommendation\"\n            key: \"complementary_products\"\n          }\n          {\n            namespace: \"shopify--discovery--product_recommendation\"\n            key: \"related_products\"\n          }\n        ]\n      ) {\n        namespace\n        key\n        type\n        value\n        description\n        id\n        reference {\n          ... on MetafieldReference {\n            ... on Page {\n              body\n              handle\n              onlineStoreUrl\n              title\n            }\n            ... on Metaobject {\n              id\n              type\n              fields {\n                key\n                type\n                value\n              }\n            }\n          }\n        }\n        references(first: 16) {\n          nodes {\n            ... on MetafieldReference {\n              ... on Page {\n                body\n                handle\n                onlineStoreUrl\n                title\n              }\n              ... on Metaobject {\n                id\n                type\n                fields {\n                  key\n                  type\n                  value\n                  references(first: 8) {\n                    # edges {\n                    nodes {\n                      ... on Metaobject {\n                        fields {\n                          key\n                          type\n                          value\n                          references(first: 8) {\n                            # edges {\n                            nodes {\n                              ... on Metaobject {\n                                fields {\n                                  key\n                                  type\n                                  value\n                                  references(first: 8) {\n                                    # edges {\n                                    nodes {\n                                      ... on Metaobject {\n                                        fields {\n                                          key\n                                          type\n                                          value\n                                        }\n                                      }\n                                    }\n                                    # }\n                                  }\n                                }\n                              }\n                            }\n                            # }\n                          }\n                        }\n                      }\n                    }\n                    # }\n                  }\n                }\n              }\n            }\n          }\n        }\n        type\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getProduct($handle: String!) {\n    product(handle: $handle) {\n      ...product\n      metafields(\n        identifiers: [\n          { namespace: \"custom\", key: \"line\" }\n          { namespace: \"custom\", key: \"shape\" }\n          { namespace: \"custom\", key: \"component\" }\n          { namespace: \"custom\", key: \"returns\" }\n          { namespace: \"custom\", key: \"shipping\" }\n          { namespace: \"custom\", key: \"sizing\" }\n          { namespace: \"custom\", key: \"model\" }\n          { namespace: \"descriptors\", key: \"care_guide\" }\n          {\n            namespace: \"shopify--discovery--product_recommendation\"\n            key: \"complementary_products\"\n          }\n          {\n            namespace: \"shopify--discovery--product_recommendation\"\n            key: \"related_products\"\n          }\n        ]\n      ) {\n        namespace\n        key\n        type\n        value\n        description\n        id\n        reference {\n          ... on MetafieldReference {\n            ... on Page {\n              body\n              handle\n              onlineStoreUrl\n              title\n            }\n            ... on Metaobject {\n              id\n              type\n              fields {\n                key\n                type\n                value\n              }\n            }\n          }\n        }\n        references(first: 16) {\n          nodes {\n            ... on MetafieldReference {\n              ... on Page {\n                body\n                handle\n                onlineStoreUrl\n                title\n              }\n              ... on Metaobject {\n                id\n                type\n                fields {\n                  key\n                  type\n                  value\n                  references(first: 8) {\n                    # edges {\n                    nodes {\n                      ... on Metaobject {\n                        fields {\n                          key\n                          type\n                          value\n                          references(first: 8) {\n                            # edges {\n                            nodes {\n                              ... on Metaobject {\n                                fields {\n                                  key\n                                  type\n                                  value\n                                  references(first: 8) {\n                                    # edges {\n                                    nodes {\n                                      ... on Metaobject {\n                                        fields {\n                                          key\n                                          type\n                                          value\n                                        }\n                                      }\n                                    }\n                                    # }\n                                  }\n                                }\n                              }\n                            }\n                            # }\n                          }\n                        }\n                      }\n                    }\n                    # }\n                  }\n                }\n              }\n            }\n          }\n        }\n        type\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProducts(\n    $sortKey: ProductSortKeys\n    $reverse: Boolean\n    $query: String\n  ) {\n    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getProducts(\n    $sortKey: ProductSortKeys\n    $reverse: Boolean\n    $query: String\n  ) {\n    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProductRecommendations($productId: ID!) {\n    productRecommendations(productId: $productId) {\n      ...product\n    }\n  }\n  \n"): (typeof documents)["\n  query getProductRecommendations($productId: ID!) {\n    productRecommendations(productId: $productId) {\n      ...product\n    }\n  }\n  \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;