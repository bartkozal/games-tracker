import knex from "knex";
import bookshelf from "bookshelf";

const database = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
  debug: true
});

export default bookshelf(database);
