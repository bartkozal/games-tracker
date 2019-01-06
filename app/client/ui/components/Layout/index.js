// @flow
import * as React from "react";
import { StickyFooter, StickyFooterWrapper } from "../StickyFooter";
import Container from "../Container";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children: React.Node
};

const Layout = ({ children }: Props) => (
  <StickyFooterWrapper>
    <Container>
      <Navbar />

      {children}
    </Container>

    <StickyFooter>
      <Container>
        <Footer />
      </Container>
    </StickyFooter>
  </StickyFooterWrapper>
);

export default Layout;
