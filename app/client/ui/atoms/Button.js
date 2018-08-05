import React from "react";
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

const Button = ({ children, type, onClick }) => (
  <button
    data-test={`button-${type}-${kebabCase(children)}`}
    style={{
      border: "1px solid transparent",
      ...getButtonColors(type),
      padding: SPACING_SMALL,
      borderRadius: 4
      // TODO
      // ":hover": {
      //   cursor: "pointer"
      // }
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
