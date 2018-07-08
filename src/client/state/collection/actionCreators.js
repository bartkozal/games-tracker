import { GAME_UPDATE_RESOLVED } from "./actionTypes";

export const resolveGameUpdate = game => ({
  type: GAME_UPDATE_RESOLVED,
  payload: {
    game
  }
});
