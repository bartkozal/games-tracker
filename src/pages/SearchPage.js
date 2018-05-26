import React from "react";
import Search from "../features/Search";
import SearchResults from "../features/SearchResults";
import Container from "../ui/Container";

const SearchPage = () => (
  <Container>
    <Search />
    <SearchResults />
  </Container>
);

export default SearchPage;
