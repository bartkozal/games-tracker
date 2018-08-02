import db from "../config/db";
import Platform from "./platform";
import User from "./user";

export default db.Model.extend({
  tableName: "games",
  hasTimestamps: true,
  platforms() {
    return this.belongsToMany(Platform);
  },
  users() {
    return this.belongsToMany(User);
  }
});
