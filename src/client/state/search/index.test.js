import {
  requestResults,
  resolveResults,
  rejectResults
} from "./actionCreators";
import reducer, { initialState } from "./";

describe("Search reducer", () => {
  test("requestResults", () => {
    const action = requestResults();
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchObject({ isSearching: true });
  });

  test("resolveResults", () => {
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

  test("rejectResults", () => {
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
});
