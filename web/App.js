import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DiscoverPage from "pages/Discover";
import SearchPage from "pages/Search";
import Navbar from "features/Navbar";
import Wrapper from "ui/Wrapper";
import { ROOT_PATH, SEARCH_PATH } from "config/routes";
import "config/css";

const App = () => (
  <Router>
    <Wrapper>
      <Navbar />
      <Route exact path={ROOT_PATH} component={DiscoverPage} />
      <Route path={SEARCH_PATH} component={SearchPage} />
    </Wrapper>
  </Router>
);

export default App;
