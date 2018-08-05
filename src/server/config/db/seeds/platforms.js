exports.seed = knex =>
  knex("platforms").insert(
    [
      { igdb: 6, slug: "PC" },
      { igdb: 48, slug: "PS4" },
      { igdb: 9, slug: "PS3" },
      { igdb: 49, slug: "XONE" },
      { igdb: 12, slug: "X360" },
      { igdb: 130, slug: "NSW" }
    ].map(platform => ({
      ...platform,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    }))
  );
