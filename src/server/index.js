import express from "express";
import app from "./controllers/app";

const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", app);

export default server;
