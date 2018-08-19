import React from "react";
import PropTypes from "prop-types";
import Button from "ui/atoms/Button";
import $ButtonGroup from "./$ButtonGroup";

const ButtonGroup = ({ buttons }) => (
  <$ButtonGroup size={buttons.length}>
    {buttons.map(({ caption, type, callback }) => (
      <Button key={caption} type={type} size="small" onClick={callback}>
        {caption}
      </Button>
    ))}
  </$ButtonGroup>
);

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.node.isRequired,
      type: PropTypes.string,
      callback: PropTypes.func.isRequired
    })
  ).isRequired
};

export default ButtonGroup;
