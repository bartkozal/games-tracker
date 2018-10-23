import styled from "react-emotion";
import { SPACING_SMALL } from "ui/quarks";

const $FooterItem = styled("li")({
  "& + &::before": {
    display: "inline",
    paddingRight: SPACING_SMALL,
    paddingLeft: SPACING_SMALL,
    content: "'||'"
  }
});

export default $FooterItem;
