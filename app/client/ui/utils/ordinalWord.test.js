import ordinalWord from "./ordinalWord";

describe("ordinalWord", () => {
  it("converts number to oridinal word", () => {
    expect(ordinalWord(3)).toEqual("third");
    expect(ordinalWord(4)).toEqual("quarter");
    expect(ordinalWord(5)).toEqual("fifth");
    expect(ordinalWord(20)).toEqual("");
  });
});
