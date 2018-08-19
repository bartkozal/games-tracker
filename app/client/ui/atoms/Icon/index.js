import React from "react";
import PropTypes from "prop-types";
import { COLOR_PRIMARY } from "ui/quarks";
import $Icon from "./$Icon";
import { getIconSVG } from "./utils";

const Icon = ({
  type,
  color = COLOR_PRIMARY,
  size,
  before,
  after,
  onClick,
  onMouseEnter
}) => {
  const SVG = getIconSVG(type);
  const sizeProps = size ? { width: size, height: size } : {};
  const colorProps = color ? { fill: color } : {};

  return (
    <$Icon
      before={before}
      after={after}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <SVG {...colorProps} {...sizeProps} />
    </$Icon>
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf(["facebook", "search", "star", "user", "chevron"]),
  color: PropTypes.string,
  before: PropTypes.number,
  after: PropTypes.number,
  size: PropTypes.number,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func
};

export default Icon;
