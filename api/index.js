const express = require("express");
const api = express();

const API_PORT = process.env.PORT || 8080;

api.get("/", (_, res) => res.json({ version: "v1" }));

// eslint-disable-next-line no-console
api.listen(API_PORT);
