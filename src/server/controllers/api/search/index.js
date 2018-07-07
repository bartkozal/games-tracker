import { Router } from "express";
import { get } from "axios";
import { transformSearchResults } from "./utils";

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
      "filter[version_parent][not_exists]": 1,
      "filter[platforms][any]": "6,14,3,48,9,49,12,130"
    }
  });

  res.json(transformSearchResults(response.data));
});

export default search;
