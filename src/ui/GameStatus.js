import React from "react";
import Button from "./Button";

const GameStatus = ({ type }) => (
  <div>{type ? type : <Button>Add to Shelf</Button>}</div>
);

export default GameStatus;
