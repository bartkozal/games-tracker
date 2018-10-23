import styled from "react-emotion";
import { SPACING_BASE } from "ui/quarks";

const $SearchIcon = styled("div")({
  position: "absolute",
  display: "flex",
  top: "50%",
  transform: "translateY(-50%)",
  right: SPACING_BASE
});

export default $SearchIcon;
