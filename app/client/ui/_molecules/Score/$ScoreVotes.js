import styled from "react-emotion";
import { FONT_SMALL, COLOR_LIGHT, SPACING_BASE } from "ui/quarks";

const $ScoreVotes = styled("div")({
  ...FONT_SMALL,
  position: "absolute",
  bottom: -SPACING_BASE,
  left: "50%",
  transform: "translateX(-50%)",
  color: COLOR_LIGHT,
  whiteSpace: "nowrap"
});

export default $ScoreVotes;
