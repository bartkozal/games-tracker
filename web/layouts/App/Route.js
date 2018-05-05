// @flow
import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "./Layout";

const AppRoute = ({ component: Page, ...props }: any) => (
  <Route
    {...props}
    render={pageProps => (
      <AppLayout>
        <Page {...pageProps} />
      </AppLayout>
    )}
  />
);

export default AppRoute;
