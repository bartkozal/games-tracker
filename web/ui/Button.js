// @flow
import styled from "styled-components";
import {
  SPACING_SMALL,
  SPACING_BASE,
  COLOR_BODY,
  COLOR_TEXT,
  BORDER_RADIUS
} from "config/ui";

const Button = styled.button`
  padding: ${SPACING_SMALL} ${SPACING_BASE};
  line-height: ${SPACING_BASE};
  background-color: ${COLOR_TEXT};
  color: ${COLOR_BODY};
  border-radius: ${BORDER_RADIUS};
`;

export default Button;
