import React, { PureComponent } from "react";
import Firebase from "firebase/app";
import Button from "../../ui/Button";

class Auth extends PureComponent {
  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Auth status: USER");
        console.log(user);
      } else {
        console.log("Auth status: NO USER");
      }
    });
  }

  signInWithFacebook() {
    const facebookProvider = new Firebase.auth.FacebookAuthProvider();
    Firebase.auth().signInWithRedirect(facebookProvider);
  }

  signOut() {
    Firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <Button type="facebook" onClick={this.signInWithFacebook}>
          Sign in with Facebook
        </Button>

        <Button onClick={this.signOut}>Sign out</Button>
      </div>
    );
  }
}

export default Auth;
