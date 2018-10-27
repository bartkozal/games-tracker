// @flow
import * as React from "react";
import cx from "classnames";
import cypressify from "ui/utils/cypressify";

type Props = {
  children: React.Node,
  onClick: Function,
  className: string
};

const Button = ({ children, onClick, className }: Props) => (
  <button
    data-cy={`button-${cypressify(children)}`}
    className={cx("button", className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
