import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import { signUserIn, signUserOut } from "./actionCreators";
import { PROFILE_PATH } from "../../config/routes";
import Button from "../../elements/Button";
import Avatar from "../../elements/Avatar";
import { Box, Flex } from "../../elements/FlexBox";

class Auth extends Component {
  componentDidMount() {
    // TODO
    // firebaseAuth.onAuthStateChanged(user => {
    //   if (user) {
    //     this.props.signUserIn(user);
    //   } else {
    //     this.props.signUserOut();
    //   }
    // });
  }

  signInWithFacebook() {
    // TODO
    // firebaseAuth.signInWithRedirect(facebookAuthProvider);
  }

  signOut() {
    // TODO
    // firebaseAuth.signOut();
  }

  render() {
    const { currentUser } = this.props;

    if (!currentUser) {
      return null;
    }

    return isEmpty(currentUser) ? (
      <Button type="facebook" onClick={this.signInWithFacebook}>
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
          <Button onClick={this.signOut}>Sign out</Button>
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = ({ Auth }) => ({
  currentUser: Auth.currentUser
});

const mapDispatchToProps = {
  signUserIn,
  signUserOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
