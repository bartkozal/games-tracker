import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  searchQuery,
  updateQuery,
  clearSearchResults
} from "state/search/actions";
import Icon from "ui/atoms/Icon";
import Button from "ui/atoms/Button";
import $SearchForm from "./$SearchForm";
import $SearchInput from "./$SearchInput";
import $SearchIcon from "./$SearchIcon";

const mapStateToProps = ({ Search }) => ({
  haveSearchResults: !!Search.results.length,
  query: Search.query
});

const mapDispatchToProps = {
  searchQuery,
  updateQuery,
  clearSearchResults
};

class SearchBar extends Component {
  static propTypes = {
    query: PropTypes.string,
    searchQuery: PropTypes.func,
    haveSearchResults: PropTypes.bool,
    clearSearchResults: PropTypes.func,
    updateQuery: PropTypes.func
  };

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

  clearResults = () => {
    this.props.clearSearchResults();
  };

  render() {
    const { query, haveSearchResults } = this.props;

    return (
      <$SearchForm onSubmit={this.searchGames}>
        <$SearchInput
          onChange={this.updateQuery}
          value={query}
          type="text"
          data-test="search-input"
        />
        <$SearchIcon>
          {haveSearchResults ? (
            <Button onClick={this.clearResults}>✕</Button>
          ) : (
            <Icon type="search" onClick={this.searchGames} />
          )}
        </$SearchIcon>
      </$SearchForm>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
