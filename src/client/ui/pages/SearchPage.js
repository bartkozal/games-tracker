import React, { Fragment } from "react";
import SearchForm from "../organisms/SearchForm";
import SearchResults from "../organisms/SearchResults";

const SearchPage = () => (
  <Fragment>
    <SearchForm />
    <SearchResults />
  </Fragment>
);

export default SearchPage;
