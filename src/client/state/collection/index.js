import { GAME_UPDATED } from "./actionTypes";
import { slugify } from "./utils";

const initialState = {
  games: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_UPDATED:
      return {
        ...state,
        games: {
          ...state.profile,
          [slugify(action.payload.game.name)]: action.payload.game
        }
      };
    default:
      return state;
  }
};
