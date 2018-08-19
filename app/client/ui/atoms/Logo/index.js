import React from "react";
import PropTypes from "prop-types";
import SVG from "./logo.svg";

const Logo = ({ onClick }) => (
  <SVG
    onClick={onClick}
    style={{
      cursor: onClick ? "pointer" : "normal"
    }}
  />
);

Logo.propTypes = {
  onClick: PropTypes.func
};

export default Logo;
