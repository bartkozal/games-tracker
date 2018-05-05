// @flow
import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_PATH, LOGIN_PATH } from "config/routes";
import Container from "ui/Container";
import Form from "ui/Form";
import Logo from "ui/Logo";

type Props = {
  isUserLoggedIn: boolean,
  searchQuery: string,
  onSearchInputChange: (SyntheticEvent<HTMLInputElement>) => void,
  onSearchSubmit: (SyntheticEvent<HTMLFormElement>) => void
};

const Navbar = ({
  isUserLoggedIn,
  searchQuery,
  onSearchInputChange,
  onSearchSubmit
}: Props) => (
  <Container alignItems="center" justifyContent="space-between">
    <Container noDescent>
      <Logo />
      <Form onSubmit={onSearchSubmit} noDescent>
        <input
          onChange={onSearchInputChange}
          type="search"
          placeholder="Search your game..."
          value={searchQuery}
        />
      </Form>
    </Container>
    {isUserLoggedIn ? (
      <Link to={PROFILE_PATH}>Your Games</Link>
    ) : (
      <Link to={LOGIN_PATH}>Log in</Link>
    )}
  </Container>
);

export default Navbar;
