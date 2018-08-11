import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import StyledButton from "./StyledButton";

const Button = ({ children, type = "primary", onClick }) => (
  <StyledButton
    data-test={`button-${type}-${kebabCase(children)}`}
    modifier={type}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
