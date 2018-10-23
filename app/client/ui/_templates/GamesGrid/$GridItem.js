import styled from "react-emotion";
import { SPACING_BASE, SPACING_SMALL } from "ui/quarks";

const $GridItem = styled("div")(
  {
    marginBottom: SPACING_BASE,
    marginLeft: SPACING_SMALL,
    marginRight: SPACING_SMALL
  },
  ({ perRow = 5 }) => ({
    flexBasis: `calc(${100 / perRow}% - ${SPACING_BASE}px)`
  })
);

export default $GridItem;
