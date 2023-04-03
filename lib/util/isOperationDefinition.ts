import { Kind, ASTNode, OperationDefinitionNode } from 'graphql'

export const isOperationDefinition = (
  def: ASTNode
): def is OperationDefinitionNode => def.kind === Kind.OPERATION_DEFINITION
