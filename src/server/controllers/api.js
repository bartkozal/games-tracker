import { Router } from "express";
import search from "./api/search";

const api = Router();

api.use("/search", search);

// passport.authenticate('jwt', {session: false})

export default api;
