import knex from "knex";
import { Model } from "objection";

export default () => {
  const database = knex({
    client: "pg",
    connection: process.env.DATABASE_URL,
    debug: true
  });

  Model.knex(database);
};
