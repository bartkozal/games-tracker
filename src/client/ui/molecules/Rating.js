import React from "react";

const Rating = ({ score }) => (
  <div>
    <span role="img" aria-label="star">
      ⭐️
    </span>
    {score}
  </div>
);

export default Rating;
