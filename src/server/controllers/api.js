import { Router } from "express";
import passport from "passport";
import search from "./api/search";
import user from "./api/user";

const api = Router();

api.use("/search", search);
api.use("/user", passport.authenticate("jwt", { session: false }), user);

export default api;
