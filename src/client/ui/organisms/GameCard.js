// @flow
import React from "react";
import { Flex, Box } from "../atoms/FlexBox";
import Image from "../atoms/Image";
import Dropdown from "../molecules/Dropdown";
import Rating from "../molecules/Rating";

type Props = {
  name: string,
  cover: string,
  platforms: Platform[],
  rating: number,
  userRating: number,
  userGameStatus?: GameStatus
};

const GameCard = ({
  name,
  cover,
  platforms,
  rating,
  userRating,
  userGameStatus
}: Props) => (
  <Flex>
    <Box>
      <Image src={cover} alt={name} width={150} />
    </Box>

    <Box>
      <div>{name}</div>
      <div>{platforms.join(", ")}</div>
      <Rating score={rating} />
      <Rating score={userRating} />
      {userGameStatus ? (
        userGameStatus
      ) : (
        <Dropdown
          toggle="Add to Shelf"
          items={[
            { label: "Wishlist", onClick: () => {} },
            { label: "Backlog", onClick: () => {} },
            { label: "Playing", onClick: () => {} },
            { label: "Completed", onClick: () => {} }
          ]}
        />
      )}
    </Box>
  </Flex>
);

export default GameCard;
