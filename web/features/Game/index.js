import React from "react";
import Container from "ui/Container";
import Cover from "./presenters/Cover";
import Title from "./presenters/Title";
import Platforms from "./presenters/Platforms";
import Rating from "./presenters/Rating";
import Status from "./presenters/Status";

// export type GameStatus = "playing" | "backlog" | "wishlist" | "completed";

// type Props = {
//   cover?: string,
//   title?: string,
//   platforms?: string[],
//   rating?: number,
//   userRating?: number,
//   userStatus?: GameStatus
// };

const COVER_URL = "//picsum.photos/128/175/";

const Game = ({
  cover = COVER_URL,
  title,
  platforms = [],
  rating,
  userRating,
  userStatus
}) => (
  <Container alignItems="center">
    <Cover>{cover}</Cover>

    <div>
      <Title>{title}</Title>
      <Platforms>{platforms}</Platforms>
      <Rating rating={rating} userRating={userRating} />
      <Status>{userStatus}</Status>
    </div>
  </Container>
);

export default Game;
