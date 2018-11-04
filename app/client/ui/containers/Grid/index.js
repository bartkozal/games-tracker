// @flow
import * as React from "react";
import cx from "classnames";
import "./grid.css";
import ordinalWord from "ui/utils/ordinalWord";

type GridItem = {
  id: number
} & any;

type Props = {
  of: GridItem[],
  perRow: 3 | 4 | 5,
  children: Function,
  padding?: "small"
};

const Grid = ({ of: items, perRow, padding, children }: Props) => (
  <div className={cx("grid", padding ? `grid-${padding}` : null)}>
    {items.map(item => (
      <div
        className={cx("grid-item", `grid-item-${ordinalWord(perRow)}`)}
        key={item.id}
      >
        {children(item)}
      </div>
    ))}
  </div>
);

export default Grid;
