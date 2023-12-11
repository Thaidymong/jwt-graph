import createKnexContext from "./createKnexContext";
import extractRequestToken from "./extractRequestToken";
import { getUser } from "../middlewares/Authentication";

export interface AuthUserInterface {
  id?: number;
  token?: string;
}

export function createApolloContext() {
  const knexConnectionList = createKnexContext();

  const context = ({ req }: any): any => {
    const token: string = extractRequestToken(req);

    return {
      user: getUser(token),
      knex: knexConnectionList,
      token,
    };
  };

  return context;
}
