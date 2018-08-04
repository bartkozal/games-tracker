import { Model } from "objection";
import knex from "knex";

const database = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
  debug: true
});

Model.knex(database);

export default class Base extends Model {
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}
