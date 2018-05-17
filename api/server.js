const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");
const timeout = require("connect-timeout");
const helmet = require("helmet");

const server = express();

if (process.env.NODE_ENV !== "test") {
  server.use(timeout(process.env.API_TIMEOUT));
  server.use(helmet());
  server.use(bodyParser.json());
  server.use(morgan(process.env.NODE_ENV));
  server.use(cors());
  server.use(compression());
}

module.exports = server;
