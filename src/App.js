import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import SearchPage from "./pages/SearchPage";
import "../node_modules/modern-normalize/modern-normalize.css";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={SearchPage} />
    </Router>
  </Provider>
);

export default App;
