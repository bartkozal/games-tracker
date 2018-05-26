import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuery } from "./actionCreators";

class Search extends Component {
  updateSearchInput = event => {
    this.props.updateQuery(event.target.value);
  };

  searchGames = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.searchGames}>
        <input
          onChange={this.updateSearchInput}
          value={this.props.query}
          type="search"
        />
      </form>
    );
  }
}

const mapStateToProps = ({ Search }) => ({
  query: Search.query
});

const mapDispatchToProps = {
  updateQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
