import React from "react";
import Container from "../ui/Container";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Flex, Box } from "../ui/FlexBox";

const BaseLayout = ({ children }) => (
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

export default BaseLayout;
