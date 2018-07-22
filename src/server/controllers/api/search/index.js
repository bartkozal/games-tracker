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
  const searchResults = await Game.createFromSearchResults(
    parseSearchResults(response.data)
  );

  res.json(searchResults);
});

export default search;
