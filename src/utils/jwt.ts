import { Request } from 'express';
import { GraphQLError } from 'graphql';
import { sign } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

export interface DecodedPayload {
  userId: number;
}

/**
 * Decode the token
 * @param req
 * @param requireAuth
 * @returns
 */
const decodedToken = (req: Request, requireAuth = true) => {
  const authorization = req.headers.authorization;
  if (!authorization && requireAuth) {
    throw new GraphQLError('Authentication token required', {
      extensions: {
        code: 'UNAUTHENTICATED',
      },
    });
  }

  if (authorization) {
    try {
      const token = authorization.replace('Bearer ', '');
      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY,
      ) as DecodedPayload;
      return decoded;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new GraphQLError('Authentication token expired', {
          extensions: {
            code: 'UNAUTHENTICATED',
          },
        });
      } else if (error instanceof jwt.JsonWebTokenError) {
        throw new GraphQLError('Invalid authentication token', {
          extensions: {
            code: 'UNAUTHENTICATED',
          },
        });
      } else {
        throw new GraphQLError('Authentication error', {
          extensions: {
            code: 'UNAUTHENTICATED',
          },
        });
      }
    }
  }

  return null;
};

/**
 * Generate JWT token
 * @param userId
 * @param expiresIn
 * @returns
 */
const generateToken = (userId: number, expiresIn = '7d') => {
  return sign(
    {
      userId,
    },
    process.env.SECRET_KEY,
    {
      expiresIn,
    },
  );
};

export { decodedToken, generateToken };
