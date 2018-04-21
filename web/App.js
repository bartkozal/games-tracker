import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DiscoverPage from "./pages/Discover";
import Navbar from "./features/Navbar";
import Container from "./ui/Container";
import "./ui/global";

const App = () => (
  <Router>
    <Container>
      <Navbar />
      <Route exact path="/" component={DiscoverPage} />
    </Container>
  </Router>
);

export default App;
