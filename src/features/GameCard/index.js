import React from "react";

const GameCard = ({ name, cover, platforms }) => (
  <div key={name}>
    <img src={cover} alt={name} />
    <div>
      <div>{name}</div>
      <div>{platforms.join(", ")}</div>
    </div>
  </div>
);

export default GameCard;
