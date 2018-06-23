// @flow
import { get } from "axios";
import { API_SEARCH } from "../../routes/api";

export const getSearchResults = (
  query: string
): Promise<{ data: SearchResults }> =>
  get(API_SEARCH, {
    params: {
      q: query
    }
  });
