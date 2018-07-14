import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import initDatabase from "./config/db";
import initPassport from "./config/passport";
import auth from "./controllers/auth";
import api from "./controllers/api";
import app from "./controllers/app";

initDatabase();
initPassport();

const server = express();

server
  .disable("x-powered-by")
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use("/auth", auth)
  .use("/api", api)
  .get("*", app);

export default server;
