import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuery } from "./actionCreators";
import { searchQuery } from "./actions";

class Search extends Component {
  updateSearchInput = event => {
    const { updateQuery } = this.props;

    updateQuery(event.target.value);
  };

  searchGames = event => {
    const { query, searchQuery } = this.props;

    event.preventDefault();
    searchQuery(query);
  };

  render() {
    const { query } = this.props;

    return (
      <form onSubmit={this.searchGames}>
        <input onChange={this.updateSearchInput} value={query} type="search" />
      </form>
    );
  }
}

const mapStateToProps = ({ Search }) => ({
  query: Search.query
});

const mapDispatchToProps = {
  updateQuery,
  searchQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
