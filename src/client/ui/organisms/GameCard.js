// @flow
import React, { Fragment } from "react";
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
  <Fragment>
    <Flex justifyContent="space-between">
      <Box>
        <Rating score={rating} />
      </Box>
      <Box>
        <Rating score={userRating} />
      </Box>
    </Flex>

    <Image src={cover} alt={name} fullWidth />

    <div>{name}</div>
    <div>{platforms.join(", ")}</div>

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
  </Fragment>
);

export default GameCard;
