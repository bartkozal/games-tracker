import {
  RESULTS_REQUESTED,
  RESULTS_RESOLVED,
  RESULTS_REJECTED
} from "./actionTypes";
import { GAME_UPDATE_RESOLVED } from "../collection/actionTypes";
import searchResults from "./__mocks__/searchResults";

export const initialState = {
  isSearching: false,
  results: process.env.NODE_ENV === "development" ? searchResults : []
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
        results: state.results.map(game => ({
          ...(game.name === action.payload.game.name
            ? action.payload.game
            : game)
        }))
      };
    default:
      return state;
  }
};
