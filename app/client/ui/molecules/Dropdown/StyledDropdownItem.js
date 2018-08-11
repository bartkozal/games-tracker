import styled from "react-emotion";
import { paddingVertical, paddingHorizontal } from "ui/utils";
import {
  SPACING_SMALL,
  SPACING_BASE,
  DROPDOWN_ITEM,
  DROPDOWN_ITEM_HOVER
} from "ui/quarks";

const StyledDropdownItem = styled("button")({
  ...paddingVertical(SPACING_SMALL),
  ...paddingHorizontal(SPACING_BASE),
  margin: 0,
  border: 0,
  textAlign: "left",
  backgroundColor: DROPDOWN_ITEM,
  width: "100%",
  ":hover": {
    backgroundColor: DROPDOWN_ITEM_HOVER,
    cursor: "pointer"
  }
});

export default StyledDropdownItem;
