import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuery } from "./actionCreators";
import { searchQuery } from "./actions";
import SearchForm from "../../ui/SearchForm";

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
      <SearchForm
        onSubmit={this.searchGames}
        onChange={this.updateSearchInput}
        value={query}
      />
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
