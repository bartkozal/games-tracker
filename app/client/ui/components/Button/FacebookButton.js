// @flow
import * as React from "react";
import { FACEBOOK_AUTH_PATH } from "routes/paths";
import FacebookIcon from "ui/styles/icon/facebook.svg";
import Button from "./Button";

const FacebookButton = () => (
  <Button
    className="button-facebook"
    onClick={() => window.location.assign(FACEBOOK_AUTH_PATH)}
    testId="facebook"
  >
    <FacebookIcon className="button-facebook-icon" />
    Sign in with Facebook
  </Button>
);

export default FacebookButton;
