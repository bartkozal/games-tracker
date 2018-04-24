import React from "react";
import PropTypes from "prop-types";
import { times } from "lodash-es";
import Game from "features/Game";
import Container from "ui/Container";

const GameList = ({ count = 7 }) => (
  <Container>{times(count, key => <Game key={key} />)}</Container>
);

GameList.propTypes = {
  count: PropTypes.number
};

export default GameList;
