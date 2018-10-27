// @flow
import * as React from "react";
import cx from "classnames";
import "./grid.css";
import ordinalify from "ui/utils/ordinalify";

type GridItem = {
  id: number
} & any;

type Props = {
  of: GridItem[],
  perRow: 3 | 4 | 5,
  padding?: "small",
  children: Function
};

const Grid = ({ of: items, perRow, padding, children }: Props) => (
  <div className={cx("grid", [padding ? `grid-${padding}` : null])}>
    {items.map(item => (
      <div
        className={cx("grid-item", `grid-item-${ordinalify(perRow)}`)}
        key={item.id}
      >
        {children(item)}
      </div>
    ))}
  </div>
);

export default Grid;
