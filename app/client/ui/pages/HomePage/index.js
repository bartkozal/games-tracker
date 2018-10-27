// @flow
import * as React from "react";
import { connect } from "react-redux";
import SearchResults from "./SearchResults";
import GamesCollection from "./GamesCollection";

const mapStateToProps = ({ Auth, Search }) => ({
  userSignedIn: Auth.userSignedIn,
  haveSearchResults: !!Search.results.length
});

type Props = {
  userSignedIn: boolean,
  haveSearchResults: boolean
};

const HomePage = ({ userSignedIn, haveSearchResults }: Props) =>
  haveSearchResults ? <SearchResults /> : userSignedIn && <GamesCollection />;

export default connect(mapStateToProps)(HomePage);
