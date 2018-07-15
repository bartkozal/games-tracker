import { resolveGameUpdate, resolveGames } from "./actionCreators";
import { statusType } from "./types";
import reducer, { initialState } from ".";

describe("Collection", () => {
  test("GAMES_RESOLVED", () => {
    const action = resolveGames([{ name: "Foo" }]);
    const returnedState = reducer(initialState, action);

    expect(returnedState.games).toEqual([{ name: "Foo" }]);
  });

  test("GAME_UPDATE_RESOLVED", () => {
    const action = resolveGameUpdate({
      id: "foo",
      status: statusType.COMPLETED
    });
    const returnedState = reducer(
      {
        ...initialState,
        games: [
          {
            id: "foo",
            status: statusType.BACKLOG
          }
        ]
      },
      action
    );

    expect(returnedState.games).toContainEqual({
      id: "foo",
      status: statusType.COMPLETED
    });
  });
});
