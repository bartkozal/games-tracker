import React from "react";
import PropTypes from "prop-types";
import { range } from "lodash";
import Dropdown from "../Dropdown";

const Rating = ({ value, onRate }) => (
  <span>
    <Dropdown
      toggle={value || "Rate"}
      items={range(1, 11).map(rating => ({
        label: rating,
        callback: () => onRate(rating)
      }))}
    />
  </span>
);

Rating.propTypes = {
  value: PropTypes.number,
  onRate: PropTypes.func.isRequired
};

export default Rating;
