import React from "react";
import { connect } from "react-redux";
import { Flex, Box } from "../atoms/FlexBox";
import GameCard from "../molecules/GameCard";

const mapStateToProps = ({ Search }) => ({
  results: Search.results
});

const SearchResults = ({ results }) => (
  <Flex wrap="wrap">
    {results.map(({ name, cover, platforms }) => (
      <Box key={name} size="33.33%">
        <GameCard
          name={name}
          cover={cover}
          platforms={platforms}
          rating={7.7}
          userRating={7}
          userGameStatus={null}
        />
      </Box>
    ))}
  </Flex>
);

export default connect(mapStateToProps)(SearchResults);
