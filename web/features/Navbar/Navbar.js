import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROOT_PATH, PROFILE_PATH } from "config/routes";
import Container from "ui/Container";
import { H1 } from "ui/Heading";
import Form from "ui/Form";

const Navbar = ({ onSearch }) => (
  <Container alignItems="center" justifyContent="space-between">
    <Container noDescent>
      <Link to={ROOT_PATH}>
        <H1 noDescent>Games Tracker</H1>
      </Link>
      <Form onSubmit={onSearch} noDescent>
        <input type="search" placeholder="Search your game..." />
      </Form>
    </Container>
    <Link to={PROFILE_PATH}>Username</Link>
  </Container>
);

Navbar.propTypes = {
  onSearch: PropTypes.func
};

export default Navbar;
