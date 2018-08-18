import React from "react";
import PropTypes from "prop-types";
import Navbar from "ui/organisms/Navbar";
import Footer from "ui/organisms/Footer";
import $Layout from "./$Layout";
import $Container from "./$Container";
import $StickyFooter from "./$StickyFooter";

const Layout = ({ children }) => (
  <$Layout>
    <$Container>
      <Navbar />

      {children}

      <$StickyFooter>
        <Footer />
      </$StickyFooter>
    </$Container>
  </$Layout>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
