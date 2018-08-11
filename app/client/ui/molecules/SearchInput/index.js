import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onSubmit, onChange, value }) => (
  <form onSubmit={onSubmit}>
    <input
      onChange={onChange}
      value={value}
      type="search"
      data-test="search-input"
    />
  </form>
);

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default SearchInput;
