import React from "react";
import PropTypes from "prop-types";
import Container from "ui/Container";
import { H3 } from "ui/Heading";
import Rating from "ui/Rating";
import { capitalize } from "lodash-es";

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
    <img src={cover} />
    <div>
      {title && (
        <H3 noAscent noDescent>
          {title}
        </H3>
      )}

      {!!platforms.length && <small>{platforms.join(", ")}</small>}

      {(rating || userRating) && (
        <Rating>
          {rating && <li>Avg rating: ★ {rating}</li>}
          {userRating && <li>Your rating: ★ {userRating}</li>}
        </Rating>
      )}
      {userStatus && <span>{capitalize(userStatus)}</span>}
    </div>
  </Container>
);

Game.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  platforms: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  userRating: PropTypes.number,
  userStatus: PropTypes.oneOf(["playing"])
};

export default Game;
