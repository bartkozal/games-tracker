// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import SearchInput from "../molecules/SearchInput";
import {
  updateQuery,
  type UpdateQuery
} from "../../state/search/actionCreators";
import { searchQuery, type SearchQuery } from "../../state/search/actions";
import type { State } from "../../state";

const mapStateToProps = ({ Search }: State) => ({
  query: Search.query
});

const mapDispatchToProps = {
  updateQuery,
  searchQuery
};

type Props = {
  query: string,
  updateQuery: UpdateQuery,
  searchQuery: SearchQuery
};

class Search extends Component<Props> {
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
