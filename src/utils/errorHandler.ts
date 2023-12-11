import type { GraphQLFormattedError } from 'graphql';

export function errorHandler(err: GraphQLFormattedError) {
  if (err.extensions?.code === 'UNAUTHENTICATED') {
    return {
      message: err.message,
      code: 'UNAUTHENTICATED',
      statusCode: 401,
    };
  } else if (err.extensions?.code === 'UNAUTHORIZED') {
    return {
      message: err.message,
      code: 'UNAUTHORIZED',
      statusCode: 403,
    };
  } else if (err.extensions?.code === 'FORBIDDEN') {
    return {
      message: err.message,
      code: 'FORBIDDEN',
      statusCode: 403,
    };
  } else if (err.extensions?.code === 'NOT_FOUND') {
    return {
      message: err.message,
      code: 'NOT_FOUND',
      statusCode: 404,
    };
  } else if (err.extensions?.code === 'INTERNAL_SERVER_ERROR') {
    return {
      message: err.message,
      code: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
    };
  } else if (err.extensions?.code === 'BAD_REQUEST') {
    return {
      message: err.message,
      code: 'BAD_REQUEST',
      statusCode: 400,
    };
  } else if (err.extensions?.code === 'CONFLICT') {
    return {
      message: err.message,
      code: 'CONFLICT',
      statusCode: 409,
    };
  } else if (err.extensions?.code === 'UNPROCESSABLE_ENTITY') {
    return {
      message: err.message,
      code: 'UNPROCESSABLE_ENTITY',
      statusCode: 422,
    };
  } else if (err.extensions?.code === 'INVALID_CREDENTIALS') {
    return {
      message: err.message,
      code: 'INVALID_CREDENTIALS',
      statusCode: 401,
    };
  } else {
    return {
      message: err.message,
      extensions: {
        code: 500,
      },
    };
  }
}
