import express from "express";
import morgan from "morgan";
import initDatabase from "./config/db";
import api from "./controllers/api";
import app from "./controllers/app";

connectToDatabase();
initDatabase();

const server = express();

server
  .disable("x-powered-by")
  .use(morgan("tiny"))
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use("/api", api)
  .get("*", app);

export default server;
