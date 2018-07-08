import { resolveGameUpdate } from "./actionCreators";

export const updateGame = game => dispatch => {
  dispatch(resolveGameUpdate(game));
};
