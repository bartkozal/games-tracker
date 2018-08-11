import React from "react";
import PropTypes from "prop-types";
import Container from "../atoms/Container";
import Navbar from "../organisms/Navbar";

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
