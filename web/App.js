// @flow
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "config/store";
import "config/css";
import {
  ROOT_PATH,
  SEARCH_PATH,
  GAME_PATH,
  PROFILE_PATH,
  LOGIN_PATH
} from "config/routes";
import AppRoute from "layouts/App/Route";
import AuthRoute from "layouts/Auth/Route";
import DiscoverPage from "pages/Discover";
import SearchPage from "pages/Search";
import GamePage from "pages/Game";
import ProfilePage from "pages/Profile";
import LoginPage from "pages/Login";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <AppRoute exact path={ROOT_PATH} component={DiscoverPage} />
        <AppRoute path={SEARCH_PATH} component={SearchPage} />
        <AppRoute path={GAME_PATH} component={GamePage} />
        <AppRoute path={PROFILE_PATH} component={ProfilePage} />

        <AuthRoute path={LOGIN_PATH} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
