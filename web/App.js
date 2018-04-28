import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "config/store";
import "config/css";
import { ROOT_PATH, SEARCH_PATH, GAME_PATH, PROFILE_PATH } from "config/routes";
import DiscoverPage from "pages/Discover";
import SearchPage from "pages/Search";
import GamePage from "pages/Game";
import Navbar from "features/Navbar";
import ProfilePage from "pages/Profile";
import Wrapper from "ui/Wrapper";

const App = () => (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <Navbar />
        <Route exact path={ROOT_PATH} component={DiscoverPage} />
        <Route path={SEARCH_PATH} component={SearchPage} />
        <Route path={GAME_PATH} component={GamePage} />
        <Route path={PROFILE_PATH} component={ProfilePage} />
      </Wrapper>
    </Router>
  </Provider>
);

export default App;
