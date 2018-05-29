import React from "react";

const SearchForm = ({ onSubmit, onChange, value }) => (
  <form onSubmit={onSubmit}>
    <input onChange={onChange} value={value} type="search" />
  </form>
);

export default SearchForm;
