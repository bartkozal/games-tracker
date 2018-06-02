import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import Search from "../features/Search";
import SearchResults from "../features/SearchResults";

const SearchPage = () => (
  <BaseLayout>
    <Search />
    <SearchResults />
  </BaseLayout>
);

export default SearchPage;
