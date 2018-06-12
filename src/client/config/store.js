import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Search from "../features/Search/reducer";
import Auth from "../features/Auth/reducer";

const rootReducer = combineReducers({
  Search,
  Auth
});

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
