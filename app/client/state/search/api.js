import { get } from "axios";
import { API_GAMES } from "../../routes/api";

export const getSearchResults = query =>
  get(API_GAMES, {
    params: {
      search: query
    }
  });
