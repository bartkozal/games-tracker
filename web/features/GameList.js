import React from "react";
import PropTypes from "prop-types";
import { times } from "lodash-es";
import Flex from "ui/Flex";

const GAME = <img src="//picsum.photos/128/175/" />;

const GameList = ({ count = 7 }) => (
  <Flex>{times(count, key => <div key={key}>{GAME}</div>)}</Flex>
);

GameList.propTypes = {
  count: PropTypes.number
};

export default GameList;
