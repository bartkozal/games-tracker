import { Status } from "../../constants";
import {
  requestResults,
  resolveResults,
  rejectResults,
  clearResults,
  updateQuery
} from "./actionCreators";
import {
  resolveGameUpdate,
  resolveGamesBulkUpdate
} from "../collection/actionCreators";
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

  test("RESULTS_CLEARED", () => {
    const action = clearResults();
    const returnedState = reducer(
      { ...initialState, results: [{ id: "foo" }], query: "foo" },
      action
    );

    expect(returnedState).toMatchObject({
      results: [],
      query: ""
    });
  });

  test("QUERY_UPDATED", () => {
    const action = updateQuery("foo");
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchObject({
      query: "foo"
    });
  });

  test("GAME_UPDATE_RESOLVED", () => {
    const action = resolveGameUpdate({
      id: "foo",
      status: Status.BACKLOG
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
            status: Status.WISHLIST
          }
        ]
      },
      action
    );

    expect(returnedState.results).toEqual([
      {
        id: "foo",
        status: Status.BACKLOG
      },
      {
        id: "bar",
        status: Status.WISHLIST
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
            status: Status.BACKLOG
          }
        ]
      },
      action
    );

    expect(returnedState.results).toContainEqual({
      id: "foo",
      status: Status.BACKLOG,
      rating: 8
    });
  });
});
