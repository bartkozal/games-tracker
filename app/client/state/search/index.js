import {
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED,
  RESULTS_CLEARED,
  QUERY_UPDATED
} from "./actionTypes";
import {
  GAME_UPDATE_RESOLVED,
  GAMES_BULK_UPDATE_RESOLVED
} from "../collection/actionTypes";

export const initialState = {
  isSearching: false,
  results: [],
  query: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESULTS_REQUESTED:
      return {
        ...state,
        isSearching: true,
        results: []
      };
    case RESULTS_RESOLVED:
      return {
        ...state,
        isSearching: false,
        results: action.payload.results
      };
    case RESULTS_REJECTED:
      return {
        ...state,
        isSearching: false,
        results: []
      };
    case RESULTS_CLEARED:
      return {
        ...state,
        results: [],
        query: ""
      };
    case QUERY_UPDATED:
      return {
        ...state,
        query: action.payload.query
      };
    case GAME_UPDATE_RESOLVED:
      return {
        ...state,
        results: state.results.map(game =>
          game.id === action.payload.game.id
            ? { ...game, ...action.payload.game }
            : game
        )
      };
    case GAMES_BULK_UPDATE_RESOLVED:
      return {
        ...state,
        results: state.results.map(game => {
          const updatedGame = action.payload.games.find(g => g.id === game.id);
          return updatedGame ? { ...game, ...updatedGame } : game;
        })
      };
    default:
      return state;
  }
};
