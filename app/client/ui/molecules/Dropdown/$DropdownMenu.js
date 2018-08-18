import styled from "react-emotion";
import { SPACING_SMALL } from "ui/quarks";

const $DropdownMenu = styled("div")({
  paddingTop: SPACING_SMALL,
  paddingBottom: SPACING_SMALL,
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: 34,
  left: 0
});

export default $DropdownMenu;
