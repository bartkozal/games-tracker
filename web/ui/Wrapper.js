// @flow
import styled from "styled-components";
import {
  WRAPPER_WIDTH,
  WRAPPER_COMPACT_WIDTH,
  SPACING_BASE,
  SPACING_LARGE
} from "config/ui";

const Wrapper = styled.div`
  max-width: ${({ narrow }) =>
    narrow ? WRAPPER_COMPACT_WIDTH : WRAPPER_WIDTH};
  padding-left: ${SPACING_BASE};
  padding-right: ${SPACING_BASE};
  margin: ${SPACING_LARGE} auto;
`;

export default Wrapper;
