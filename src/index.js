import app from "./server";
import http from "http";

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, err => {
  if (err) {
    console.error(err);
  }

  console.log("-> Server started");
});

if (module.hot) {
  console.log("-> HMR enabled");

  module.hot.accept("./server", () => {
    server.removeListener("request", currentApp);
    const newApp = require("./server").default;
    server.on("request", newApp);
    currentApp = newApp;
  });
}
