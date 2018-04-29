import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SEARCH_PATH } from "config/routes";
import { logUserIn } from "features/CurrentUser/actionCreators";
import Navbar from "./Navbar";

class NavbarContainer extends Component {
  findGame = event => {
    const { history } = this.props;
    event.preventDefault();
    history.push(SEARCH_PATH);
  };

  render() {
    const { isUserLoggedIn, logUserIn } = this.props;
    return (
      <Navbar
        isUserLoggedIn={isUserLoggedIn}
        onSearch={this.findGame}
        onSignUpClick={logUserIn}
        onLogInClick={logUserIn}
      />
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({
  isUserLoggedIn: currentUser.isLoggedIn
});

const mapDispatchToProps = {
  logUserIn
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(NavbarContainer)
);
