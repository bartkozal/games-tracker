import React from "react";
import { Flex, Box } from "../atoms/FlexBox";
import Image from "../atoms/Image";
import Dropdown from "../molecules/Dropdown";
import Rating from "../molecules/Rating";

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
            { label: "Wishlist", onClick: () => null },
            { label: "Backlog", onClick: () => null },
            { label: "Playing", onClick: () => null },
            { label: "Completed", onClick: () => null }
          ]}
        />
      )}
    </Box>
  </Flex>
);

export default GameCard;
