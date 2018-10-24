import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROOT_PATH } from "routes/paths";
import HomePage from "ui/pages/HomePage";
import Layout from "ui/containers/Layout";
import "./global.css";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path={ROOT_PATH} component={HomePage} />
    </Switch>
  </Layout>
);

export default App;
