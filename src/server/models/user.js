import BaseModel from "./BaseModel";
import Game from "./Game";

export default class User extends BaseModel {
  static tableName = "users";

  static relationMappings = {
    games: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Game,
      join: {
        from: "users.id",
        throguh: {
          from: "users_games.user_id",
          to: "users_games.game_id"
        },
        to: "games.id"
      }
    }
  };
}
