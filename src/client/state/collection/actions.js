import {
  getUserGames,
  updateUserGame,
  updateUserGameRating,
  getScore,
  getUserRatings,
  getScores
} from "./api";
import {
  resolveGames,
  resolveGameUpdate,
  resolveGameBulkUpdate
} from "./actionCreators";

export const fetchGames = () => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  getUserGames(token)
    .then(response => {
      const games = response.data;

      dispatch(resolveGames(games));

      return games;
    })
    .then(games => {
      const params = { id: games.map(game => game.id) };

      getUserRatings(token).then(response =>
        dispatch(resolveGameBulkUpdate(response.data))
      );

      getScores(params).then(response =>
        dispatch(resolveGameBulkUpdate(response.data))
      );
    });
};

export const updateGame = game => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;
  const { id, userPlatforms: platforms, status } = game;

  updateUserGame(id, token, { platforms, status }).then(() =>
    dispatch(resolveGameUpdate(game))
  );
};

export const rateGame = (id, rating) => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  updateUserGameRating(id, token, { rating })
    .then(() => {
      dispatch(resolveGameUpdate({ id, rating }));
    })
    .then(ratedGame => {
      getScore(id).then(response => dispatch(resolveGameUpdate(response.data)));
    });
};
