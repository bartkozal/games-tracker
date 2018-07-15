import {
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED
} from "./actionTypes";
import { GAME_UPDATE_RESOLVED } from "../collection/actionTypes";

export const initialState = {
  isSearching: false,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESULTS_REQUESTED:
      return {
        ...state,
        isSearching: true
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
    case GAME_UPDATE_RESOLVED:
      return {
        ...state,
        results: state.results.map(
          game =>
            game.id === action.payload.game.id ? action.payload.game : game
        )
      };
    default:
      return state;
  }
};
