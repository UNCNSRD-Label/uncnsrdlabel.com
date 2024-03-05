import { type TypedDocumentNode } from "@graphql-typed-document-node/core";

export const getDefinitionName = <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
) => (document.definitions[0] as any).name.value;

export const getQueryKey = <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
) => [getDefinitionName<TResult, TVariables>(document), variables];
