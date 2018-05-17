const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "dist",
    historyApiFallback: true,
    open: "Google Chrome",
    overlay: true,
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    },
    stats: "errors-only"
  }
});
