import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchResults from "./SearchResults";
import Collection from "./Collection";

const mapStateToProps = ({ Auth, Search }) => ({
  userSignedIn: Auth.userSignedIn,
  haveSearchResults: !!Search.results.length
});

const HomePage = ({ userSignedIn, haveSearchResults }) => (
  <Fragment>
    {haveSearchResults ? <SearchResults /> : userSignedIn && <Collection />}
  </Fragment>
);

HomePage.propTypes = {
  userSignedIn: PropTypes.bool,
  haveSearchResults: PropTypes.bool
};

export default connect(mapStateToProps)(HomePage);
