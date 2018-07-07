import { GAME_UPDATED } from "./actionTypes";

export const updateGame = game => ({
  type: GAME_UPDATED,
  payload: {
    game
  }
});
