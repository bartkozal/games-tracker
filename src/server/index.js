import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { extractCritical } from "emotion-server";
import { Provider } from "react-redux";
import express from "express";
import { render as renderTemplate } from "./template";
import App from "../client/App";
import store from "../client/config/store";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const context = {};
    const { html, css, ids } = extractCritical(
      renderToString(
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      )
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      const template = renderTemplate({
        html,
        css: assets.client.css,
        js: assets.client.js,
        inlineCSS: css,
        emotionCSS: JSON.stringify(ids)
      });

      res.status(200).send(template);
    }
  });

export default server;
