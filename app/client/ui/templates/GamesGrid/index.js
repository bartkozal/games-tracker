import React from "react";
import PropTypes from "prop-types";
import { Game } from "types";
import GameCard from "ui/organisms/GameCard";
import $GridArea from "./$GridArea";
import $GridItem from "./$GridItem";

const GamesGrid = ({ of: collection = [] }) => (
  <$GridArea>
    {collection.map(game => (
      <$GridItem key={game.id}>
        <GameCard game={game} />
      </$GridItem>
    ))}
  </$GridArea>
);

GamesGrid.propTypes = {
  of: PropTypes.arrayOf(Game)
};

export default GamesGrid;
