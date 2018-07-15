import { GAME_UPDATE_RESOLVED, GAMES_RESOLVED } from "./actionTypes";

const initialState = {
  games: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAMES_RESOLVED:
      return {
        ...state,
        games: action.payload.games
      };
    case GAME_UPDATE_RESOLVED:
      return {
        ...state,
        games: state.games.map(
          game =>
            game.id === action.payload.game.id ? action.payload.game : game
        )
      };
    default:
      return state;
  }
};
