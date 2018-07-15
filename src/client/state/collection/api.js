import { get, put } from "axios";
import {
  API_USER_GAMES,
  API_USER_GAME,
  API_USER_GAME_RATING
} from "../../routes/api";

const setAuthToken = token => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const getUserGames = token => get(API_USER_GAMES, setAuthToken(token));

export const updateUserGame = (id, data, token) =>
  put(API_USER_GAME.replace(":id", id), data, setAuthToken(token));

export const updateUserGameRating = (id, data, token) =>
  put(API_USER_GAME_RATING.replace(":id", id), data, setAuthToken(token));
