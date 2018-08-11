import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Game } from "types";
import GameCardGrid from "ui/organisms/GameCardGrid";
import SearchForm from "ui/organisms/SearchForm";

const mapStateToProps = ({ Search }) => ({
  results: Search.results
});

const SearchResultsPage = ({ results }) => (
  <Fragment>
    <SearchForm />
    <GameCardGrid collection={results} />
  </Fragment>
);

SearchResultsPage.propTypes = {
  results: PropTypes.arrayOf(Game)
};

export default connect(mapStateToProps)(SearchResultsPage);
