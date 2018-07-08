import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Flex, Box } from "../atoms/FlexBox";
import GameCard from "../organisms/GameCard";
import SearchForm from "../organisms/SearchForm";

const mapStateToProps = ({ Search }) => ({
  results: Search.results
});

const SearchResultsPage = ({ results }) => (
  <Fragment>
    <SearchForm />

    <Flex wrap="wrap">
      {results.map(game => (
        <Box key={game.name} size="25%">
          <GameCard game={game} />
        </Box>
      ))}
    </Flex>
  </Fragment>
);

export default connect(mapStateToProps)(SearchResultsPage);
