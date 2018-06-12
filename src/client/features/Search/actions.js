import { getSearchResults } from "./api";
import { parseResults } from "./parsers";
import {
  requestResults,
  resolveResults,
  rejectResults
} from "./actionCreators";

export const searchQuery = query => dispatch => {
  dispatch(requestResults());
  getSearchResults(query)
    .then(response => dispatch(resolveResults(parseResults(response.data))))
    .catch(error => dispatch(rejectResults()));
};
