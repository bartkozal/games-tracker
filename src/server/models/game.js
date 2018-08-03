import BaseModel from "./BaseModel";
import Platform from "./Platform";

export default class Game extends BaseModel {
  static tableName = "games";

  static relationMappings = {
    platforms: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Platform,
      join: {
        from: "games.id",
        throguh: {
          from: "games_platforms.game_id",
          to: "games_platforms.platform_id"
        },
        to: "platforms.id"
      }
    }
  };
}
