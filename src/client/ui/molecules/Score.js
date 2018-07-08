import React from "react";

const Rating = ({ value, votes }) =>
  votes ? (
    <span>
      <span role="img" aria-label="star">
        ⭐️
      </span>
      {value} / {votes}
    </span>
  ) : null;

export default Rating;
