import { get } from "axios";
import { API_GAMES } from "../../routes/api";

export const getSearchResults = (query: string) =>
  get(API_GAMES, {
    params: {
      search: query
    }
  });
