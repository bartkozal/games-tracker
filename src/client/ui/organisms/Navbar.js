import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import { signUserIn, signUserOut } from "../../state/auth/actionCreators";
import { ROOT_PATH, PROFILE_PATH } from "../../routes/paths";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { Box, Flex } from "../atoms/FlexBox";
import Avatar from "../molecules/Avatar";

const mapStateToProps = ({ Auth }) => ({
  currentUser: Auth.currentUser
});

const mapDispatchToProps = {
  signUserIn,
  signUserOut
};

class Navbar extends Component {
  render() {
    const { currentUser, signUserIn, signUserOut } = this.props;

    return (
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Link to={ROOT_PATH}>
            <Title>Games Tracker</Title>
          </Link>
        </Box>

        <Box>
          {isEmpty(currentUser) ? (
            <Button type="facebook" onClick={signUserIn}>
              Sign in with Facebook
            </Button>
          ) : (
            <Flex alignItems="center">
              <Box>
                <Link to={PROFILE_PATH}>
                  <Avatar email={currentUser.email} />
                </Link>
              </Box>

              <Box>
                <Button onClick={signUserOut}>Sign out</Button>
              </Box>
            </Flex>
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
