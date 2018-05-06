// @flow
import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "config/store";
import "config/css";
import {
  ROOT_PATH,
  SEARCH_RESULTS_PATH,
  GAME_DETAILS_PATH,
  PROFILE_PATH,
  LOGIN_PATH,
  NOT_FOUND_PATH
} from "config/routes";
import AppRoute from "layouts/App/Route";
import AuthRoute from "layouts/Auth/Route";
import DiscoverPage from "pages/Discover";
import SearchResultsPage from "pages/SearchResults";
import GameDetailsPage from "pages/GameDetails";
import ProfilePage from "pages/Profile";
import LoginPage from "pages/Login";
import NotFoundPage from "pages/NotFound";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <AppRoute exact path={ROOT_PATH} component={DiscoverPage} />
        <AppRoute path={SEARCH_RESULTS_PATH} component={SearchResultsPage} />
        <AppRoute path={GAME_DETAILS_PATH} component={GameDetailsPage} />
        <AppRoute path={PROFILE_PATH} component={ProfilePage} />
        <AppRoute path={NOT_FOUND_PATH} component={NotFoundPage} />

        <AuthRoute path={LOGIN_PATH} component={LoginPage} />

        <Redirect to={NOT_FOUND_PATH} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
