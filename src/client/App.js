import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROOT_PATH, PROFILE_PATH } from "./routes/paths";
import Layout from "./ui/templates/Layout";
import SearchPage from "./ui/pages/SearchPage";
import ProfilePage from "./ui/pages/ProfilePage";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path={ROOT_PATH} component={SearchPage} />
      <Route path={PROFILE_PATH} component={ProfilePage} />
    </Switch>
  </Layout>
);

export default App;
