import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SEARCH_PATH } from "config/routes";
import { logIn } from "features/CurrentUser";
import Navbar from "./Navbar";

class NavbarContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.shape({
      isLoggedIn: PropTypes.bool
    }),
    logIn: PropTypes.func,
    history: PropTypes.shape({
      push: PropTypes.func
    })
  };

  findGame = event => {
    const { history } = this.props;
    event.preventDefault();
    history.push(SEARCH_PATH);
  };

  render() {
    const { currentUser, logIn } = this.props;
    return (
      <Navbar
        currentUser={currentUser}
        onSearch={this.findGame}
        onLogInClick={logIn}
      />
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

const mapDispatchToProps = {
  logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(NavbarContainer)
);
