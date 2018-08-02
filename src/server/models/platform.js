import db from "../config/db";
import Game from "./game";
import UserGame from "./userGame";

export default db.Model.extend({
  tableName: "platforms",
  hasTimestamps: true,
  games() {
    return this.belongsToMany(Game);
  },
  usersGames() {
    return this.belongsToMany(UserGame);
  }
});
