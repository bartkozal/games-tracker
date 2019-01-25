// @flow
import * as React from "react";
import { connect } from "react-redux";
import { StickyFooter, StickyFooterWrapper } from "../StickyFooter";
import Container from "../Container";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Modal from "../Modal";

type Props = {
  isModalOpen: boolean,
  children: React.Node
};

const mapStateToProps = ({ UI }) => ({
  isModalOpen: UI.isModalOpen
});

const Layout = ({ isModalOpen, children }: Props) => (
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

    {isModalOpen ? <Modal /> : null}
  </>
);

export default connect(mapStateToProps)(Layout);
