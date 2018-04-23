import React, { Fragment } from "react";
import GameList from "features/GameList";
import Flex from "ui/Flex";

const DiscoverPage = () => (
  <Fragment>
    <Flex equal>
      <h3>Keep track and manage your collection</h3>
      <h3>Rate, get recommendations and discover new games</h3>
      <h3>Share what are you currently playing</h3>
    </Flex>

    <h2>New releases</h2>
    <GameList />

    <h2>Trending</h2>
    <GameList />

    <h2>Upcoming</h2>
    <GameList />
  </Fragment>
);

export default DiscoverPage;
