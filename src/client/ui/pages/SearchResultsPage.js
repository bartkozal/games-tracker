import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Flex, Box } from "../atoms/FlexBox";
import GameCard from "../organisms/GameCard";
import SearchForm from "../organisms/SearchForm";

const mapStateToProps = ({ Search }: State) => ({
  results: Search.results
});

const SearchResultsPage = ({ results }: Props) => (
  <Fragment>
    <SearchForm />

    <Flex wrap="wrap">
      {results.map(({ name, cover, platforms }) => (
        <Box key={name} size="25%">
          <GameCard
            name={name}
            cover={cover}
            platforms={platforms}
            rating={7.7}
            userRating={7}
          />
        </Box>
      ))}
    </Flex>
  </Fragment>
);

export default connect(mapStateToProps)(SearchResultsPage);
