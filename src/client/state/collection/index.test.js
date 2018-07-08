import { resolveGameUpdate } from "./actionCreators";
import { statusType } from "./types";
import reducer, { initialState } from ".";

describe("Collection reducer", () => {
  xtest("GAME_UPDATE_RESOLVED", () => {
    const action = resolveGameUpdate({
      name: "Foo Bar",
      status: statusType.BACKLOG
    });
    const returnedState = reducer(initialState, action);
  });
});
