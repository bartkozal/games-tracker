import ordinalify from "./ordinalify";

describe("ordinalify", () => {
  it("converts number to oridinal number word", () => {
    expect(ordinalify(3)).toEqual("third");
    expect(ordinalify(4)).toEqual("quarter");
    expect(ordinalify(5)).toEqual("fifth");
    expect(ordinalify(20)).toEqual("");
  });
});
