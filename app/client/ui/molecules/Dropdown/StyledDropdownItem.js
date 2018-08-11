import styled from "react-emotion";
import { SPACING_SMALL, SPACING_BASE } from "ui/quarks";

const StyledDropdownItem = styled("button")({
  padding: `${SPACING_SMALL} ${SPACING_BASE}`,
  margin: 0,
  border: 0,
  textAlign: "left",
  width: "100%",
  ":hover": {
    cursor: "pointer"
  }
});

export default StyledDropdownItem;
