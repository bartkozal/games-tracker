import React from "react";
import GameCard from "../../ui/GameCard";

const Game = ({ name, cover, platforms }) => (
  <GameCard
    name={name}
    cover={cover}
    platforms={platforms.join(", ")}
    rating={7.7}
    userRating={7}
    userGameStatus={null}
  />
);

export default Game;
