import { combineReducers } from "redux";
import currentUser from "features/CurrentUser/reducer";
import search from "features/Search/reducer";

const rootReducer = combineReducers({
  currentUser,
  search
});

export default rootReducer;
