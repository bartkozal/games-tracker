import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { extractCritical } from "emotion-server";
import { Provider } from "react-redux";
import { renderIndex } from "../views/app";
import App from "../../client/App";
import store from "../../client/state/store";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const app = (req, res) => {
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
    const view = renderIndex({
      html,
      css: assets.client.css,
      js: assets.client.js,
      inlineCSS: css,
      emotionCSS: JSON.stringify(ids)
    });

    res.status(200).send(view);
  }
};

export default app;
