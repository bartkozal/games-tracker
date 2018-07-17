import { parseUserGames, parseUserRatings } from "./utils";

test("parseUserGames", () => {
  const userGames = [
    {
      _id: "5b4d115e8101b98ff3b51e28",
      status: "backlog",
      platforms: ["MAC"],
      game: {
        _id: "5b4cfdd36bce058728d62875",
        platforms: ["PC", "MAC", "X360", "LIN"],
        name: "The Witcher 2: Assassins of Kings",
        cover:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/mcou7xzxq0qnerehesrh.jpg"
      }
    }
  ];
  const expected = [
    {
      id: "5b4cfdd36bce058728d62875",
      name: "The Witcher 2: Assassins of Kings",
      cover:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/mcou7xzxq0qnerehesrh.jpg",
      platforms: ["PC", "MAC", "X360", "LIN"],
      userPlatforms: ["MAC"],
      status: "backlog"
    }
  ];

  expect(parseUserGames(userGames)).toEqual(expected);
});

test("parseUserRatings", () => {
  const userRatings = [
    {
      _id: "5b4d2b9acb03320e2cf5ec5f",
      game: "5b4d2b815440719bb5295688",
      user: "5b4d2b845440719bb5295691",
      __v: 0,
      value: 7
    },
    {
      _id: "5b4d920fcb03320e2cf5ef78",
      game: "5b4d9200134d4da11e157284",
      user: "5b4d2b845440719bb5295691",
      __v: 0,
      value: 3
    }
  ];
  const expected = [
    {
      id: "5b4d2b815440719bb5295688",
      rating: 7
    },
    {
      id: "5b4d9200134d4da11e157284",
      rating: 3
    }
  ];

  expect(parseUserRatings(userRatings)).toEqual(expected);
});
