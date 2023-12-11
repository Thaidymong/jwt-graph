import { GraphQLError } from 'graphql';

export const EXTENSIONS = {
  CONFLICT: 'CONFLICT',
};

export const {
  CONFLICT,
} = EXTENSIONS;

type ErrorCode =
  | 'CONFLICT'

export function CustomGraphQLError(
  message: string,
  code: ErrorCode | string,
): GraphQLError {
  return new GraphQLError(message, {
    extensions: {
      code,
    },
  });
}
