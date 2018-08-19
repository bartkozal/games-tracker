import styled from "react-emotion";
import { SPACING_BASE, SPACING_SMALL } from "ui/quarks";

const $ButtonGroup = styled("div")(
  {
    height: 62,
    maxWidth: SPACING_BASE * 10.5,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: SPACING_BASE,

    button: {
      marginBottom: SPACING_SMALL,
      marginLeft: SPACING_SMALL / 2,
      marginRight: SPACING_SMALL / 2
    }
  },
  ({ size }) => ({
    justifyContent: size > 3 ? "flex-start" : "center"
  })
);

export default $ButtonGroup;
