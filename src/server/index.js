import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { extractCritical } from "emotion-server";
import { Provider } from "react-redux";
import express from "express";
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
      res.status(200).send(
        `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>Games Tracker</title>
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ""
            }
            ${css ? `<style>${css}</style>` : ""}
            <script>window.__emotion = ${JSON.stringify(ids)}</script>
            ${
              process.env.NODE_ENV === "production"
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${
                    assets.client.js
                  }" defer crossorigin></script>`
            }
          </head>

          <body>
            <div id="root">${html}</div>
          </body>
        </html>`
      );
    }
  });

export default server;
