import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchQuery } from "state/search/actions";
import SearchInput from "ui/molecules/SearchInput";

const mapDispatchToProps = {
  searchQuery
};

class Search extends Component {
  static propTypes = {
    searchQuery: PropTypes.func
  };

  state = {
    query: ""
  };

  updateQuery = event => {
    this.setState({
      query: event.target.value
    });
  };

  searchGames = event => {
    event.preventDefault();
    this.props.searchQuery(this.state.query);
  };

  render() {
    return (
      <SearchInput
        onSubmit={this.searchGames}
        onChange={this.updateQuery}
        value={this.state.query}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
