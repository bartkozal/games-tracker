// @flow
import * as React from "react";
import cx from "classnames";
import LogoSvg from "./logo.svg";

type Props = {
  onClick?: Function
};

const Logo = ({ onClick }: Props) => (
  <LogoSvg
    data-cy="logo"
    onClick={onClick}
    className={cx({ "cursor-pointer": onClick })}
  />
);

export default Logo;
