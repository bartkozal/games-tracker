import styled from "react-emotion";
import { COLOR_ACCENT, FONT_LEAD } from "ui/quarks";

const $RatingToggle = styled("div")({
  height: 27,
  display: "flex",
  alignItems: "center",
  color: COLOR_ACCENT,
  fontSize: FONT_LEAD,
  textTransform: "uppercase",
  cursor: "pointer"
});

export default $RatingToggle;
