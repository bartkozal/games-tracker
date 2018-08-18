import styled from "react-emotion";
import { SPACING_BASE } from "ui/quarks";

const $GameCover = styled("div")({
  position: "relative",
  height: SPACING_BASE * 21,
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
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
    content: "''"
  }
});

export default $GameCover;
