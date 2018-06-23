// @flow
import styled from "react-emotion";
import {
  SPACING_SMALL,
  COLOR_PRIMARY,
  COLOR_TEXT_INVERTED,
  COLOR_FACEBOOK
} from "../quarks";

type Type = "facebook";

const getButtonColors = (type: ?Type) => {
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

type Props = {
  type?: Type
};

const Button = styled("button")(
  {
    border: 0,
    padding: 0,
    ":hover": {
      cursor: "pointer"
    }
  },
  ({ type }: Props) => ({
    ...getButtonColors(type),
    padding: SPACING_SMALL,
    borderRadius: 4
  })
);

export default Button;
