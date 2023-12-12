/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  fragment discountNode on DiscountNode {\n    __typename\n    id\n    discount {\n      __typename\n      ... on DiscountAutomaticBasic {\n        __typename\n        customerGets {\n          value {\n            __typename\n          }\n        }\n        discountClass\n        endsAt\n        minimumRequirement {\n          ... on DiscountMinimumQuantity {\n            greaterThanOrEqualToQuantity\n          }\n          ... on DiscountMinimumSubtotal {\n            greaterThanOrEqualToSubtotal {\n              amount\n              currencyCode\n            }\n          }\n        }\n        shortSummary\n        startsAt\n        status\n        summary\n        title\n      }\n      ... on DiscountCodeBasic {\n        __typename\n        appliesOncePerCustomer\n        customerGets {\n          value {\n            __typename\n          }\n        }\n        discountClass\n        endsAt\n        shortSummary\n        startsAt\n        status\n        summary\n        title\n      }\n    }\n  }\n": types.DiscountNodeFragmentDoc,
    "\n  query getDiscountNodes(\n    $first: Int = 100\n    $query: String!\n  ) {\n    discountNodes(first: $first, query: $query) {\n      edges {\n        node {\n          ...discountNode\n        }\n      }\n    }\n  }\n": types.GetDiscountNodesDocument,
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
export function graphql(source: "\n  fragment discountNode on DiscountNode {\n    __typename\n    id\n    discount {\n      __typename\n      ... on DiscountAutomaticBasic {\n        __typename\n        customerGets {\n          value {\n            __typename\n          }\n        }\n        discountClass\n        endsAt\n        minimumRequirement {\n          ... on DiscountMinimumQuantity {\n            greaterThanOrEqualToQuantity\n          }\n          ... on DiscountMinimumSubtotal {\n            greaterThanOrEqualToSubtotal {\n              amount\n              currencyCode\n            }\n          }\n        }\n        shortSummary\n        startsAt\n        status\n        summary\n        title\n      }\n      ... on DiscountCodeBasic {\n        __typename\n        appliesOncePerCustomer\n        customerGets {\n          value {\n            __typename\n          }\n        }\n        discountClass\n        endsAt\n        shortSummary\n        startsAt\n        status\n        summary\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment discountNode on DiscountNode {\n    __typename\n    id\n    discount {\n      __typename\n      ... on DiscountAutomaticBasic {\n        __typename\n        customerGets {\n          value {\n            __typename\n          }\n        }\n        discountClass\n        endsAt\n        minimumRequirement {\n          ... on DiscountMinimumQuantity {\n            greaterThanOrEqualToQuantity\n          }\n          ... on DiscountMinimumSubtotal {\n            greaterThanOrEqualToSubtotal {\n              amount\n              currencyCode\n            }\n          }\n        }\n        shortSummary\n        startsAt\n        status\n        summary\n        title\n      }\n      ... on DiscountCodeBasic {\n        __typename\n        appliesOncePerCustomer\n        customerGets {\n          value {\n            __typename\n          }\n        }\n        discountClass\n        endsAt\n        shortSummary\n        startsAt\n        status\n        summary\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getDiscountNodes(\n    $first: Int = 100\n    $query: String!\n  ) {\n    discountNodes(first: $first, query: $query) {\n      edges {\n        node {\n          ...discountNode\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getDiscountNodes(\n    $first: Int = 100\n    $query: String!\n  ) {\n    discountNodes(first: $first, query: $query) {\n      edges {\n        node {\n          ...discountNode\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;