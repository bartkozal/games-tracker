// @flow
import styled from "styled-components";
import { SPACING_BASE } from "config/ui";

const Container = styled.div`
  display: flex;
  margin-bottom: ${({ noDescent }) => (noDescent ? 0 : SPACING_BASE)};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ direction }) => direction};

  > * {
    flex: ${({ equal }) => equal && "1"};

    + * {
      margin-left: ${({ direction, noGap }) =>
        direction === "column" || noGap ? 0 : SPACING_BASE};
    }
  }
`;

export default Container;
