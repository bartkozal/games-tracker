import styled from "react-emotion";
import { SPACING_SMALL } from "ui/quarks";

const $GridArea = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  marginLeft: -SPACING_SMALL,
  marginRight: -SPACING_SMALL
});

export default $GridArea;
