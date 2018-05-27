import React, { Fragment } from "react";
import { connect } from "react-redux";
import GameCard from "../GameCard";

const SearchResults = ({ results }) => (
  <Fragment>
    {results.map(props => <GameCard key={props.name} {...props} />)}
  </Fragment>
);

const mapStateToProps = ({ Search }) => ({
  results: Search.results
});

export default connect(mapStateToProps)(SearchResults);
