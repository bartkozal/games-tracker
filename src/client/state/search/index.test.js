import {
  requestResults,
  resolveResults,
  rejectResults
} from "./actionCreators";
import { resolveGameUpdate } from "../collection/actionCreators";
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
      name: "Foo",
      status: statusType.BACKLOG
    });
    const returnedState = reducer(
      {
        ...initialState,
        results: [
          {
            name: "Foo",
            status: null
          },
          {
            name: "Bar",
            status: statusType.WISHLIST
          }
        ]
      },
      action
    );

    expect(returnedState.results).toEqual([
      {
        name: "Foo",
        status: statusType.BACKLOG
      },
      {
        name: "Bar",
        status: statusType.WISHLIST
      }
    ]);
  });
});
