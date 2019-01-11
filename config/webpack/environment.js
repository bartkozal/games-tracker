const { environment } = require("@rails/webpacker");

// Insert react-svg-loader
const babelLoader = environment.loaders.get("babel");
environment.loaders.insert(
  "svg",
  {
    test: /\.svg$/,
    use: babelLoader.use.concat([
      {
        loader: "react-svg-loader",
        options: {
          jsx: true
        }
      }
    ])
  },
  { after: "file" }
);

environment.loaders
  .get("sass")
  .use.find(({ loader }) => loader === "sass-loader").options.includePaths = [
  "app/client"
];

// Exclude .svg from file-loader
const fileLoader = environment.loaders.get("file");
fileLoader.exclude = /\.(svg)$/i;

module.exports = environment;
