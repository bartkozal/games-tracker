import db from "../config/db";
import Game from "./game";

export default db.Model.extend({
  tableName: "users",
  hasTimestamps: true,
  games() {
    return this.belongsToMany(Game);
  }
});
