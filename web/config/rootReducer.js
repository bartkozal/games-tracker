import { combineReducers } from "redux";
import currentUser from "features/CurrentUser/reducer";

const rootReducer = combineReducers({
  currentUser
});

export default rootReducer;
