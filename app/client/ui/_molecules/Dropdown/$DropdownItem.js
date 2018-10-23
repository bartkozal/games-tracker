import styled from "react-emotion";
import {
  COLOR_PRIMARY,
  COLOR_ACCENT,
  COLOR_DARK,
  SPACING_SMALL,
  COLOR_DESTRUCTIVE
} from "ui/quarks";

const $DropdownItem = styled("button")(
  {
    width: "100%",
    margin: 0,
    border: 0,
    borderRadius: 4,
    padding: SPACING_SMALL,
    textAlign: "center",
    backgroundColor: "transparent",
    color: COLOR_PRIMARY,

    ":hover": {
      cursor: "pointer",
      color: COLOR_DARK
    }
  },
  ({ destructive }) => ({
    ":hover": {
      backgroundColor: destructive ? COLOR_DESTRUCTIVE : COLOR_ACCENT
    }
  })
);

export default $DropdownItem;
