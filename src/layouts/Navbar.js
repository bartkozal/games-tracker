import React from "react";
import { Flex, Box } from "../ui/FlexBox";
import Title from "../ui/Title";
import Button from "../ui/Button";

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
