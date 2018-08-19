import styled from "react-emotion";
import {
  COLOR_PRIMARY,
  COLOR_ACCENT,
  COLOR_DARK,
  SPACING_SMALL
} from "ui/quarks";

const $DropdownItem = styled("button")({
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
    backgroundColor: COLOR_ACCENT,
    color: COLOR_DARK
  }
});

export default $DropdownItem;
