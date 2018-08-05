import { parseSearchResults } from "./utils";
import igdbResponseData from "igdbResponseData";

// TODO fix
xtest("parseSearchResults", async () => {
  const returnedValue = await parseSearchResults(igdbResponseData);
  const expected = [
    {
      name: "The Witcher 3: Wild Hunt",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/tri1c6vbydeosoqajwt1.jpg",
      platforms: [{ slug: "PC" }, { slug: "PS4" }, { slug: "XONE" }],
      igdb: 1942
    },
    {
      name: "The Witcher 2: Assassins of Kings",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/mcou7xzxq0qnerehesrh.jpg",
      platforms: [{ slug: "PC" }, { slug: "X360" }],
      igdb: 478
    },
    {
      name: "The Witcher",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/nrkdzmkevbbevdvm9bxh.jpg",
      platforms: [{ slug: "PC" }],
      igdb: 80
    }
  ];

  expect(returnedValue).toHaveLength(3);
  expect(returnedValue).toEqual(expected);
});
