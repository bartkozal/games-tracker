import React from "react";
import ReactDOM from "react-dom";
import { hydrate } from "emotion";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";
import "../../node_modules/modern-normalize/modern-normalize.css";
import "./global.css";

hydrate(window.__emotion);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
