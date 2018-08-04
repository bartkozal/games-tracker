import Base from "./Base";
import Platform from "./Platform";

export default class UserGame extends Base {
  static tableName = "users_games";

  static relationMappings = {
    platforms: {
      relation: Base.ManyToManyRelation,
      modelClass: Platform,
      join: {
        from: "users_games.id",
        through: {
          from: "users_games_platforms.user_game_id",
          to: "users_games_platforms.platform_id"
        },
        to: "platforms.id"
      }
    }
  };
}
