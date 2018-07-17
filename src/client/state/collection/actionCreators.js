import {
  GAMES_RESOLVED,
  GAME_UPDATE_RESOLVED,
  GAME_BULK_UPDATE_RESOLVED
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

export const resolveGameBulkUpdate = games => ({
  type: GAME_BULK_UPDATE_RESOLVED,
  payload: {
    games
  }
});
