import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { SEARCH_PATH } from "config/routes";
import Navbar from "./Navbar";

class NavbarContainer extends PureComponent {
  static propTypes = {
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
    return <Navbar onSearch={this.findGame} />;
  }
}

export default withRouter(NavbarContainer);
