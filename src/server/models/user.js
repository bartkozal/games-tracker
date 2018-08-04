import Base from "./Base";
import Game from "./Game";

export default class User extends Base {
  static tableName = "users";

  static relationMappings = {
    games: {
      relation: Base.ManyToManyRelation,
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
