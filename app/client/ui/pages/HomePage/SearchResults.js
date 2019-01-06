// @flow
import * as React from "react";
import { connect } from "react-redux";
import type { Game } from "types";
import Grid from "ui/components/Grid";
import { SearchCard } from "ui/components/Card";

const mapStateToProps = ({ Search }) => ({
  searchResults: Search.results
});

type Props = {
  searchResults: Game[]
};

const SearchResults = ({ searchResults }: Props) => (
  <Grid of={searchResults} perRow={5}>
    {(game: Game) => <SearchCard game={game} />}
  </Grid>
);

export default connect(mapStateToProps)(SearchResults);
