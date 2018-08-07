import { get, put } from "axios";
import {
  API_SCORES,
  API_SCORE,
  API_USER_GAMES,
  API_USER_GAME
} from "../../routes/api";
import { setAuthToken, filtersSerializer } from "./utils";

export const getScore = id => get(API_SCORE.replace(":id", id));

export const getScores = params =>
  get(API_SCORES, { params, paramsSerializer: filtersSerializer });

export const getUserGames = (token, params) =>
  get(API_USER_GAMES, {
    ...setAuthToken(token),
    params,
    paramsSerializer: filtersSerializer
  });

export const updateUserGame = (id, token, data) => {
  return put(API_USER_GAME.replace(":id", id), data, setAuthToken(token));
};
