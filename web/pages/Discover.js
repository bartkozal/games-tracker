import React, { Fragment } from "react";
import GameList from "features/GameList";
import Flex from "ui/Flex";
import Heading from "ui/Heading";

const DiscoverPage = () => (
  <Fragment>
    <Flex equal>
      <Heading level={3} noAscent>
        Keep track and manage your collection
      </Heading>
      <Heading level={3} noAscent>
        Rate, get recommendations and discover new games
      </Heading>
      <Heading level={3} noAscent>
        Share what are you currently playing
      </Heading>
    </Flex>

    <Heading level={3}>New releases</Heading>
    <GameList />

    <Heading level={3}>Trending</Heading>
    <GameList />

    <Heading level={3}>Upcoming</Heading>
    <GameList />
  </Fragment>
);

export default DiscoverPage;
