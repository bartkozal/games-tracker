import { signUserIn, signUserOut } from "./actionCreators";
import reducer, { initialState } from "./";

describe("Auth reducer", () => {
  test("signUserIn", () => {
    const action = signUserIn({ email: "foo@example.com" });
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchObject({
      currentUser: { email: "foo@example.com" }
    });
  });

  test("signUserOut", () => {
    const action = signUserOut();
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchObject({ currentUser: {} });
  });
});
