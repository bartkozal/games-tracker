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
      fields: "name,platforms,platforms.slug,cover.cloudinary_id",
      expand: "platforms",
      order: "popularity:desc",
      limit: 16,
      "filter[version_parent][not_exists]": 1
    }
  });

  res.json(transformSearchResults(response.data));
});

export default search;
