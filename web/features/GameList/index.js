// @flow
import React from "react";
import { times } from "lodash-es";
import Game from "features/Game";
import Container from "ui/Container";

type Props = {
  count?: number
};

const GameList = ({ count = 7 }: Props) => (
  <Container noGap>{times(count, key => <Game key={key} />)}</Container>
);

export default GameList;
