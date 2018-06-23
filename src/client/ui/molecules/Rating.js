// @flow
import React from "react";

type Props = {
  score: number
};

const Rating = ({ score }: Props) => (
  <div>
    <span role="img" aria-label="star">
      ⭐️
    </span>
    {score}
  </div>
);

export default Rating;
