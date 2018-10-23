import styled from "react-emotion";
import { COLOR_SECONDARY } from "ui/quarks";

export const GAME_CARD_BORDER_RADIUS = 12;

const $GameCard = styled("div")({
  position: "relative",
  backgroundColor: COLOR_SECONDARY,
  borderRadius: GAME_CARD_BORDER_RADIUS
});

export default $GameCard;
