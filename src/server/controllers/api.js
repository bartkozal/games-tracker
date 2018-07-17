import { Router } from "express";
import passport from "passport";
import search from "./api/search";
import scores from "./api/scores";
import user from "./api/user";

const api = Router();

api.use("/search", search);
api.use("/scores", scores);
api.use("/user", passport.authenticate("jwt", { session: false }), user);

export default api;
