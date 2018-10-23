import styled from "react-emotion";
import {
  SPACING_SMALL,
  Z_INDEX_DROPDOWN,
  SPACING_BASE,
  COLOR_DARK
} from "ui/quarks";

const $DropdownMenu = styled("div")({
  width: SPACING_BASE * 12,
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  bottom: -SPACING_SMALL,
  right: 0,
  padding: SPACING_SMALL,
  transform: "translateY(100%)",
  backgroundColor: COLOR_DARK,
  borderRadius: 4,
  zIndex: Z_INDEX_DROPDOWN
});

export default $DropdownMenu;
