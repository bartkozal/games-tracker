// @flow
import React from "react";
import { Link } from "react-router-dom";
import { H1 } from "ui/Heading";
import { ROOT_PATH } from "config/routes";

const Logo = () => (
  <Link to={ROOT_PATH}>
    <H1 noDescent>Games Tracker</H1>
  </Link>
);

export default Logo;
