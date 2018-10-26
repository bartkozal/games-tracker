// @flow
import * as React from "react";
import { connect } from "react-redux";
import { clearSearchResults } from "state/search/actions";
import Logo from "ui/components/Logo";
import SearchBar from "ui/components/SearchBar";
import { UserDropdown } from "ui/components/Dropdown";
import { FacebookButton } from "ui/components/Button";
import Stack from "ui/containers/Stack";
import "./navbar.css";

const mapStateToProps = ({ Auth }) => ({
  userSignedIn: Auth.userSignedIn
});

const mapDispatchToProps = {
  clearSearchResults
};

type Props = {
  userSignedIn: boolean,
  clearSearchResults: Function
};

const Navbar = ({ userSignedIn, clearSearchResults }: Props) => (
  <div className="navbar">
    <Stack align="center" distribute="space-between">
      <Logo onClick={clearSearchResults} />
      <SearchBar />
      {userSignedIn ? <UserDropdown /> : <FacebookButton />}
    </Stack>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
