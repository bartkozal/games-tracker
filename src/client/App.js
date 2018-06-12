import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROOT_PATH, PROFILE_PATH } from "./config/routes";
import BaseLayout from "./layouts/BaseLayout";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => (
  <BaseLayout>
    <Switch>
      <Route exact path={ROOT_PATH} component={SearchPage} />
      <Route path={PROFILE_PATH} component={ProfilePage} />
    </Switch>
  </BaseLayout>
);

export default App;
