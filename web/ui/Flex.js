import styled from "styled-components";
import { SPACING_SMALL, SPACING_BASE } from "config/ui";

const Flex = styled.div`
  display: flex;
  margin-right: -${SPACING_SMALL};
  margin-bottom: ${({ spacing }) => spacing && SPACING_BASE};
  margin-left: -${SPACING_SMALL};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  > * {
    flex: ${({ equal }) => equal && "1"};
    margin-left: ${SPACING_SMALL};
    margin-right: ${SPACING_SMALL};
  }
`;

export default Flex;
