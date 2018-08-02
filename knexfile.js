module.exports = {
  [process.env.NODE_ENV]: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/server/config/db/migrations"
    },
    seeds: {
      directory: "./src/server/config/db/seeds"
    }
  }
};
