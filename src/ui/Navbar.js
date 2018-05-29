import React from "react";
import { Flex, Box } from "./FlexBox";

const Navbar = () => (
  <Flex alignItems="center" justifyContent="space-between">
    <Box>
      <h1>GamesTracker</h1>
    </Box>

    <Box>
      <button>Sign in with Facebook</button>
    </Box>
  </Flex>
);

export default Navbar;
