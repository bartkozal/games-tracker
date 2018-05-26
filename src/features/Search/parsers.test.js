import { parseResults } from "./parsers";
import responseResultsData from "./mocks/responseResultsData";

test("transformSearchResults", () => {
  const returnedValue = parseResults(responseResultsData);
  const expectedValue = [
    {
      name: "Max Payne",
      cover:
        "https://www.giantbomb.com/api/image/scale_avatar/2737109-maxpayne.jpg",
      platforms: [
        "GBA",
        "MAC",
        "PS2",
        "XBOX",
        "XBGS",
        "PS3N",
        "PC",
        "IPHN",
        "IPAD",
        "ANDR",
        "PS4"
      ]
    },
    {
      name: "Max Payne 3",
      cover:
        "https://www.giantbomb.com/api/image/scale_avatar/2737108-maxpayne3.jpg",
      platforms: ["MAC", "X360", "PS3", "XBGS", "PS3N", "PC"]
    },
    {
      name: "Max Payne 2: The Fall of Max Payne",
      cover:
        "https://www.giantbomb.com/api/image/scale_avatar/2737112-maxpayne2.jpg",
      platforms: ["PS2", "XBOX", "PC"]
    }
  ];

  expect(returnedValue).toHaveLength(3);

  returnedValue.forEach((item, n) => expect(item).toEqual(expectedValue[n]));
});
