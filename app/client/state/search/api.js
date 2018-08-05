import { get } from "axios";
import { API_SEARCH } from "../../routes/api";

export const getSearchResults = (query: string) =>
  get(API_SEARCH, {
    params: {
      q: query
    }
  });
