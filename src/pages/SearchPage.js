import React from "react";
import Search from "../features/Search";
import SearchResults from "../features/SearchResults";
import Container from "../ui/Container";
import Navbar from "../ui/Navbar";

const SearchPage = () => (
  <Container>
    <Navbar />
    <Search />
    <SearchResults />
  </Container>
);

export default SearchPage;
