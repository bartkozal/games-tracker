import styled from "react-emotion";
import { marginHorizontal, paddingHorizontal } from "ui/utils";
import { CONTAINER_WIDTH, SPACING_BASE } from "ui/quarks";

const Container = styled("div")({
  ...marginHorizontal("auto"),
  ...paddingHorizontal(SPACING_BASE),
  maxWidth: CONTAINER_WIDTH
});

export default Container;
