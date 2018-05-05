// @flow
import React from "react";
import Game from "features/Game";
import Container from "ui/Container";
import { times } from "lodash-es";

const SearchResultsPage = () => (
  <Container equal>
    {times(3, key => (
      <Game
        title="Mario Odyssey"
        platforms={["Switch"]}
        rating={9.5}
        userRating={10}
        userStatus="playing"
        key={key}
      />
    ))}
  </Container>
);

export default SearchResultsPage;
