import React from "react";
import Game from "features/Game";
import Flex from "ui/Flex";

const SearchPage = () => (
  <Flex>
    <Game
      title="Mario Odyssey"
      platforms={["Switch"]}
      rating={9.5}
      userRating={10}
      userStatus="playing"
    />
  </Flex>
);

export default SearchPage;
