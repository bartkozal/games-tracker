import cypressify from "./cypressify";

describe("cypressify", () => {
  it("converts string to cypress id", () => {
    const returnedValue = cypressify("Sign in with Facebook");
    const expected = "sign-in-with-facebook";

    expect(returnedValue).toEqual(expected);
  });
});
