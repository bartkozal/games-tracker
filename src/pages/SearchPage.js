import React, { Fragment } from "react";
import Search from "../features/Search";
import SearchResults from "../features/SearchResults";

const SearchPage = () => (
  <Fragment>
    <Search />
    <SearchResults />
  </Fragment>
);

export default SearchPage;
