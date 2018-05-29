import React from "react";

const GameStatus = ({ type }) => (
  <div>{type ? type : <button>Add to shelf</button>}</div>
);

export default GameStatus;
