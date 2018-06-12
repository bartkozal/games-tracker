import styled from "react-emotion";
import { CONTAINER_WIDTH, SPACING_BASE } from "../config/ui";
import { marginHorizontal, paddingHorizontal } from "../config/emotion";

const Container = styled("div")({
  ...marginHorizontal("auto"),
  ...paddingHorizontal(SPACING_BASE),
  maxWidth: CONTAINER_WIDTH
});

export default Container;
