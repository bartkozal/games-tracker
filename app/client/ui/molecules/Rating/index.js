import React from "react";
import PropTypes from "prop-types";
import { range } from "lodash";
import Dropdown from "ui/molecules/Dropdown";
import Button from "ui/atoms/Button";

const Rating = ({ value, onRate }) => (
  <span>
    <Dropdown
      toggle={openDropdown => (
        <Button onClick={openDropdown}>{value || "Rate"}</Button>
      )}
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
