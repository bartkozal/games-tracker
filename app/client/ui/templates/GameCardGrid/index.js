import React from "react";
import PropTypes from "prop-types";
import { Game } from "types";
import GameCard from "ui/organisms/GameCard";
import GameCardGridArea from "./GameCardGridArea";
import GameCardGridItem from "./GameCardGridItem";

const GameCardGrid = ({ collection = [] }) => (
  <GameCardGridArea>
    {collection.map(game => (
      <GameCardGridItem perRow={5} key={game.id}>
        <GameCard game={game} />
      </GameCardGridItem>
    ))}
  </GameCardGridArea>
);

GameCardGrid.propTypes = {
  collection: PropTypes.arrayOf(Game)
};

export default GameCardGrid;
