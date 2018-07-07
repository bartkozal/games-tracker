import React from "react";
import Container from "../atoms/Container";
import Navbar from "../organisms/Navbar";

const Layout = ({ children }) => (
  <Container>
    <Navbar />

    {children}
  </Container>
);

export default Layout;
