// @flow
import React, { Component } from "react";
import {
  withRouter,
  type RouterHistory,
  type Location
} from "react-router-dom";
import { connect } from "react-redux";
import qs from "querystringify";
import { SEARCH_RESULTS_PATH } from "config/routes";
import { logUserIn } from "features/CurrentUser/actionCreators";
import { updateSearchQuery } from "features/Search/actionCreators";
import Navbar from "./Navbar";

type Props = {
  history: RouterHistory,
  location: Location,
  isUserLoggedIn: boolean,
  searchQuery: string,
  updateSearchQuery: (query: string) => any
};

class NavbarContainer extends Component<Props> {
  componentDidMount() {
    const { updateSearchQuery, location } = this.props;
    const query = qs.parse(location.search).q;

    if (query) {
      updateSearchQuery(query);
    }
  }

  updateSearch = event => {
    const { updateSearchQuery } = this.props;
    updateSearchQuery(event.currentTarget.value);
  };

  findGame = event => {
    const { history, searchQuery } = this.props;
    event.preventDefault();
    history.push({
      pathname: SEARCH_RESULTS_PATH,
      search: `?q=${searchQuery}`
    });
  };

  render() {
    const { isUserLoggedIn, searchQuery } = this.props;
    return (
      <Navbar
        isUserLoggedIn={isUserLoggedIn}
        searchQuery={searchQuery}
        onSearchInputChange={this.updateSearch}
        onSearchSubmit={this.findGame}
      />
    );
  }
}

const mapStateToProps = ({ currentUser, search }) => ({
  isUserLoggedIn: currentUser.isLoggedIn,
  searchQuery: search.query
});

const mapDispatchToProps = {
  logUserIn,
  updateSearchQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(NavbarContainer)
);
