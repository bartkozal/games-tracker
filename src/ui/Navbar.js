import React from "react";
import { Flex, Box } from "./FlexBox";
import Title from "./Title";
import Button from "./Button";

const Navbar = () => (
  <Flex alignItems="center" justifyContent="space-between">
    <Box>
      <Title>GamesTracker</Title>
    </Box>

    <Box>
      <Button type="facebook">Sign in with Facebook</Button>
    </Box>
  </Flex>
);

export default Navbar;
