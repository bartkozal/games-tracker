import { GAME_UPDATE_RESOLVED } from "./actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_UPDATE_RESOLVED: // TODO
    default:
      return state;
  }
};
