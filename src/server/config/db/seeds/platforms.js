exports.seed = knex =>
  knex("platforms").insert(
    [
      { slug: "PC" },
      { slug: "PS4" },
      { slug: "PS3" },
      { slug: "XONE" },
      { slug: "X360" },
      { slug: "NSW" }
    ].map(platform => ({
      ...platform,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now()
    }))
  );
