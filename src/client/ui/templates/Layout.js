// @flow
import React, { type Node } from "react";
import Container from "../atoms/Container";
import Navbar from "../organisms/Navbar";

type Props = {
  children: Node
};

const Layout = ({ children }: Props) => (
  <Container>
    <Navbar />

    {children}
  </Container>
);

export default Layout;
