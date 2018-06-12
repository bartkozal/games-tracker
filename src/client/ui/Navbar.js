import React from "react";
import Auth from "../features/Auth";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "../config/routes";
import { Flex, Box } from "../elements/FlexBox";
import { Title } from "../elements/Headings";

const Navbar = () => (
  <Flex alignItems="center" justifyContent="space-between">
    <Box>
      <Link to={ROOT_PATH}>
        <Title>Games Tracker</Title>
      </Link>
    </Box>

    <Box>
      <Auth />
    </Box>
  </Flex>
);

export default Navbar;
