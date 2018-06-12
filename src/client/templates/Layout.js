import React from "react";
import Container from "../elements/Container";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { Flex, Box } from "../elements/FlexBox";

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
