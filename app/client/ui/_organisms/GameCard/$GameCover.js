import styled from "react-emotion";
import { SPACING_BASE } from "ui/quarks";
import { GAME_CARD_BORDER_RADIUS } from "./$GameCard";

const $GameCover = styled("div")({
  position: "relative",
  height: SPACING_BASE * 21,
  borderTopLeftRadius: GAME_CARD_BORDER_RADIUS,
  borderTopRightRadius: GAME_CARD_BORDER_RADIUS,
  backgroundSize: "cover",
  backgroundPosition: "center",

  "::after": {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 36.35%)",
    borderTopLeftRadius: GAME_CARD_BORDER_RADIUS,
    borderTopRightRadius: GAME_CARD_BORDER_RADIUS,
    content: "''"
  }
});

export default $GameCover;
