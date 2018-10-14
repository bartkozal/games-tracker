import styled from "react-emotion";
import { FONT_SMALL, SPACING_BASE } from "ui/quarks";

const $Footer = styled("ul")({
  ...FONT_SMALL,
  display: "flex",
  justifyContent: "center",
  paddingTop: SPACING_BASE,
  paddingBottom: SPACING_BASE,
  listStyleType: "none"
});

export default $Footer;
