import cookies from "js-cookie";
import { signUserIn, signUserOut } from "./actionCreators";
import { closeModal } from "../ui/actionCreators";
import { deleteUser } from "./api";

export const setCurrentUser = () => dispatch => {
  const currentUser =
    cookies.get("auth") && JSON.parse(decodeURIComponent(cookies.get("auth")));

  if (currentUser) {
    dispatch(signUserIn(currentUser));
  }
};

export const removeCurrentUser = () => (dispatch, getState) => {
  const { token } = getState().Auth.currentUser;

  deleteUser(token).then(() => {
    cookies.remove("auth");
    dispatch(closeModal());
    dispatch(signUserOut());
  });
};

export const signOut = () => dispatch => {
  cookies.remove("auth");
  dispatch(signUserOut());
};
