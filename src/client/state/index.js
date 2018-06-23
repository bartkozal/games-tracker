// @flow
import { combineReducers } from "redux";
import Search, { type State as SearchState } from "./search";
import Auth, { type State as AuthState } from "./auth";

export type State = {
  Search: SearchState,
  Auth: AuthState
};

export default combineReducers({
  Search,
  Auth
});
