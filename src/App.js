import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ROOT_PATH, PROFILE_PATH } from "./config/routes";
import BaseLayout from "./layouts/BaseLayout";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <BaseLayout>
        <Route exact path={ROOT_PATH} component={SearchPage} />
        <Route exact path={PROFILE_PATH} component={ProfilePage} />
      </BaseLayout>
    </Router>
  </Provider>
);

export default App;
