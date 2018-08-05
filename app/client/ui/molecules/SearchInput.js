import React from "react";

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

export default SearchInput;
