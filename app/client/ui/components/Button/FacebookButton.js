// @flow
import * as React from "react";
import { FACEBOOK_AUTH_PATH } from "routes/paths";
import Icon from "ui/components/Icon";
import Button from "./Button";

const FacebookButton = () => (
  <Button
    className="button-facebook"
    onClick={() => window.location.assign(FACEBOOK_AUTH_PATH)}
    testId="facebook"
  >
    <Icon name="facebook" color="light" className="button-facebook-icon" />
    Sign in with Facebook
  </Button>
);

export default FacebookButton;
