// @flow
import * as React from "react";
import { connect } from "react-redux";
import Spinner from "ui/components/Spinner";
import SearchResults from "./SearchResults";
import GamesCollection from "./GamesCollection";

const mapStateToProps = ({ Auth, Search }) => ({
  userSignedIn: Auth.userSignedIn,
  haveSearchResults: Boolean(Search.results.length),
  isSearching: Search.isSearching
});

type Props = {
  userSignedIn: boolean,
  haveSearchResults: boolean,
  isSearching: boolean
};

const HomePage = ({ userSignedIn, haveSearchResults, isSearching }: Props) => {
  if (isSearching) return <Spinner />;
  if (haveSearchResults) return <SearchResults />;
  if (userSignedIn) return <GamesCollection />;
  return null;
};

export default connect(mapStateToProps)(HomePage);
