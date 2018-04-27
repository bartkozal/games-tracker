import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GAME_PATH } from "config/routes";

const Cover = ({ children }) => (
  <Link to={GAME_PATH}>
    <img src={children} />
  </Link>
);

Cover.propTypes = {
  children: PropTypes.string.isRequired
};

export default Cover;
