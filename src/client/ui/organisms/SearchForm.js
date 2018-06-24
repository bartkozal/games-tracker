// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import SearchInput from "../molecules/SearchInput";
import { searchQuery, type SearchQuery } from "../../state/search/actions";

const mapDispatchToProps = {
  searchQuery
};

type Props = {
  searchQuery: SearchQuery
};

type State = {
  query: string
};

class Search extends Component<Props, State> {
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
