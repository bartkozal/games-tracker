import styled from "styled-components";
import { SPACING_SMALL } from "./constants";

const Flex = styled.div`
  display: flex;
  margin-left: -${SPACING_SMALL};
  margin-right: -${SPACING_SMALL};

  > * {
    flex: 1;
    margin-left: ${SPACING_SMALL};
    margin-right: ${SPACING_SMALL};
  }
`;

export default Flex;
