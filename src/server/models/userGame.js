import BaseModel from "./BaseModel";
import Platform from "./Platform";

export default class UserGame extends BaseModel {
  static tableName = "users_games";

  static relationMappings = {
    platforms: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Platform,
      join: {
        from: "users_games.id",
        throguh: {
          from: "users_games_platforms.user_game_id",
          to: "users_games_platforms.platform_id"
        },
        to: "platforms.id"
      }
    }
  };
}
