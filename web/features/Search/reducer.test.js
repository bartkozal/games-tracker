import reducer, { initialState } from "./reducer";
import { updateSearchQuery } from "./actionCreators";

describe("reducer", () => {
  test("updateQuery", () => {
    const newState = reducer(initialState, updateSearchQuery("foo"));

    expect(newState).toMatchObject({
      query: "foo"
    });
  });
});
