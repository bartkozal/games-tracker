// @flow
import React from "react";
import { Route } from "react-router-dom";
import AuthLayout from "./Layout";

const AuthRoute = ({ component: Page, ...props }: any) => (
  <Route
    {...props}
    render={pageProps => (
      <AuthLayout>
        <Page {...pageProps} />
      </AuthLayout>
    )}
  />
);

export default AuthRoute;
