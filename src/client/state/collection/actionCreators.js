import { GAME_COLLECTION_UPDATED } from "./actionTypes";

export const updateGameCollection = (game, collection) => ({
  type: GAME_COLLECTION_UPDATED,
  payload: {
    game,
    collection
  }
});
