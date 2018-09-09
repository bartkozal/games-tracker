import styled from "react-emotion";
import {
  FONT_LEAD,
  COLOR_ACCENT,
  COLOR_BODY,
  SPACING_SMALL,
  SPACING_BASE
} from "ui/quarks";

const $TabItem = styled("div")(
  {
    padding: SPACING_SMALL,
    marginLeft: SPACING_BASE,
    marginRight: SPACING_BASE,
    borderRadius: 4,
    fontSize: FONT_LEAD,
    cursor: "pointer"
  },
  ({ isActive }) => ({
    ...(isActive
      ? {
          backgroundColor: COLOR_ACCENT,
          color: COLOR_BODY
        }
      : null)
  })
);

export default $TabItem;