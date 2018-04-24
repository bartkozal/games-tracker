import React from "react";
import Game from "features/Game";
import Container from "ui/Container";

const SearchPage = () => (
  <Container>
    <Game
      title="Mario Odyssey"
      platforms={["Switch"]}
      rating={9.5}
      userRating={10}
      userStatus="playing"
    />
  </Container>
);

export default SearchPage;
