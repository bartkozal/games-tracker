import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearResults } from "state/search/actionCreators";
import { searchQuery } from "state/search/actions";
import Icon from "ui/atoms/Icon";
import $SearchForm from "./$SearchForm";
import $SearchInput from "./$SearchInput";
import $SearchIcon from "./$SearchIcon";

const mapStateToProps = ({ Search }) => ({
  haveResults: !!Search.results.length
});

const mapDispatchToProps = {
  searchQuery,
  clearResults
};

class SearchBar extends Component {
  static propTypes = {
    haveResults: PropTypes.bool,
    searchQuery: PropTypes.func,
    clearResults: PropTypes.func
  };

  state = {
    query: ""
  };

  updateQuery = event => {
    const { value } = event.target;

    this.setState({
      query: value
    });

    if (!value.length) {
      this.props.clearResults();
    }
  };

  searchGames = event => {
    event.preventDefault();
    this.props.searchQuery(this.state.query);
  };

  clearResults = () => {
    this.setState({
      query: ""
    });

    this.props.clearResults();
  };

  render() {
    const { haveResults } = this.props;

    return (
      <$SearchForm onSubmit={this.searchGames}>
        <$SearchInput
          onChange={this.updateQuery}
          value={this.state.query}
          type="text"
          data-test="search-input"
        />
        <$SearchIcon>
          {haveResults ? (
            <button onClick={this.clearResults}>x</button>
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
