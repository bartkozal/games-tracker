import { signUserIn, signUserOut } from "./actionCreators";
import reducer, { initialState } from "./";

describe("Auth", () => {
  test("USER_SIGNED_IN", () => {
    const action = signUserIn({ email: "foo@example.com" });
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchObject({
      currentUser: { email: "foo@example.com" }
    });
  });

  test("USER_SIGNED_OUT", () => {
    const action = signUserOut();
    const returnedState = reducer(initialState, action);

    expect(returnedState).toMatchObject({ currentUser: {} });
  });
});
