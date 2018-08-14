import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FACEBOOK_AUTH_PATH } from "routes/paths";
import { setCurrentUser, signOut } from "state/auth/actions";
import Button from "ui/atoms/Button";
import { Box, Flex } from "ui/atoms/FlexBox";
import Logo from "ui/atoms/Logo";
import Avatar from "ui/molecules/Avatar";
import SearchForm from "ui/molecules/SearchForm";
import StyledNavbar from "./StyledNavbar";

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
      <StyledNavbar>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Logo />
          </Box>

          <Box>
            <SearchForm />
          </Box>

          <Box>
            {userSignedIn ? (
              <Flex alignItems="center">
                <Box>
                  <Avatar email={currentUser.email} />
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
      </StyledNavbar>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
