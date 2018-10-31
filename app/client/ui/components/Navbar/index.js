// @flow
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "routes/paths";
import { clearSearchResults } from "state/search/actions";
import { setCurrentUser } from "state/auth/actions";
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
  setCurrentUser,
  clearSearchResults
};

type Props = {
  setCurrentUser: Function,
  userSignedIn: boolean,
  clearSearchResults: Function
};

class Navbar extends React.Component<Props> {
  componentDidMount() {
    this.props.setCurrentUser();
  }

  render() {
    const { clearSearchResults, userSignedIn } = this.props;

    return (
      <div className="navbar">
        <Stack align="center" distribute="space-between">
          <Link to={ROOT_PATH}>
            <Logo onClick={clearSearchResults} />
          </Link>
          <SearchBar />
          {userSignedIn ? <UserDropdown /> : <FacebookButton />}
        </Stack>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
