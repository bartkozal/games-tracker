import styled from "react-emotion";
import { CONTAINER_WIDTH, SPACING_BASE } from "../config/ui";

const Container = styled("div")({
  maxWidth: CONTAINER_WIDTH,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: SPACING_BASE,
  paddingRight: SPACING_BASE
});

export default Container;
