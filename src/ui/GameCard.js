import React from "react";
import Rating from "./Rating";
import GameStatus from "./GameStatus";

const GameCard = ({
  name,
  cover,
  platforms,
  rating,
  userRating,
  userGameStatus
}) => (
  <div>
    <img src={cover} alt={name} />
    <div>
      <div>{name}</div>
      <div>{platforms}</div>
      <Rating score={rating} />
      <Rating score={userRating} />
      <GameStatus type={userGameStatus} />
    </div>
  </div>
);

export default GameCard;
