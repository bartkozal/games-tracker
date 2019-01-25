import { combineReducers } from "redux";
import Auth from "./auth";
import Collection from "./collection";
import Search from "./search";
import UI from "./ui";

export default combineReducers({
  Auth,
  Collection,
  Search,
  UI
});
