import styled from "react-emotion";
import { CONTAINER_WIDTH, SPACING_UNIT } from "../config/ui";

const Container = styled("div")({
  maxWidth: CONTAINER_WIDTH,
  padding: SPACING_UNIT,
  margin: "0 auto"
});

export default Container;
