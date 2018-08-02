import db from "../config/db";
import Platform from "./platform";

export default db.Model.extend({
  tableName: "users_games",
  hasTimestamps: true,
  platforms() {
    return this.belongsToMany(Platform);
  }
});
