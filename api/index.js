const { API_PORT } = require("./config");
const api = require("./server");

api.get("/", (_, res) => res.json({ version: "v1" }));

api.listen(API_PORT);
