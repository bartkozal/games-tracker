import React from "react";
import PropTypes from "prop-types";
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

Rating.propTypes = {
  rating: PropTypes.number,
  userRating: PropTypes.number
};

export default Rating;
