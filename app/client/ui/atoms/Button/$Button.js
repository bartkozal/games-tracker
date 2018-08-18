import styled from "react-emotion";
import { getButtonColors, getButtonSize } from "./utils";

const $Button = styled("button")(
  {
    display: "inline-flex",
    alignItems: "center",
    border: "1px solid transparent",
    borderRadius: 4,

    ":hover": {
      cursor: "pointer"
    }
  },
  ({ modifier, size }) => ({
    ...getButtonColors(modifier),
    ...getButtonSize(size)
  })
);

export default $Button;
