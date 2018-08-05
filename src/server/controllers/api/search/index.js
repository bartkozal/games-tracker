import { Router } from "express";
import { get } from "axios";
import { parseSearchResults } from "./utils";
import Game from "../../../models/game";

const search = Router();

search.get("/", async (req, res) => {
  const response = await get("/games/", {
    baseURL: "https://api-endpoint.igdb.com",
    headers: {
      "user-key": process.env.IGDB_API_KEY
    },
    params: {
      search: req.query.q,
      fields: "name,platforms,cover.cloudinary_id",
      order: "popularity:desc",
      limit: 12,
      "filter[platforms][any]": "6,48,9,49,12,130"
    }
  });

  const searchResults = await parseSearchResults(response.data);
  const games = searchResults.map(async result => {
    const game = await Game.query().findOne({ igdb: result.igdb });
    return await Game.query().upsertGraph(
      { ...game, ...result },
      { relate: true, noUpdate: ["platforms"] }
    );
  });

  console.log(Promise.all(games));

  res.json([]);
});

export default search;
