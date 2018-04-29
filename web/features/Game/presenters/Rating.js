// @flow
import React from "react";
import Container from "ui/Container";

type Props = {
  rating: ?number,
  userRating: ?number
};

const Rating = ({ rating, userRating }: Props) => {
  if (!rating || !userRating) return null;

  return (
    <Container direction="column">
      {rating && <div>Avg rating: ★ {rating}</div>}
      {userRating && <div>Your rating: ★ {userRating}</div>}
    </Container>
  );
};

export default Rating;
