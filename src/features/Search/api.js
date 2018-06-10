import { get } from "axios";

export const getSearchResults = query =>
  get("/games/", {
    baseURL: "https://api-endpoint.igdb.com",
    headers: {
      "user-key": process.env.REACT_APP_IGDB_API_KEY
    },
    params: {
      search: query,
      fields: "name,platforms,platforms.slug,cover.cloudinary_id",
      expand: "platforms",
      order: "popularity:desc",
      limit: 16,
      "filter[version_parent][not_exists]": 1
    }
  });
