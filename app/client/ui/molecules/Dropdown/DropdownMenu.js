import styled from "react-emotion";
import { paddingVertical } from "../../utils";
import { SPACING_SMALL, COLOR_UI, DROPDOWN_ITEM } from "../../quarks";

const DropdownMenu = styled("div")({
  ...paddingVertical(SPACING_SMALL),
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: 34,
  left: 0,
  border: `1px solid ${COLOR_UI}`,
  backgroundColor: DROPDOWN_ITEM
});

export default DropdownMenu;
