const app = require("./server");

app.get("/", (_, res) => res.json({ version: "v1" }));

module.exports = app;
