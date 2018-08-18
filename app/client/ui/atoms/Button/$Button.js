import styled from "react-emotion";
import { SPACING_SMALL, SPACING_BASE } from "ui/quarks";
import { getButtonColors } from "./utils";

const $Button = styled("button")(
  {
    display: "inline-flex",
    alignItems: "center",
    paddingTop: SPACING_SMALL,
    paddingBottom: SPACING_SMALL,
    paddingRight: SPACING_BASE,
    paddingLeft: SPACING_BASE,
    border: "1px solid transparent",
    borderRadius: 4,

    ":hover": {
      cursor: "pointer"
    }
  },
  ({ modifier }) => ({
    ...getButtonColors(modifier)
  })
);

export default $Button;
