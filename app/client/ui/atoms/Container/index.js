import styled from "react-emotion";
import { CONTAINER_WIDTH, SPACING_BASE } from "../../quarks";
import { marginHorizontal, paddingHorizontal } from "../../utils";

const Container = styled("div")({
  ...marginHorizontal("auto"),
  ...paddingHorizontal(SPACING_BASE),
  maxWidth: CONTAINER_WIDTH
});

export default Container;
