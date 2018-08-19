import styled from "react-emotion";
import {
  COLOR_DARK,
  SPACING_BASE,
  SPACING_SMALL,
  Z_INDEX_DROPDOWN
} from "ui/quarks";

const $RatingMenu = styled("div")({
  position: "absolute",
  bottom: -SPACING_BASE,
  right: SPACING_BASE * -5,
  display: "flex",
  padding: SPACING_BASE,
  backgroundColor: COLOR_DARK,
  borderRadius: 12,
  transform: "translateY(100%)",
  zIndex: Z_INDEX_DROPDOWN,

  "::after": {
    position: "absolute",
    top: 0,
    right: 76,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: SPACING_BASE,
    borderTopWidth: 0,
    borderColor: "transparent",
    borderBottomColor: COLOR_DARK,
    transform: "translateY(-100%)",
    content: "''"
  },

  "* + *": {
    marginLeft: SPACING_SMALL
  }
});

export default $RatingMenu;
