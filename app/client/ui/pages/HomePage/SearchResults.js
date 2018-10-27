// @flow
import React from "react";
import { connect } from "react-redux";
import { type Game } from "types";
import Grid from "ui/containers/Grid";

const mapStateToProps = ({ Search }) => ({
  searchResults: Search.results
});

type Props = {
  searchResults: Game[]
};

const SearchResults = ({ searchResults }: Props) => (
  <Grid of={searchResults} perRow={5}>
    {(game: Game) => <div>{game.name}</div>}
    {/* <GameCard game={game} /> */}
  </Grid>
);

export default connect(mapStateToProps)(SearchResults);
