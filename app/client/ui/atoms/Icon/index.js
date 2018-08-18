import React from "react";
import PropTypes from "prop-types";
import { COLOR_PRIMARY } from "ui/quarks";
import $Icon from "./$Icon";
import { getSvg } from "./utils";

const Icon = ({ type, color = COLOR_PRIMARY, spacing, onClick }) => {
  const SVG = getSvg(type);

  return (
    <$Icon spacing={spacing} onClick={onClick}>
      <SVG fill={color} />
    </$Icon>
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf([
    "facebook",
    "search",
    "star-empty",
    "star-full",
    "user"
  ]),
  color: PropTypes.string,
  spacing: PropTypes.number,
  onClick: PropTypes.func
};

export default Icon;
