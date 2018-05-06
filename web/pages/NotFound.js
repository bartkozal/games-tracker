// @flow
import React, { Fragment } from "react";
import { ROOT_PATH } from "config/routes";
import TextLink from "ui/TextLink";

const NotFoundPage = () => (
  <Fragment>
    <p>Page not found.</p>
    <TextLink to={ROOT_PATH}>Go back to the home page.</TextLink>
  </Fragment>
);

export default NotFoundPage;
