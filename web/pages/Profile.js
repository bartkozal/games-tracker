import React, { Fragment } from "react";
import { H3 } from "ui/Heading";
import GameList from "features/GameList";

const ProfilePage = () => (
  <Fragment>
    <H3>Playing</H3>
    <GameList count={2} />

    <H3>Backlog</H3>
    <GameList count={3} />

    <H3>Wishlist</H3>
    <GameList count={7} />

    <H3>Completed</H3>
    <GameList count={4} />
  </Fragment>
);

export default ProfilePage;
