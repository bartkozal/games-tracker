import styled from "react-emotion";
import { SPACING_BASE, FONT_LEAD, COLOR_LIGHT } from "ui/quarks";

const $GameTitle = styled("div")({
  ...FONT_LEAD,
  height: 42,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: SPACING_BASE,
  overflow: "hidden",
  textAlign: "center",
  color: COLOR_LIGHT
});

export default $GameTitle;
