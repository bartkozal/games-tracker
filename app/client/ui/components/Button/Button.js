// @flow
import * as React from "react";
import cx from "classnames";
import formatTestId from "ui/utils/formatTestId";

type Props = {
  children: React.Node,
  onClick?: Function,
  className?: string,
  testId?: string
};

const Button = ({ children, onClick, className, testId }: Props) => (
  <button
    data-cy={formatTestId("button", testId || String(children))}
    className={cx("button", className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
