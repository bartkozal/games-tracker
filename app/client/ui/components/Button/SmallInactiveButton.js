// @flow
import * as React from "react";
import Button from "./Button";

type Props = {
  children: React.Node,
  onClick: Function
};

const SmallInactiveButton = ({ children, onClick }: Props) => (
  <Button
    className="text-small button-small button-inactive"
    onClick={onClick}
    testId={`small-inactive-${String(children)}`}
  >
    {children}
  </Button>
);

export default SmallInactiveButton;
