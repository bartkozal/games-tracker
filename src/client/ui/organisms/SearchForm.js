import React, { Component } from "react";
import { connect } from "react-redux";
import SearchInput from "../molecules/SearchInput";
import { updateQuery } from "../../state/search/actionCreators";
import { searchQuery } from "../../state/search/actions";

const mapStateToProps = ({ Search }) => ({
  query: Search.query
});

const mapDispatchToProps = {
  updateQuery,
  searchQuery
};

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
      <SearchInput
        onSubmit={this.searchGames}
        onChange={this.updateSearchInput}
        value={query}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
