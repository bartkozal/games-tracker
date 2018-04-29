// @flow
import React, { Fragment } from "react";
import Game from "features/Game";
import Container from "ui/Container";

const GamePage = () => (
  <Fragment>
    <Game
      title="Mario Odyssey"
      platforms={["Switch"]}
      rating={9.5}
      userRating={10}
      userStatus="playing"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos
      doloribus quo nam hic deleniti laudantium magni sed animi nostrum saepe,
      non cumque dolorum consectetur recusandae sapiente, vel perspiciatis id?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos
      doloribus quo nam hic deleniti laudantium magni sed animi nostrum saepe,
      non cumque dolorum consectetur recusandae sapiente, vel perspiciatis id?
    </p>
    <Container>
      <img src="//picsum.photos/160/120/" />
      <img src="//picsum.photos/160/120/" />
      <img src="//picsum.photos/160/120/" />
      <img src="//picsum.photos/160/120/" />
    </Container>
  </Fragment>
);

export default GamePage;
