const path = require("path");

module.exports = {
  mode: "development",
  entry: "./web/index.js",
  output: {
    filename: "web.js",
    path: path.resolve(__dirname, "dist")
  }
};
