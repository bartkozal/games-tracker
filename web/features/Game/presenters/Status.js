// @flow
import React from "react";
import { capitalize } from "lodash-es";
import type { GameStatus } from "..";

type Props = {
  children: ?GameStatus
};

const Status = ({ children }: Props) => {
  if (!children) return null;

  return <div>{capitalize(children)}</div>;
};

export default Status;
