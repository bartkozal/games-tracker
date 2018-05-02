// @flow
import React from "react";
import { Link } from "react-router-dom";
import { ROOT_PATH, PROFILE_PATH } from "config/routes";
import Container from "ui/Container";
import { H1 } from "ui/Heading";
import Form from "ui/Form";

type Props = {
  isUserLoggedIn: boolean,
  searchQuery: string,
  onSearchInputChange: (SyntheticEvent<HTMLInputElement>) => void,
  onSearchSubmit: (SyntheticEvent<HTMLFormElement>) => void,
  onSignUpClick: (SyntheticEvent<HTMLButtonElement>) => void,
  onLogInClick: (SyntheticEvent<HTMLButtonElement>) => void
};

const Navbar = ({
  isUserLoggedIn,
  searchQuery,
  onSearchInputChange,
  onSearchSubmit,
  onSignUpClick,
  onLogInClick
}: Props) => (
  <Container alignItems="center" justifyContent="space-between">
    <Container noDescent>
      <Link to={ROOT_PATH}>
        <H1 noDescent>Games Tracker</H1>
      </Link>
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
      <Link to={PROFILE_PATH}>Username</Link>
    ) : (
      <Container alignItems="center" noDescent>
        <button onClick={onSignUpClick}>Sign up</button>
        <button onClick={onLogInClick}>Log in</button>
      </Container>
    )}
  </Container>
);

export default Navbar;
