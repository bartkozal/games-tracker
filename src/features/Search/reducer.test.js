import {
  updateQuery,
  requestResults,
  resolveResults,
  rejectResults
} from "./actionCreators";
import reducer, { initialState } from "./reducer";

describe("Search reducer", () => {
  test("updateQuery", () => {
    const action = updateQuery("foo");
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchObject({ query: "foo" });
  });

  test("requestResults", () => {
    const action = requestResults();
    const returnedState = reducer({ ...initialState, query: "foo" }, action);

    expect(returnedState).toMatchObject({ isSearching: true, query: "foo" });
  });

  test("resolveResults", () => {
    const action = resolveResults([{ foo: "bar" }]);
    const returnedState = reducer(
      { ...initialState, isSearching: true, query: "foo" },
      action
    );

    expect(returnedState).toMatchObject({
      isSearching: false,
      results: [{ foo: "bar" }],
      query: ""
    });
  });

  test("rejectResults", () => {
    const action = rejectResults();
    const returnedState = reducer(
      { ...initialState, isSearching: true, query: "foo" },
      action
    );

    expect(returnedState).toMatchObject({
      isSearching: false,
      results: [],
      query: ""
    });
  });
});
