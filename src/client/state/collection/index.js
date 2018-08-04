import {
  GAME_UPDATE_RESOLVED,
  GAMES_RESOLVED,
  GAMES_BULK_UPDATE_RESOLVED
} from "./actionTypes";

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
            game.id === action.payload.game.id
              ? { ...game, ...action.payload.game }
              : game
        )
      };
    case GAMES_BULK_UPDATE_RESOLVED:
      return {
        ...state,
        games: state.games.map(game => {
          const updatedGame = action.payload.games.find(g => g.id === game.id);
          return updatedGame ? { ...game, ...updatedGame } : game;
        })
      };
    default:
      return state;
  }
};
