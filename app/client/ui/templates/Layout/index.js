import React from "react";
import PropTypes from "prop-types";
import Container from "ui/atoms/Container";
import Navbar from "ui/organisms/Navbar";
import StyledLayout from "./StyledLayout";

const Layout = ({ children }) => (
  <StyledLayout>
    <Container>
      <Navbar />

      {children}
    </Container>
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
