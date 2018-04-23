import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DiscoverPage from "pages/Discover";
import SearchPage from "pages/Search";
import Navbar from "features/Navbar";
import Container from "ui/Container";
import { ROOT_PATH, SEARCH_PATH } from "config/routes";
import "config/css";

const App = () => (
  <Router>
    <Container>
      <Navbar />
      <Route exact path={ROOT_PATH} component={DiscoverPage} />
      <Route path={SEARCH_PATH} component={SearchPage} />
    </Container>
  </Router>
);

export default App;
