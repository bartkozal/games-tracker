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
  onMouseEnter,
  onMouseLeave,
  testId
}) => {
  const SVG = getIconSVG(type);
  const sizeProps = size ? { width: size, height: size } : {};
  const colorProps = color ? { fill: color } : {};

  return (
    <$Icon
      data-cy={testId}
      before={before}
      after={after}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <SVG {...colorProps} {...sizeProps} />
    </$Icon>
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf([
    "cancel",
    "chevron",
    "facebook",
    "search",
    "star",
    "unstar",
    "user"
  ]),
  color: PropTypes.string,
  before: PropTypes.number,
  after: PropTypes.number,
  size: PropTypes.number,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  testId: PropTypes.string
};

export default Icon;
