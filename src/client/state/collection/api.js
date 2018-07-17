import { get, put } from "axios";
import {
  API_SCORES,
  API_SCORE,
  API_USER_GAMES,
  API_USER_GAME,
  API_USER_GAME_RATING,
  API_USER_RATINGS
} from "../../routes/api";

const setAuthToken = token => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const getScore = id => get(API_SCORE.replace(":id", id));

export const getScores = data => get(API_SCORES, data);

export const getUserGames = (token, data) =>
  get(API_USER_GAMES, data, setAuthToken(token));

export const getUserRatings = (token, data) =>
  get(API_USER_RATINGS, data, setAuthToken(token));

export const updateUserGame = (id, token, data) =>
  put(API_USER_GAME.replace(":id", id), data, setAuthToken(token));

export const updateUserGameRating = (id, token, data) =>
  put(API_USER_GAME_RATING.replace(":id", id), data, setAuthToken(token));
