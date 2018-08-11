import React from "react";
import PropTypes from "prop-types";
import Container from "ui/atoms/Container";
import Navbar from "ui/organisms/Navbar";

const Layout = ({ children }) => (
  <Container>
    <Navbar />

    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
