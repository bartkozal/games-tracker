import { updateGame } from "./actionCreators";

export const requestGameUpdate = game => dispatch => {
  dispatch(updateGame(game));
};
