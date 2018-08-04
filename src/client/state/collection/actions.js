import { getUserGames, updateUserGame, getScore, getScores } from "./api";
import {
  resolveGames,
  resolveGameUpdate,
  resolveGamesBulkUpdate
} from "./actionCreators";

export const fetchGames = () => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  getUserGames(token).then(response => {
    const games = response.data;
    const userGamesIds = { id: games.map(game => game.id) };

    dispatch(resolveGames(games));

    getScores(userGamesIds).then(response =>
      dispatch(resolveGamesBulkUpdate(response.data))
    );
  });
};

export const setGameStatus = (id, status) => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  updateUserGame(id, token, { status }).then(() =>
    dispatch(resolveGameUpdate({ id, status }))
  );
};

export const setGamePlatforms = (id, platforms) => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  updateUserGame(id, token, { platforms }).then(() =>
    dispatch(resolveGameUpdate({ id, platforms }))
  );
};

export const rateGame = (id, rating) => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  updateUserGame(id, token, { rating }).then(() => {
    dispatch(resolveGameUpdate({ id, rating }));

    getScore(id).then(response => dispatch(resolveGameUpdate(response.data)));
  });
};
