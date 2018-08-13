import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PROFILE_PATH, FACEBOOK_AUTH_PATH } from "routes/paths";
import { setCurrentUser, signOut } from "state/auth/actions";
import Button from "ui/atoms/Button";
import { Box, Flex } from "ui/atoms/FlexBox";
import Avatar from "ui/molecules/Avatar";
import Logo from "ui/atoms/Logo";

const mapStateToProps = ({ Auth }) => ({
  currentUser: Auth.currentUser,
  userSignedIn: Auth.userSignedIn
});

const mapDispatchToProps = {
  setCurrentUser,
  signOut
};

class Navbar extends Component {
  static propTypes = {
    currentUser: PropTypes.shape({
      email: PropTypes.string
    }),
    userSignedIn: PropTypes.bool,
    setCurrentUser: PropTypes.func,
    signOut: PropTypes.func
  };

  componentDidMount() {
    this.props.setCurrentUser();
  }

  render() {
    const { userSignedIn, currentUser, signOut } = this.props;

    return (
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Logo />
        </Box>

        <Box>
          {userSignedIn ? (
            <Flex alignItems="center">
              <Box>
                <Link to={PROFILE_PATH} data-test="link-profile">
                  <Avatar email={currentUser.email} />
                </Link>
              </Box>

              <Box>
                <Button onClick={signOut}>Sign out</Button>
              </Box>
            </Flex>
          ) : (
            <Button
              type="facebook"
              onClick={() => window.location.assign(FACEBOOK_AUTH_PATH)}
            >
              Sign in with Facebook
            </Button>
          )}
        </Box>
      </Flex>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
