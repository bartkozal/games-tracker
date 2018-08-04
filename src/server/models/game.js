import Base from "./Base";
import Platform from "./Platform";

export default class Game extends Base {
  static tableName = "games";

  static relationMappings = {
    platforms: {
      relation: Base.ManyToManyRelation,
      modelClass: Platform,
      join: {
        from: "games.id",
        through: {
          from: "games_platforms.game_id",
          to: "games_platforms.platform_id"
        },
        to: "platforms.id"
      }
    }
  };
}
