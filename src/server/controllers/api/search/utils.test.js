import { transformSearchResults } from "./utils";
import searchResults from "searchResults";

test("transformSearchResults", () => {
  const returnedValue = transformSearchResults(searchResults);
  const expected = [
    {
      name: "The Witcher 3: Wild Hunt",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/tri1c6vbydeosoqajwt1.jpg",
      platforms: ["PC", "PS4", "XONE"]
    },
    {
      name: "The Witcher 2: Assassins of Kings",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/mcou7xzxq0qnerehesrh.jpg",
      platforms: ["PC", "MAC", "X360", "LIN"]
    },
    {
      name: "The Witcher",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/nrkdzmkevbbevdvm9bxh.jpg",
      platforms: ["PC", "MAC"]
    }
  ];

  expect(returnedValue).toHaveLength(3);

  returnedValue.forEach((item, n) => expect(item).toEqual(expected[n]));
});
