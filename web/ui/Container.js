import styled from "styled-components";
import { CONTAINER_WIDTH, SPACING_BASE, SPACING_LARGE } from "./constants";

const Container = styled.div`
  max-width: ${CONTAINER_WIDTH};
  padding-left: ${SPACING_BASE};
  padding-right: ${SPACING_BASE};
  margin: ${SPACING_LARGE} auto;
`;

export default Container;
