import React from "react";
import { number } from "prop-types";
import Flex from "../ui/Flex";
import { times } from "lodash-es";

const GAME = <img src="//picsum.photos/128/175/" />;

const GameList = ({ count = 7 }) => (
  <Flex>{times(count, key => <div key={key}>{GAME}</div>)}</Flex>
);

GameList.propTypes = {
  count: number
};

export default GameList;
