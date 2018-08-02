import { parseUserGames } from "./utils";

test("parseUserGames", () => {
  const userGames = [
    {
      _id: "5b4d115e8101b98ff3b51e28",
      status: "backlog",
      platforms: ["PC"],
      gameId: {
        _id: "5b4cfdd36bce058728d62875",
        platforms: ["PC", "X360", "LIN"],
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
      platforms: ["PC", "X360", "LIN"],
      userPlatforms: ["PC"],
      status: "backlog"
    }
  ];

  expect(parseUserGames(userGames)).toEqual(expected);
});
