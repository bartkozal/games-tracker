import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Game } from "types";
import GameCardGrid from "ui/templates/GameCardGrid";

const mapStateToProps = ({ Search }) => ({
  results: Search.results
});

const SearchResults = ({ results }) => (
  <Fragment>
    <GameCardGrid collection={results} />
  </Fragment>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(Game)
};

export default connect(mapStateToProps)(SearchResults);
