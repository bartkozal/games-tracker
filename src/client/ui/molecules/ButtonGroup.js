import React from "react";
import Button from "../atoms/Button";

export const ButtonGroup = ({ buttons }) =>
  buttons.map(({ caption, type, callback }) => (
    <Button key={caption} type={type} onClick={callback}>
      {caption}
    </Button>
  ));

export default ButtonGroup;
