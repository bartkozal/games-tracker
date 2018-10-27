// @flow
import * as React from "react";
import { connect } from "react-redux";
import {
  searchQuery,
  updateQuery,
  clearSearchResults
} from "state/search/actions";
import CancelIcon from "ui/foundations/icon/cancel.svg";
import SearchIcon from "ui/foundations/icon/search.svg";
import "./search-bar.css";

const mapStateToProps = ({ Search }) => ({
  haveSearchResults: !!Search.results.length,
  query: Search.query
});

const mapDispatchToProps = {
  searchQuery,
  updateQuery,
  clearSearchResults
};

type Props = {
  query: string,
  searchQuery: Function,
  haveSearchResults: boolean,
  clearSearchResults: Function,
  updateQuery: Function
};

class SearchBar extends React.Component<Props> {
  updateQuery = event => {
    const { value } = event.target;

    this.props.updateQuery(value);

    if (!value.length) {
      this.props.clearSearchResults();
    }
  };

  searchGames = event => {
    event.preventDefault();
    this.props.searchQuery(this.props.query);
  };

  render() {
    const { query, haveSearchResults, clearSearchResults } = this.props;

    return (
      <form onSubmit={this.searchGames} className="search-bar">
        <input
          data-cy="search-input"
          type="text"
          onChange={this.updateQuery}
          value={query}
          className="search-bar-input text-large"
        />

        <div className="search-bar-submit">
          {haveSearchResults ? (
            <CancelIcon onClick={clearSearchResults} />
          ) : (
            <SearchIcon onClick={this.searchGames} />
          )}
        </div>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
