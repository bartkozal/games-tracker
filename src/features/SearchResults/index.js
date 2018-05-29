import React, { Fragment } from "react";
import { connect } from "react-redux";
import Game from "../Game";

const SearchResults = ({ results }) => (
  <Fragment>
    {results.map(props => <Game key={props.name} {...props} />)}
  </Fragment>
);

const mapStateToProps = ({ Search }) => ({
  results: Search.results
});

export default connect(mapStateToProps)(SearchResults);
