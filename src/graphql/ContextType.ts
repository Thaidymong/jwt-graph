import { Knex } from "knex";

export default interface ContextType {
  req(req: any): unknown;
  knex: {
    default: Knex;
  };
  token: string;
  user: any;
}
