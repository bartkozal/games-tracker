// @flow
import * as React from "react";
import cx from "classnames";
import "./stack.css";

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
  padding?:
    | "base"
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "vertical"
    | "horizontal"
    | "small"
    | "small-top"
    | "small-right"
    | "small-bottom"
    | "small-left"
    | "small-vertical"
    | "small-horizontal",
  children: React.Node
};

const Stack = ({ direction, distribute, align, padding, children }: Props) => (
  <div
    className={cx("flex", [
      direction ? `flex-direction-${direction}` : null,
      distribute ? `flex-distribute-${distribute}` : null,
      align ? `flex-align-${align}` : null,
      padding ? `padding-${padding}` : null
    ])}
  >
    {React.Children.map(children, child => (
      <div>{child}</div>
    ))}
  </div>
);

export default Stack;
