import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import $Button from "./$Button";
import $ButtonRightIcon from "./$ButtonRightIcon";

const Button = ({
  children,
  type = "primary",
  size = "base",
  rightIcon,
  onClick
}) => (
  <$Button
    data-cy={`button-${type}-${kebabCase(children)}`}
    size={size}
    modifier={type}
    onClick={onClick}
  >
    {children}
    {rightIcon && <$ButtonRightIcon>{rightIcon}</$ButtonRightIcon>}
  </$Button>
);

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "outline", "facebook"]),
  size: PropTypes.oneOf(["base", "small", "block"]),
  rightIcon: PropTypes.element,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
