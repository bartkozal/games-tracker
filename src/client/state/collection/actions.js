import { updateGameCollection } from "./actionCreators";

export const addGameToCollection = (game, collection) => dispatch => {
  dispatch(updateGameCollection(game, collection));
};
