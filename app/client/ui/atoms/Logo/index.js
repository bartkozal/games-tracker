import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "routes/paths";

const Logo = () => (
  <Link to={ROOT_PATH} data-test="link-home">
    <img src={logo} alt="Games Tracker" />
  </Link>
);

export default Logo;
