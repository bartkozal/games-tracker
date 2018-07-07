import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signInWithFacebook, signOut } from "../../state/auth/actions";
import { ROOT_PATH, PROFILE_PATH } from "../../routes/paths";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { Box, Flex } from "../atoms/FlexBox";
import Avatar from "../molecules/Avatar";

const mapStateToProps = ({ Auth }) => ({
  currentUser: Auth.currentUser
});

const mapDispatchToProps = {
  signInWithFacebook,
  signOut
};

class Navbar extends Component {
  render() {
    const { currentUser, signInWithFacebook, signOut } = this.props;

    return (
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Link to={ROOT_PATH}>
            <Title>Games Tracker</Title>
          </Link>
        </Box>

        <Box>
          {currentUser.email ? (
            <Flex alignItems="center">
              <Box>
                <Link to={PROFILE_PATH}>
                  <Avatar email={currentUser.email} />
                </Link>
              </Box>

              <Box>
                <Button onClick={signOut}>Sign out</Button>
              </Box>
            </Flex>
          ) : (
            <Button type="facebook" onClick={signInWithFacebook}>
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
