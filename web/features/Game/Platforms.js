import React from "react";
import PropTypes from "prop-types";
import Container from "ui/Container";

const Platforms = ({ children }) => {
  if (!children.length) return null;

  return <Container>{children.join(", ")}</Container>;
};

Platforms.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Platforms;
