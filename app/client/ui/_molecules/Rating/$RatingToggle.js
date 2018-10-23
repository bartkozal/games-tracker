import styled from "react-emotion";
import { COLOR_ACCENT, FONT_LEAD } from "ui/quarks";

const $RatingToggle = styled("div")({
  ...FONT_LEAD,
  height: 27,
  display: "flex",
  alignItems: "center",
  color: COLOR_ACCENT,
  textTransform: "uppercase",
  cursor: "pointer"
});

export default $RatingToggle;
