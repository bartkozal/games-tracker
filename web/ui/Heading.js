import styled from "styled-components";

const BaseHeading = styled.span`
  margin-top: ${({ noAscent }) => noAscent && 0};
  margin-bottom: ${({ noDescent }) => noDescent && 0};
`;

export const H1 = BaseHeading.withComponent("h1");
export const H2 = BaseHeading.withComponent("h2");
export const H3 = BaseHeading.withComponent("h3");
export const H4 = BaseHeading.withComponent("h4");
