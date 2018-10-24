import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import SearchResults from "./SearchResults";
// import GamesCollection from "./GamesCollection";

const mapStateToProps = ({ Auth, Search }) => ({
  userSignedIn: Auth.userSignedIn,
  haveSearchResults: !!Search.results.length
});

// TODO
const HomePage = ({ userSignedIn, haveSearchResults }) => (
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi eum
    laborum voluptate voluptates sit aspernatur qui! Enim laboriosam laborum
    soluta numquam nemo illo sequi! Hic odit nemo asperiores dolores?
  </div>
);
// haveSearchResults ? <SearchResults /> : userSignedIn && <GamesCollection />;

HomePage.propTypes = {
  userSignedIn: PropTypes.bool,
  haveSearchResults: PropTypes.bool
};

export default connect(mapStateToProps)(HomePage);
