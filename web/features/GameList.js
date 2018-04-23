import React from "react";
import PropTypes from "prop-types";
import { times } from "lodash-es";
import Game from "features/Game";
import Flex from "ui/Flex";

const GameList = ({ count = 7 }) => (
  <Flex>{times(count, key => <Game key={key} />)}</Flex>
);

GameList.propTypes = {
  count: PropTypes.number
};

export default GameList;
