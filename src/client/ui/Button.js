import styled from "react-emotion";
import {
  SPACING_SMALL,
  COLOR_PRIMARY,
  COLOR_TEXT_INVERTED,
  COLOR_FACEBOOK
} from "../config/ui";

const getButtonColors = type => {
  switch (type) {
    case "facebook":
      return {
        backgroundColor: COLOR_FACEBOOK,
        color: COLOR_TEXT_INVERTED
      };
    default:
      return {
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_TEXT_INVERTED
      };
  }
};

const Button = styled("button")(
  {
    border: 0,
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

export default Button;
