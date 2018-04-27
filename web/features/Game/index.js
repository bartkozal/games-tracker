import React from "react";
import PropTypes from "prop-types";
import Container from "ui/Container";
import Cover from "./Cover";
import Title from "./Title";
import Platforms from "./Platforms";
import Rating from "./Rating";
import Status from "./Status";

const COVER_URL = "//picsum.photos/128/175/";

const Game = ({ cover, title, platforms, rating, userRating, userStatus }) => (
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

Game.defaultProps = {
  cover: COVER_URL,
  platforms: []
};

Game.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
  platforms: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  userRating: PropTypes.number,
  userStatus: PropTypes.oneOf(["playing", "backlog", "wishlist", "completed"])
};

export default Game;
