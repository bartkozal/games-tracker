import styled from "styled-components";
import { SPACING_SMALL } from "config/ui";

const Flex = styled.div`
  display: flex;
  margin-left: -${SPACING_SMALL};
  margin-right: -${SPACING_SMALL};

  > * {
    flex: ${({ equal }) => (equal ? "1" : "initial")};
    margin-left: ${SPACING_SMALL};
    margin-right: ${SPACING_SMALL};
  }
`;

export default Flex;
