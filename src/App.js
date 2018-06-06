import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import SearchPage from "./pages/SearchPage";
import BaseLayout from "./layouts/BaseLayout";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <BaseLayout>
        <Route exact path="/" component={SearchPage} />
      </BaseLayout>
    </Router>
  </Provider>
);

export default App;
