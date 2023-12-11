import type { GraphQLResolveInfo } from 'graphql';
import { Knex } from 'knex';
import ContextType from 'src/graphql/ContextType';

export type ID = number;

export interface Parents { }
export interface Args<T = any, ID = any, TP = any, TFilter = any> {
  input: T;
  id: ID;
  paginationInput: TP;
  filter: TFilter;
}

export type ResolverHandler<ReturnType = any> = (
  parents: Parents,
  args: any,
  context: ContextType,
  info: GraphQLResolveInfo,
) => ReturnType;

export interface OK {
  ok: boolean;
}
