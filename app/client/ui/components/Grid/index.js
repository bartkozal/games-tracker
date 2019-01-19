// TODO remove this component

// @flow
import * as React from "react";
import cx from "classnames";
import "./grid.scss";

type Props = {
  columns: 3 | 5,
  children: React.Node[]
};

const parseColumns = (number: 3 | 5): string => {
  if (number === 3) return "thirds";
  if (number === 5) return "fifths";
  return "";
};

const Grid = ({ columns, children }: Props) => (
  <div className={cx("grid", `grid-${parseColumns(columns)}`)}>{children}</div>
);

export default Grid;
