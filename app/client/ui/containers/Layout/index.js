// @flow
import * as React from "react";
import { StickyFooter, StickyFooterWrapper } from "ui/containers/StickyFooter";
import Container from "ui/containers/Container";
import Footer from "ui/components/Footer";
import Navbar from "ui/components/Navbar";

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
