import React from "react";
import Button from "../atoms/Button";

const ButtonGroup = ({ buttons }) => (
  <div>
    {buttons.map(({ caption, type, callback }) => (
      <Button key={caption} type={type} onClick={callback}>
        {caption}
      </Button>
    ))}
  </div>
);

export default ButtonGroup;
