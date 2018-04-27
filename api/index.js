const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");
const timeout = require("connect-timeout");
const helmet = require("helmet");

const API_PORT = process.env.PORT || 8080;
const API_TIMEOUT = 40;

const api = express();

api.use(timeout(1000 * API_TIMEOUT));
api.use(helmet());
api.use(bodyParser.json());
api.use(morgan("dev"));
api.use(cors());
api.use(compression());

api.get("/", (_, res) => res.json({ version: "v1" }));

// eslint-disable-next-line no-console
api.listen(API_PORT);
