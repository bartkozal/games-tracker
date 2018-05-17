const { resolve } = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./web/index.js",
  output: {
    filename: "[name].[hash].bundle.js",
    path: resolve(__dirname, "dist")
  },
  resolve: {
    modules: ["web", "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          "babel-loader",
          "eslint-loader",
          "stylelint-custom-processor-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "web/index.html"
    })
  ]
};
