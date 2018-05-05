// @flow
import styled from "styled-components";
import { SPACING_SMALL, SPACING_BASE } from "config/ui";

type getBottomMarginArgs = {
  noDescent?: boolean,
  smallDescent?: boolean
};

const getBottomMargin = ({ noDescent, smallDescent }: getBottomMarginArgs) => {
  if (noDescent) return 0;
  if (smallDescent) return SPACING_SMALL;
  return SPACING_BASE;
};

const Container = styled.div`
  display: flex;
  margin-bottom: ${props => getBottomMargin(props)};
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
