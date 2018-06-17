import React from "react";
import Container from "../atoms/Container";
import { Flex, Box } from "../atoms/FlexBox";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const Layout = ({ children }) => (
  <Container>
    <Flex direction="column" fullHeight>
      <Box grow={1}>
        <Navbar />

        {children}
      </Box>

      <Box>
        <Footer />
      </Box>
    </Flex>
  </Container>
);

export default Layout;
