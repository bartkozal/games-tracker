import { getSearchResults } from "./api";
import {
  requestResults,
  resolveResults,
  rejectResults
} from "./actionCreators";
import { getScores, getUserGames, getUserRatings } from "../collection/api";
import { resolveGameBulkUpdate } from "../collection/actionCreators";

export const searchQuery = query => (dispatch, getState) => {
  dispatch(requestResults());
  getSearchResults(query)
    .then(response => {
      const results = response.data;

      dispatch(resolveResults(results));

      return results;
    })
    .then(results => {
      const { userSignedIn, currentUser } = getState().Auth;
      const token = currentUser.token;
      const params = {
        id: results.map(game => game.id)
      };

      getScores(params).then(response =>
        dispatch(resolveGameBulkUpdate(response.data))
      );

      if (userSignedIn) {
        getUserGames(token, params).then(response =>
          dispatch(resolveGameBulkUpdate(response.data))
        );

        getUserRatings(token, params).then(response =>
          dispatch(resolveGameBulkUpdate(response.data))
        );
      }
    })
    .catch(error => dispatch(rejectResults()));
};
