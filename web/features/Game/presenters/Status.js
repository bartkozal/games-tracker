import React from "react";
import { capitalize } from "lodash-es";

const Status = ({ children }) => {
  if (!children) return null;

  return <div>{capitalize(children)}</div>;
};

export default Status;
