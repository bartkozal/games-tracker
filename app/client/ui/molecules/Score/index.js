import React from "react";
import PropTypes from "prop-types";

const Score = ({ value, votes }) =>
  votes ? (
    <span>
      <span role="img" aria-label="star">
        ⭐️
      </span>
      {value} / {votes}
    </span>
  ) : null;

Score.propTypes = {
  value: PropTypes.number,
  votes: PropTypes.number
};

export default Score;
