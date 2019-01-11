// @flow
import * as React from "react";
import Button from "./Button";
import formatTestId from "ui/utils/formatTestId";

type Props = {
  children: React.Node,
  onClick?: Function,
  testId?: string
};

const SmallInactiveButton = ({ children, onClick, testId }: Props) => (
  <Button
    className="button-small button-inactive"
    onClick={onClick}
    testId={formatTestId("small-inactive", testId || String(children))}
  >
    {children}
  </Button>
);

export default SmallInactiveButton;
