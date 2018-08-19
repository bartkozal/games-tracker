import styled from "react-emotion";
import { SPACING_BASE, FONT_LEAD, COLOR_LIGHT } from "ui/quarks";

const $GameTitle = styled("div")({
  height: 42,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: SPACING_BASE,
  overflow: "hidden",
  fontSize: FONT_LEAD,
  textAlign: "center",
  color: COLOR_LIGHT
});

export default $GameTitle;
