// @flow
import * as React from "react";
import cx from "classnames";
import Svg from "./logo.svg";

type Props = {
  onClick?: Function
};

const Logo = ({ onClick }: Props) => (
  <Svg
    data-cy="logo"
    onClick={onClick}
    className={cx({ "cursor-pointer": onClick })}
  />
);

export default Logo;
