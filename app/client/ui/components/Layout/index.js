// @flow
import * as React from "react";
import { StickyFooter, StickyFooterWrapper } from "../StickyFooter";
import Container from "../Container";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Modal from "../Modal";

type Props = {
  children: React.Node
};

const Layout = ({ children }: Props) => (
  <>
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

    <Modal />
  </>
);

export default Layout;
