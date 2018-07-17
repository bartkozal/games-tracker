export const parseUserGames = userGames =>
  userGames.map(userGame => ({
    id: userGame.game._id,
    name: userGame.game.name,
    cover: userGame.game.cover,
    platforms: userGame.game.platforms,
    userPlatforms: userGame.platforms,
    status: userGame.status
  }));

export const parseUserRatings = userRatings =>
  userRatings.map(userRating => ({
    id: userRating.game,
    rating: userRating.value
  }));
