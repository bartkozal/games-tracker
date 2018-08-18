import styled from "react-emotion";
import { SPACING_SMALL } from "ui/quarks";
import { getButtonColors } from "./utils";

const $Button = styled("button")(
  {
    border: "1px solid transparent",
    padding: 0,
    ":hover": {
      cursor: "pointer"
    }
  },
  ({ modifier }) => ({
    ...getButtonColors(modifier),
    padding: SPACING_SMALL,
    borderRadius: 4
  })
);

export default $Button;
