import { Status } from "constants";
import {
  resolveGameUpdate,
  resolveGames,
  resolveGamesBulkUpdate
} from "./actionCreators";
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
      status: Status.COMPLETED
    });
    const returnedState = reducer(
      {
        ...initialState,
        games: [
          {
            id: "foo",
            status: Status.BACKLOG
          }
        ]
      },
      action
    );

    expect(returnedState.games).toContainEqual({
      id: "foo",
      status: Status.COMPLETED
    });
  });

  test("GAMES_BULK_UPDATE_RESOLVED", () => {
    const action = resolveGamesBulkUpdate([{ id: "foo", rating: 8 }]);
    const returnedState = reducer(
      {
        ...initialState,
        games: [
          {
            id: "foo",
            status: Status.BACKLOG
          }
        ]
      },
      action
    );

    expect(returnedState.games).toContainEqual({
      id: "foo",
      status: Status.BACKLOG,
      rating: 8
    });
  });
});
