// @flow
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { ROOT_PATH, PRiVACY_POLICY_PATH } from "routes/paths";
import HomePage from "ui/pages/HomePage";
import PrivacyPolicyPage from "ui/pages/PrivacyPolicyPage";
import Layout from "ui/components/Layout";
import "./global.css";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path={ROOT_PATH} component={HomePage} />
      <Route path={PRiVACY_POLICY_PATH} component={PrivacyPolicyPage} />
    </Switch>
  </Layout>
);

export default App;
