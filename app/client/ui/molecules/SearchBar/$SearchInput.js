import styled from "react-emotion";
import {
  COLOR_SECONDARY,
  SPACING_BASE,
  SPACING_SMALL,
  FONT_LARGE,
  COLOR_PRIMARY
} from "ui/quarks";

const $SearchInput = styled("input")({
  width: SPACING_BASE * 34,
  paddingTop: SPACING_SMALL,
  paddingBottom: SPACING_SMALL,
  paddingRight: SPACING_BASE,
  paddingLeft: SPACING_BASE,
  borderRadius: 8,
  border: 0,
  backgroundColor: COLOR_SECONDARY,
  color: COLOR_PRIMARY,
  fontSize: FONT_LARGE
});

export default $SearchInput;
