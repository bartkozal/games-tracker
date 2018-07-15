import { getUserGames, updateUserGame, updateUserGameRating } from "./api";
import { resolveGames, resolveGameUpdate } from "./actionCreators";

export const fetchGames = () => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  getUserGames(token).then(response => dispatch(resolveGames(response.data)));
};

export const updateGame = game => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;
  const { id, status } = game;
  const platforms = Object.keys(game.platforms).filter(
    platform => game.platforms[platform]
  );

  updateUserGame(id, { platforms, status }, token).then(() =>
    dispatch(resolveGameUpdate(game))
  );
};

export const rateGame = (game, rating) => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;
  const { id } = game;

  updateUserGameRating(id, { rating }, token).then(() =>
    dispatch(resolveGameUpdate({ ...game, rating }))
  );
};
