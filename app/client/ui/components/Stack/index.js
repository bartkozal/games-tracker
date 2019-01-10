// @flow
import * as React from "react";
import cx from "classnames";
import "./stack.scss";

type Props = {
  direction?: "row" | "column",
  distribute?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly",
  align?: "start" | "center" | "end",
  className?: string,
  children: React.Node
};

const Stack = ({
  direction,
  distribute,
  align,
  className,
  children
}: Props) => (
  <div
    className={cx(
      "flex",
      [
        direction ? `flex-direction-${direction}` : null,
        distribute ? `flex-distribute-${distribute}` : null,
        align ? `flex-align-${align}` : null
      ],
      className
    )}
  >
    {React.Children.map(children, child => (
      <div>{child}</div>
    ))}
  </div>
);

export default Stack;
