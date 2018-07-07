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
      {results.map(({ name, cover, platforms }) => (
        <Box key={name} size="25%">
          <GameCard name={name} cover={cover} platforms={platforms} />
        </Box>
      ))}
    </Flex>
  </Fragment>
);

export default connect(mapStateToProps)(SearchResultsPage);
