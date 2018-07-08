import { GAME_UPDATE_RESOLVED } from "./actionTypes";
import collection from "../__mocks__/collection";

const initialState = {
  games: process.env.NODE_ENV === "development" ? collection : []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_UPDATE_RESOLVED:
      return {
        ...state,
        games: state.games.find(game => game.name === action.payload.game.name)
          ? state.games.map(game => ({
              ...(game.name === action.payload.game.name
                ? action.payload.game
                : game)
            }))
          : [...state.games, action.payload.game]
      };
    default:
      return state;
  }
};
