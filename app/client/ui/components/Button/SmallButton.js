// @flow
import * as React from "react";
import Button from "./Button";

type Props = {
  children: React.Node,
  onClick: Function
};

const SmallButton = ({ children, onClick }: Props) => (
  <Button
    className="text-small button-small"
    onClick={onClick}
    testId={`small-${String(children)}`}
  >
    {children}
  </Button>
);

export default SmallButton;
