import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "config/routes";
import Flex from "ui/Flex";

const Navbar = ({ onSearch }) => (
  <Flex spacing>
    <Link to={ROOT_PATH}>
      <h1>Games Tracker</h1>
    </Link>
    <div>
      <form onSubmit={onSearch}>
        <input type="search" placeholder="Search your game..." />
      </form>
    </div>
  </Flex>
);

Navbar.propTypes = {
  onSearch: PropTypes.func
};

export default Navbar;
