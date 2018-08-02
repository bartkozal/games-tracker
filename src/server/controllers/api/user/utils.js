export const parseUserGames = userGames =>
  userGames.map(({ gameId: game, platforms: userPlatforms, status }) => ({
    id: game._id,
    name: game.name,
    cover: game.cover,
    platforms: game.platforms,
    userPlatforms: userPlatforms,
    status: status
  }));
