exports.up = knex =>
  knex.schema
    .createTable("users", t => {
      t.increments("id").primary();
      t.timestamps();
      t.string("email")
        .unique()
        .notNullable();
    })
    .createTable("games", t => {
      t.increments("id").primary();
      t.timestamps();
      t.integer("igdb")
        .unique()
        .notNullable();
      t.string("name").notNullable();
      t.string("cover").notNullable();
    })
    .createTable("platforms", t => {
      t.increments("id").primary();
      t.timestamps();
      t.integer("igdb")
        .unique()
        .notNullable();
      t.string("slug")
        .unique()
        .notNullable();
    })
    .createTable("games_platforms", t => {
      t.increments("id").primary();
      t.timestamps();
      t.integer("game_id").references("games.id");
      t.integer("platform_id").references("platforms.id");
    })
    .createTable("users_games", t => {
      t.increments("id").primary();
      t.timestamps();
      t.integer("user_id").references("users.id");
      t.integer("game_id").references("games.id");
      t.integer("rating");
      t.enu("status", ["wishlist", "backlog", "playing", "completed"]);
    })
    .createTable("users_games_platforms", t => {
      t.increments("id").primary();
      t.timestamps();
      t.integer("user_game_id").references("users_games.id");
      t.integer("platform_id").references("platforms.id");
    });

exports.down = knex =>
  knex.schema
    .dropTable("users")
    .dropTable("games")
    .dropTable("platforms")
    .dropTable("games_platforms")
    .dropTable("users_games")
    .dropTable("users_games_platforms");
