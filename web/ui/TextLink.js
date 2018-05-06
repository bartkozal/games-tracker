import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLOR_BRAND } from "config/ui";

const TextLink = styled(Link)`
  text-decoration: underline;
  color: ${COLOR_BRAND};
`;

export default TextLink;
