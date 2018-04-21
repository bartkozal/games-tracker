import React from "react";
import { Link } from "react-router-dom";
import Flex from "../ui/Flex";

const findGame = event => {
  event.preventDefault();
};

export const Navbar = () => (
  <Flex>
    <Link to="/">
      <h1>Games Tracker</h1>
    </Link>
    <div>
      <form onSubmit={findGame}>
        <input type="search" placeholder="Search your game..." />
      </form>
    </div>
  </Flex>
);

export default Navbar;
