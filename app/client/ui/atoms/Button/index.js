import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import $Button from "./$Button";

const Button = ({ children, type = "primary", size = "base", onClick }) => (
  <$Button
    data-test={`button-${type}-${kebabCase(children)}`}
    size={size}
    modifier={type}
    onClick={onClick}
  >
    {children}
  </$Button>
);

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "outline", "facebook"]),
  size: PropTypes.oneOf(["base", "small"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
