import { Router } from "express";
import search from "./api/search";

const api = Router();

api.use("/search", search);

export default api;
