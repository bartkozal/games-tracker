import styled from "react-emotion";
import { CONTAINER_WIDTH, SPACING_BASE } from "ui/quarks";

const Container = styled("div")({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: SPACING_BASE,
  paddingRight: SPACING_BASE,
  maxWidth: CONTAINER_WIDTH,
  boxSizing: "content-box"
});

export default Container;
