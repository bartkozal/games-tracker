import { LOG_USER_IN } from "./actionTypes";

export const logUserIn = () => ({
  type: LOG_USER_IN,
  payload: {
    isLoggedIn: true
  }
});
