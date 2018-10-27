// @flow
import * as React from "react";
import { FACEBOOK_AUTH_PATH } from "routes/paths";
import FacebookIcon from "ui/foundations/icons/facebook.svg";

const FacebookButton = () => (
  <button
    className="button button-facebook"
    onClick={() => window.location.assign(FACEBOOK_AUTH_PATH)}
  >
    <FacebookIcon className="button-facebook-icon" />
    Sign in with Facebook
  </button>
);

export default FacebookButton;
