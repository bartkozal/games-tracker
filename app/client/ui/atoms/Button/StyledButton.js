import styled from "react-emotion";
import { getButtonColors } from "./utils";
import { SPACING_SMALL } from "../../quarks";

const StyledButton = styled("button")(
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

export default StyledButton;
