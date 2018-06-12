import React, { Component, Fragment } from "react";
import { Subtitle } from "../../elements/Headings";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Subtitle>Playing</Subtitle>
        <Subtitle>Backlog</Subtitle>
        <Subtitle>Wishlist</Subtitle>
        <Subtitle>Completed</Subtitle>
      </Fragment>
    );
  }
}

export default Profile;
