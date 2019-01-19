// @flow
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ROOT_PATH } from "routes/paths";
import { clearSearchResults } from "state/search/actions";
import { setCurrentUser } from "state/auth/actions";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { UserDropdown } from "../Dropdown";
import { FacebookButton } from "../Button";
import Stack from "../Stack";
import "./navbar.scss";

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
        <Link to={ROOT_PATH}>
          <Logo onClick={clearSearchResults} />
        </Link>
        <SearchBar />
        {userSignedIn ? <UserDropdown /> : <FacebookButton />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
