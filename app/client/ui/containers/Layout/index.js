import React from "react";
import PropTypes from "prop-types";
import { StickyFooter, StickyFooterWrapper } from "ui/containers/StickyFooter";
import Container from "ui/containers/Container";

// TODO
const Layout = ({ children }) => (
  <StickyFooterWrapper>
    <Container>
      Navbar
      {children}
    </Container>

    <StickyFooter>
      <Container>Footer</Container>
    </StickyFooter>
  </StickyFooterWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
