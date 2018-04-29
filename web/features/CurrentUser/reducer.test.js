import reducer, { initialState } from "./reducer";
import { logUserIn } from "./actionCreators";

describe("reducer", () => {
  test("logUserIn", () => {
    const newState = reducer(initialState, logUserIn());

    expect(newState).toMatchObject({
      isLoggedIn: true
    });
  });
});
