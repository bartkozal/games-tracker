import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexPage from "./pages/index";

const Root = () => (
  <Router>
    <Route exact path="/" component={IndexPage} />
  </Router>
);

export default Root;
