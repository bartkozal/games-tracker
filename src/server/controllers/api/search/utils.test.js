import { parseSearchResults } from "./utils";
import igdbResponseData from "igdbResponseData";

test("parseSearchResults", () => {
  const returnedValue = parseSearchResults(igdbResponseData);
  const expected = [
    {
      name: "The Witcher 3: Wild Hunt",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/tri1c6vbydeosoqajwt1.jpg",
      platforms: ["PC", "PS4", "XONE"],
      igdb: 1942
    },
    {
      name: "The Witcher 2: Assassins of Kings",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/mcou7xzxq0qnerehesrh.jpg",
      platforms: ["PC", "X360"],
      igdb: 478
    },
    {
      name: "The Witcher",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/nrkdzmkevbbevdvm9bxh.jpg",
      platforms: ["PC"],
      igdb: 80
    }
  ];

  expect(returnedValue).toHaveLength(3);
  expect(returnedValue).toEqual(expected);
});
