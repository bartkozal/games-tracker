import { get } from "axios";
import { API_SEARCH } from "../../routes/api";

export const getSearchResults = query =>
  get(API_SEARCH, {
    params: {
      q: query
    }
  });
