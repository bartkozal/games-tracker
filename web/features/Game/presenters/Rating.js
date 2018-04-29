import React from "react";
import Container from "ui/Container";

const Rating = ({ rating, userRating }) => {
  if (!rating || !userRating) return null;

  return (
    <Container direction="column">
      {rating && <div>Avg rating: ★ {rating}</div>}
      {userRating && <div>Your rating: ★ {userRating}</div>}
    </Container>
  );
};

export default Rating;
