import { resolveGameUpdate } from "./actionCreators";
import { statusType } from "./types";
import reducer, { initialState } from ".";

describe("Collection", () => {
  describe("GAME_UPDATE_RESOLVED", () => {
    test("for a new game in collection", () => {
      const action = resolveGameUpdate({
        name: "Foo",
        status: statusType.BACKLOG
      });
      const returnedState = reducer(initialState, action);

      expect(returnedState.games).toContainEqual({
        name: "Foo",
        status: statusType.BACKLOG
      });
    });

    test("for existing game in collection", () => {
      const action = resolveGameUpdate({
        name: "Foo",
        status: statusType.COMPLETED
      });
      const returnedState = reducer(
        {
          ...initialState,
          games: [
            {
              name: "Foo",
              status: statusType.BACKLOG
            }
          ]
        },
        action
      );

      expect(returnedState.games).toContainEqual({
        name: "Foo",
        status: statusType.COMPLETED
      });
    });
  });
});
