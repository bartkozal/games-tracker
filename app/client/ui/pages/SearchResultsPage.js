import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Game } from "../../types";
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
        <Box key={game.id} size="25%">
          <GameCard game={game} />
        </Box>
      ))}
    </Flex>
  </Fragment>
);

SearchResultsPage.propTypes = {
  results: PropTypes.arrayOf(Game)
};

export default connect(mapStateToProps)(SearchResultsPage);
