import {
  requestResults,
  resolveResults,
  rejectResults
} from "./actionCreators";
import {
  resolveGameUpdate,
  resolveGamesBulkUpdate
} from "../collection/actionCreators";
import { statusType } from "../collection/types";
import reducer, { initialState } from "./";

describe("Search", () => {
  test("RESULTS_REQUESTED", () => {
    const action = requestResults();
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchObject({ isSearching: true });
  });

  test("RESULTS_RESOLVED", () => {
    const action = resolveResults([{ foo: "bar" }]);
    const returnedState = reducer(
      { ...initialState, isSearching: true },
      action
    );

    expect(returnedState).toMatchObject({
      isSearching: false,
      results: [{ foo: "bar" }]
    });
  });

  test("RESULTS_REJECTED", () => {
    const action = rejectResults();
    const returnedState = reducer(
      { ...initialState, isSearching: true },
      action
    );

    expect(returnedState).toMatchObject({
      isSearching: false,
      results: []
    });
  });

  test("GAME_UPDATE_RESOLVED", () => {
    const action = resolveGameUpdate({
      id: "foo",
      status: statusType.BACKLOG
    });
    const returnedState = reducer(
      {
        ...initialState,
        results: [
          {
            id: "foo",
            status: null
          },
          {
            id: "bar",
            status: statusType.WISHLIST
          }
        ]
      },
      action
    );

    expect(returnedState.results).toEqual([
      {
        id: "foo",
        status: statusType.BACKLOG
      },
      {
        id: "bar",
        status: statusType.WISHLIST
      }
    ]);
  });

  test("GAMES_BULK_UPDATE_RESOLVED", () => {
    const action = resolveGamesBulkUpdate([{ id: "foo", rating: 8 }]);
    const returnedState = reducer(
      {
        ...initialState,
        results: [
          {
            id: "foo",
            status: statusType.BACKLOG
          }
        ]
      },
      action
    );

    expect(returnedState.results).toContainEqual({
      id: "foo",
      status: statusType.BACKLOG,
      rating: 8
    });
  });
});
