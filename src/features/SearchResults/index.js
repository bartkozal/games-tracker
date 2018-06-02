import React from "react";
import { connect } from "react-redux";
import Game from "../Game";
import { Flex, Box } from "../../ui/FlexBox";

const SearchResults = ({ results }) => (
  <Flex wrap="wrap">
    {results.map(props => (
      <Box key={props.name} size="33.33%">
        <Game {...props} />
      </Box>
    ))}
  </Flex>
);

const mapStateToProps = ({ Search }) => ({
  results: Search.results
});

export default connect(mapStateToProps)(SearchResults);
