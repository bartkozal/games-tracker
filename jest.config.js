module.exports = {
  testURL: "http://localhost/",
  testMatch: ["**/app/client/**/?(*.)+(test).js"],
  moduleDirectories: ["app/client", "node_modules"],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
  }
};
