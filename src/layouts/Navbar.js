import React from "react";
import Auth from "../features/Auth";
import { Flex, Box } from "../ui/FlexBox";
import Title from "../ui/Title";

const Navbar = () => (
  <Flex alignItems="center" justifyContent="space-between">
    <Box>
      <Title>Games Tracker</Title>
    </Box>

    <Box>
      <Auth />
    </Box>
  </Flex>
);

export default Navbar;
