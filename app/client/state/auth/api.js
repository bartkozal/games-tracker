import axios from "axios";
import { API_USER } from "../../routes/api";
import { setAuthToken } from "../utils";

export const deleteUser = token =>
  axios.delete(API_USER, {
    ...setAuthToken(token)
  });
