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

// Exclude .svg from file-loader
const fileLoader = environment.loaders.get("file");
fileLoader.exclude = /\.(svg)$/i;

module.exports = environment;
