import React, { Fragment } from "react";
import GameList from "features/GameList";
import Container from "ui/Container";
import { H3 } from "ui/Heading";

const DiscoverPage = () => (
  <Fragment>
    <Container equal>
      <H3 noAscent>Keep track and manage your collection</H3>
      <H3 noAscent>Rate, get recommendations and discover new games</H3>
      <H3 noAscent>Share what are you currently playing</H3>
    </Container>

    <H3>New releases</H3>
    <GameList />

    <H3>Trending</H3>
    <GameList />

    <H3>Upcoming</H3>
    <GameList />
  </Fragment>
);

export default DiscoverPage;
