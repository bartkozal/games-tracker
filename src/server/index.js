import express from "express";
import connectToDatabase from "./db";
import api from "./controllers/api";
import app from "./controllers/app";

connectToDatabase();

const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use("/api", api)
  .get("*", app);

export default server;
