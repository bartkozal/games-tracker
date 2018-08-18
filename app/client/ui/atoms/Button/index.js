import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import $Button from "./$Button";

const Button = ({ children, type = "primary", onClick }) => (
  <$Button
    data-test={`button-${type}-${kebabCase(children)}`}
    modifier={type}
    onClick={onClick}
  >
    {children}
  </$Button>
);

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "outline", "facebook"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
