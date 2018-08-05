import {
  GAMES_RESOLVED,
  GAME_UPDATE_RESOLVED,
  GAMES_BULK_UPDATE_RESOLVED
} from "./actionTypes";

export const resolveGames = games => ({
  type: GAMES_RESOLVED,
  payload: {
    games
  }
});

export const resolveGameUpdate = game => ({
  type: GAME_UPDATE_RESOLVED,
  payload: {
    game
  }
});

export const resolveGamesBulkUpdate = games => ({
  type: GAMES_BULK_UPDATE_RESOLVED,
  payload: {
    games
  }
});
