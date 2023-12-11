import { Graph } from 'src/generated/graph';
import ContextType from 'src/graphql/ContextType';
import { Args, OK, ResolverHandler } from 'src/types/ResolverHandler';
import { encryptPassword } from 'src/utils/passwordHash';

export const AppCreateUserMutation: ResolverHandler<Promise<OK>> = async (
  _,
  { input }: Args<Graph.UserInput>,
  ctx: ContextType,
) => {
  const knex = ctx.knex.default;

  const {
    fullname,
    email,
    password,
    phone_number,
    user_profile,
  } = input;

  const hashedPassword = await encryptPassword(password);

  try {
    const [createUser] = await knex
      .table('users')
      .insert({
        fullname,
        email,
        password: hashedPassword,
        phone_number,
        user_profile,
      });

    return {
      ok: createUser > 0
    };
  }
  catch (error) {
    throw new Error(`An error occurred during create users: ${error.message}`);
  }
};