import { getUserGames, updateUserGame, getRatings } from "./api";
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

    getRatings(userGamesIds).then(response =>
      dispatch(resolveGamesBulkUpdate(response.data))
    );
  });
};

export const setGameStatus = (id, status) => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  updateUserGame(id, token, { game: { status } }).then(() =>
    dispatch(resolveGameUpdate({ id, status }))
  );
};

export const setGamePlatforms = (id, platforms) => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;
  const platformIds = platforms.map(({ id }) => id);

  updateUserGame(id, token, { game: { platforms: platformIds } }).then(() =>
    dispatch(resolveGameUpdate({ id, userPlatforms: platforms }))
  );
};

export const rateGame = (id, rating) => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  updateUserGame(id, token, { game: { rating } }).then(() => {
    dispatch(resolveGameUpdate({ id, rating }));

    getRatings({ id: [id] }).then(response =>
      dispatch(resolveGamesBulkUpdate(response.data))
    );
  });
};
