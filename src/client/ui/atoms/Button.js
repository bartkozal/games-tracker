import React from "react";
import styled from "react-emotion";
import { kebabCase } from "lodash";
import {
  SPACING_SMALL,
  COLOR_PRIMARY,
  COLOR_TEXT_INVERTED,
  COLOR_FACEBOOK
} from "../quarks";

const getButtonColors = type => {
  switch (type) {
    case "facebook":
      return {
        backgroundColor: COLOR_FACEBOOK,
        color: COLOR_TEXT_INVERTED
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        color: COLOR_PRIMARY,
        border: `1px solid ${COLOR_PRIMARY}`
      };
    case "primary":
    default:
      return {
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_TEXT_INVERTED
      };
  }
};

const StyledButton = styled("button")(
  {
    border: "1px solid transparent",
    padding: 0,
    ":hover": {
      cursor: "pointer"
    }
  },
  ({ type }) => ({
    ...getButtonColors(type),
    padding: SPACING_SMALL,
    borderRadius: 4
  })
);

const Button = ({ children, type, onClick }) => (
  <StyledButton
    data-test={`button-${kebabCase(children)}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;
