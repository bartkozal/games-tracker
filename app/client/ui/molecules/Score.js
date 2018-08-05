import React from "react";

const Score = ({ value, votes }) =>
  votes ? (
    <span>
      <span role="img" aria-label="star">
        ⭐️
      </span>
      {value} / {votes}
    </span>
  ) : null;

export default Score;
