import { combineReducers } from "redux";
import Auth from "./auth";
import Collection from "./collection";
import Search from "./search";

export default combineReducers({
  Auth,
  Collection,
  Search
});
