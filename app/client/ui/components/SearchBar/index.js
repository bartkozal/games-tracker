// @flow
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ROOT_PATH } from "routes/paths";
import {
  searchQuery,
  updateQuery,
  clearSearchResults
} from "state/search/actions";
import Icon from "ui/components/Icon";
import "./search-bar.scss";

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
  updateQuery: Function,
  history: {
    push: Function
  }
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
    this.props.history.push(ROOT_PATH);
  };

  render() {
    const { query, haveSearchResults, clearSearchResults } = this.props;

    return (
      <form onSubmit={this.searchGames} className="search-bar">
        <input
          data-cy="search-bar-input"
          type="text"
          onChange={this.updateQuery}
          value={query}
          className="search-bar-input"
        />

        <div className="search-bar-submit">
          {haveSearchResults ? (
            <Icon name="cancel" onClick={clearSearchResults} />
          ) : (
            <Icon name="search" onClick={this.searchGames} />
          )}
        </div>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));
