import React from "react";
import PropTypes from "prop-types";
import $GameCover from "./$GameCover";

const GameCover = ({ src }) => (
  <$GameCover style={{ backgroundImage: `url(${src})` }} />
);

GameCover.propTypes = {
  src: PropTypes.string.isRequired
};

export default GameCover;
