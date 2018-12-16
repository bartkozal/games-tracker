// @flow
import * as React from "react";
import Button from "./Button";
import formatTestId from "ui/utils/formatTestId";

type Props = {
  children: React.Node,
  onClick?: Function,
  testId?: string
};

const SmallButton = ({ children, onClick, testId }: Props) => (
  <Button
    className="text-small button-small"
    onClick={onClick}
    testId={formatTestId("small", testId || String(children))}
  >
    {children}
  </Button>
);

export default SmallButton;
