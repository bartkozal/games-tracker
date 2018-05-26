import { get } from "axios";

export const getSearchResults = query =>
  get("/search/", {
    baseURL: "https://www.giantbomb.com/api",
    params: {
      api_key: process.env.REACT_APP_GIANT_BOMB_API_KEY,
      format: "json",
      resources: "game",
      field_list: "name,platforms,image",
      query
    }
  });
