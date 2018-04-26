import styled from "styled-components";
import { SPACING_SMALL, SPACING_BASE } from "config/ui";

const Container = styled.div`
  display: flex;
  margin-bottom: ${({ noDescent }) => (noDescent ? 0 : SPACING_BASE)};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  > * {
    flex: ${({ equal }) => equal && "1"};

    + * {
      margin-left: ${SPACING_SMALL};
    }
  }
`;

export default Container;
