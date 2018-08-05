import { getSearchResults } from "./api";
import {
  requestResults,
  resolveResults,
  rejectResults
} from "./actionCreators";
import { getScores, getUserGames } from "../collection/api";
import { resolveGamesBulkUpdate } from "../collection/actionCreators";

export const searchQuery = query => (dispatch, getState) => {
  dispatch(requestResults());
  getSearchResults(query)
    .then(response => {
      const results = response.data;
      const { userSignedIn, currentUser } = getState().Auth;
      const gamesIds = {
        id: results.map(game => game.id)
      };

      dispatch(resolveResults(results));

      getScores(gamesIds).then(response =>
        dispatch(resolveGamesBulkUpdate(response.data))
      );

      if (userSignedIn) {
        getUserGames(currentUser.token, gamesIds).then(response =>
          dispatch(resolveGamesBulkUpdate(response.data))
        );
      }
    })
    .catch(() => dispatch(rejectResults()));
};
