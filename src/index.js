import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./config/store";
import "../node_modules/modern-normalize/modern-normalize.css";

ReactDOM.render(<App store={store} />, document.getElementById("root"));
