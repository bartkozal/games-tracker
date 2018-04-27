import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "lodash-es";

const Status = ({ children }) => {
  if (!children) return null;

  return <div>{capitalize(children)}</div>;
};

Status.propTypes = {
  children: PropTypes.oneOf(["playing", "backlog", "wishlist", "completed"])
};

export default Status;
