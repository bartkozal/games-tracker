import React, { Fragment } from "react";
import Flex from "../ui/Flex";
import GameList from "../features/GameList";

const DiscoverPage = () => (
  <Fragment>
    <h1>Games Tracker</h1>

    <Flex>
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
