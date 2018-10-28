import formatTestId from "./formatTestId";

describe("formatTestId", () => {
  it("converts string to cypress friendly id", () => {
    expect(formatTestId("Logo")).toEqual("logo");
    expect(formatTestId("Score Value")).toEqual("score-value");
  });

  it("converts multiple strings to cypress friendly id", () => {
    expect(formatTestId("button", "Sign in with Facebook")).toEqual(
      "button-sign-in-with-facebook"
    );
  });
});
