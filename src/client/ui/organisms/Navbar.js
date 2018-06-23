// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  signUserIn,
  signUserOut,
  type SignUserIn,
  type SignUserOut
} from "../../state/auth/actionCreators";
import { ROOT_PATH, PROFILE_PATH } from "../../routes/paths";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { Box, Flex } from "../atoms/FlexBox";
import Avatar from "../molecules/Avatar";
import type { State } from "../../state";

const mapStateToProps = ({ Auth }: State) => ({
  currentUser: Auth.currentUser
});

const mapDispatchToProps = {
  signUserIn,
  signUserOut
};

type Props = {
  currentUser: CurrentUser,
  signUserIn: SignUserIn,
  signUserOut: SignUserOut
};

class Navbar extends Component<Props> {
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
          {currentUser.email ? (
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
          ) : (
            <Button
              type="facebook"
              onClick={() => signUserIn({ email: "bkzl@me.com" })}
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
