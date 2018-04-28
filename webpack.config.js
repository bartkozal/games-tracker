const { resolve } = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIR_WEB = "web";
const DIR_OUTPUT = "dist";

module.exports = {
  mode: "development",
  entry: `./${DIR_WEB}/index.js`,
  output: {
    filename: `${DIR_WEB}.bundle.js`,
    path: resolve(__dirname, DIR_OUTPUT)
  },
  resolve: {
    modules: [DIR_WEB, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader", "eslint-loader", "stylelint-custom-processor-loader"]
      }
    ]
  },
  devServer: {
    contentBase: DIR_OUTPUT,
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
  },
  plugins: [
    new CleanWebpackPlugin([DIR_OUTPUT]),
    new HtmlWebpackPlugin({
      template: `${DIR_WEB}/index.html`
    }),
  ]
};
