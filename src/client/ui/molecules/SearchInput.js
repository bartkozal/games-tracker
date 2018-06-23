// @flow
import React from "react";

type Props = {
  onSubmit: (SyntheticEvent<HTMLFormElement>) => void,
  onChange: (SyntheticInputEvent<HTMLInputElement>) => void,
  value: string
};

const SearchInput = ({ onSubmit, onChange, value }: Props) => (
  <form onSubmit={onSubmit}>
    <input onChange={onChange} value={value} type="search" />
  </form>
);

export default SearchInput;
