import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BaseHeading = styled.span`
  margin-top: ${({ noAscent }) => noAscent && 0};
  margin-bottom: ${({ noDescent }) => noDescent && 0};
`;

const H1 = BaseHeading.withComponent("h1");
const H2 = BaseHeading.withComponent("h2");
const H3 = BaseHeading.withComponent("h3");
const H4 = BaseHeading.withComponent("h4");

const Heading = ({ level, children, noAscent, noDescent }) => {
  const props = { noAscent, noDescent };
  switch (level) {
    case 1:
      return <H1 {...props}>{children}</H1>;
    case 2:
      return <H2 {...props}>{children}</H2>;
    case 3:
      return <H3 {...props}>{children}</H3>;
    case 4:
      return <H4 {...props}>{children}</H4>;
  }
};

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  noAscent: PropTypes.bool,
  noDescent: PropTypes.bool,
  children: PropTypes.element.isRequired
};

export default Heading;
