import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DiscoverPage from "./pages/Discover";
import "./ui/global";
import Container from "./ui/Container";

const App = () => (
  <Router>
    <Container>
      <Route exact path="/" component={DiscoverPage} />
    </Container>
  </Router>
);

export default App;
