import styled from "react-emotion";
import { SPACING_BASE, SPACING_SMALL } from "ui/quarks";

const $ButtonGroup = styled("div")({
  height: 62,
  width: SPACING_BASE * 10,
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom: SPACING_BASE,

  button: {
    marginBottom: SPACING_SMALL,
    marginRight: SPACING_SMALL
  },

  "button:nth-of-type(3n)": {
    marginRight: 0
  }
});

export default $ButtonGroup;
