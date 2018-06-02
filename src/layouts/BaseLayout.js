import React from "react";
import Container from "../ui/Container";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BaseLayout = ({ children }) => (
  <Container>
    <Navbar />
    {children}
    <Footer />
  </Container>
);

export default BaseLayout;
