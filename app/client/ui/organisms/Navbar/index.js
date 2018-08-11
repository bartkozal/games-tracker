import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser, signOut } from "../../../state/auth/actions";
import {
  ROOT_PATH,
  PROFILE_PATH,
  FACEBOOK_AUTH_PATH
} from "../../../routes/paths";
import Button from "../../atoms/Button";
import Title from "../../atoms/Title";
import { Box, Flex } from "../../atoms/FlexBox";
import Avatar from "../../molecules/Avatar";

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
          <Link to={ROOT_PATH} data-test="link-home">
            <Title>Games Tracker</Title>
          </Link>
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
