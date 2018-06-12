import React from "react";
import Rating from "../elements/Rating";
import GameStatus from "./GameStatus";
import { Flex, Box } from "../elements/FlexBox";

const GameCard = ({
  name,
  cover,
  platforms,
  rating,
  userRating,
  userGameStatus
}) => (
  <Flex>
    <Box>
      <img src={cover} alt={name} width={150} />
    </Box>

    <Box>
      <div>{name}</div>
      <div>{platforms}</div>
      <Rating score={rating} />
      <Rating score={userRating} />
      <GameStatus type={userGameStatus} />
    </Box>
  </Flex>
);

export default GameCard;
