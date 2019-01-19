// @flow
import * as React from "react";
import cx from "classnames";
import Svg from "./logo.svg";
import "./logo.scss";

type Props = {
  onClick?: Function
};

const Logo = ({ onClick }: Props) => (
  <div className={cx("logo", { "logo-clickable": onClick })}>
    <Svg data-cy="logo" onClick={onClick} />
  </div>
);

export default Logo;
