import styled from "react-emotion";
import { SPACING_BASE } from "ui/quarks";

const CONTAINER_WIDTH = SPACING_BASE * 74;

const Container = styled("div")({
  boxSizing: "content-box",
  display: "flex",
  minHeight: "100vh",
  maxWidth: CONTAINER_WIDTH,
  flexDirection: "column",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: SPACING_BASE,
  paddingRight: SPACING_BASE
});

export default Container;
