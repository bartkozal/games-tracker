const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");
const timeout = require("connect-timeout");
const helmet = require("helmet");

const { API_TIMEOUT, NODE_ENV } = require("./config");

const server = express();

server.use(timeout(API_TIMEOUT));
server.use(helmet());
server.use(bodyParser.json());
server.use(morgan(NODE_ENV));
server.use(cors());
server.use(compression());

module.exports = server;
