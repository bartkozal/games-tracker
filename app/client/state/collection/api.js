import { get, put } from "axios";
import { API_RATINGS, API_USER_GAMES, API_USER_GAME } from "../../routes/api";
import { setAuthToken, filtersSerializer } from "../utils";

export const getRatings = params =>
  get(API_RATINGS, { params, paramsSerializer: filtersSerializer });

export const getUserGames = (token, params) =>
  get(API_USER_GAMES, {
    ...setAuthToken(token),
    params,
    paramsSerializer: filtersSerializer
  });

export const updateUserGame = (id, token, data) => {
  return put(API_USER_GAME.replace(":id", id), data, setAuthToken(token));
};
