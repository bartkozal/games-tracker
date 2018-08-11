import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Game } from "types";
import { Flex, Box } from "ui/atoms/FlexBox";
import GameCard from "ui/organisms/GameCard";
import SearchForm from "ui/organisms/SearchForm";

const mapStateToProps = ({ Search }) => ({
  results: Search.results
});

const SearchResultsPage = ({ results }) => (
  <Fragment>
    <SearchForm />

    <Flex collapse>
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
