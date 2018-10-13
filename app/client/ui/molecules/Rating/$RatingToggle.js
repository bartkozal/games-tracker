import styled from "react-emotion";
import { COLOR_ACCENT, FONT_LEAD, FONT_SEMIBOLD } from "ui/quarks";

const $RatingToggle = styled("div")({
  height: 27,
  display: "flex",
  alignItems: "center",
  color: COLOR_ACCENT,
  fontSize: FONT_LEAD,
  fontWeight: FONT_SEMIBOLD,
  textTransform: "uppercase",
  cursor: "pointer"
});

export default $RatingToggle;
