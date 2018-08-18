import React from "react";
import PropTypes from "prop-types";
import Container from "ui/atoms/Container";
import Navbar from "ui/organisms/Navbar";
import $Layout from "./$Layout";

const Layout = ({ children }) => (
  <$Layout>
    <Container>
      <Navbar />

      {children}
    </Container>
  </$Layout>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
